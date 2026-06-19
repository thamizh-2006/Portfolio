import { useState, useRef, useEffect } from "react";
import { profile } from "../data/data";
import { SYSTEM_PROMPT } from "../data/systemPrompt";

const SUGGESTIONS = [
  "Who are you?",
  "Show me your projects",
  "What's your tech stack?",
  "CodeChef stats?",
  "Are you open to internships?",
  "Tell me about your AI project",
];

const BOOT_MSG = [
  `Hi! I'm Thamizhselvan's AI assistant.`,
  `Ask me anything — projects, skills, experience, or just say hi.`,
];

function TypingDots() {
  return (
    <div className="t-typing">
      <span /><span /><span />
    </div>
  );
}

function TerminalEntry({ entry }) {
  if (entry.type === "prompt")
    return (
      <div className="t-entry t-entry--prompt">
        <span className="t-ps1">
          <span className="t-ps1-user">you</span>
          <span className="t-ps1-colon"> &gt;</span>
        </span>
        <span className="t-user-input">{entry.content}</span>
      </div>
    );
  if (entry.type === "typing")
    return (
      <div className="t-entry t-entry--output">
        <TypingDots />
      </div>
    );
  return (
    <div className="t-entry t-entry--output">
      <div className="t-ai-badge">ai</div>
      <p className="t-ai-text">{entry.content}</p>
    </div>
  );
}

export default function Terminal() {
  const [history, setHistory] = useState([
    {
      type: "output",
      content: BOOT_MSG.join(" "),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [chatMessages, setChatMessages] = useState([]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, loading]);

  async function submit(e) {
    e?.preventDefault();
    const msg = input.trim();
    if (!msg || loading) return;

    // Clear input, add user prompt + typing indicator
    setInput("");
    setHistIdx(-1);
    setCmdHistory((h) => [msg, ...h]);

    const newUserMsg = { role: "user", content: msg };
    const updatedChat = [...chatMessages, newUserMsg];
    setChatMessages(updatedChat);

    setHistory((h) => [...h, { type: "prompt", content: msg }]);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: updatedChat,
        }),
      });

      const data = await response.json();
      const reply =
        data?.content?.[0]?.text ||
        "Sorry, I couldn't get a response. Please try again.";

      const assistantMsg = { role: "assistant", content: reply };
      setChatMessages((prev) => [...prev, assistantMsg]);
      setHistory((h) => [...h, { type: "output", content: reply }]);
    } catch (err) {
      setHistory((h) => [
        ...h,
        {
          type: "output",
          content:
            "Connection error. Make sure the Anthropic API is accessible and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx] ?? "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? "" : cmdHistory[idx] ?? "");
    }
  }

  function suggest(msg) {
    setInput(msg);
    inputRef.current?.focus();
  }

  return (
    <div className="terminal-shell" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <span className="t-dot t-dot--red" />
        <span className="t-dot t-dot--yellow" />
        <span className="t-dot t-dot--green" />
        <span className="t-bar-title">
          thamizh@portfolio — AI chat
        </span>
        <span className="t-bar-badge">✦ powered by Claude</span>
      </div>

      <div className="terminal-body">
        {history.map((entry, i) => (
          <TerminalEntry key={i} entry={entry} />
        ))}
        {loading && <TerminalEntry entry={{ type: "typing" }} />}
        <div ref={bottomRef} />
      </div>

      <form className="t-input-form" onSubmit={submit}>
        <span className="t-ps1">
          <span className="t-ps1-user">you</span>
          <span className="t-ps1-colon"> &gt;</span>
        </span>
        <input
          ref={inputRef}
          className="t-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          autoFocus
          autoComplete="off"
          spellCheck="false"
          placeholder={loading ? "waiting…" : "ask me anything…"}
          disabled={loading}
          aria-label="Chat input"
        />
        <button
          type="submit"
          className={`t-send-btn${loading ? " t-send-btn--loading" : ""}`}
          disabled={loading}
          aria-label="Send"
        >
          {loading ? "…" : "↵"}
        </button>
      </form>

      <div className="terminal-suggestions">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            className="t-chip"
            onClick={() => suggest(s)}
            disabled={loading}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

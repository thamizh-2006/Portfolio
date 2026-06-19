import { useState, useRef, useEffect } from "react";
import { getResponse, STARTER_SUGGESTIONS } from "../data/chatbot";

function TypingBubble() {
  return (
    <div className="chat-msg chat-msg--bot">
      <div className="chat-avatar">AI</div>
      <div className="chat-bubble chat-bubble--bot chat-bubble--typing">
        <span /><span /><span />
      </div>
    </div>
  );
}

function Message({ msg }) {
  const isBot = msg.role === "bot";
  return (
    <div className={`chat-msg chat-msg--${isBot ? "bot" : "user"}`}>
      {isBot && <div className="chat-avatar">AI</div>}
      <div className={`chat-bubble chat-bubble--${isBot ? "bot" : "user"}`}>
        {msg.text.split("\n").map((line, i) => (
          line.trim() === "" ? <br key={i} /> :
          line.startsWith("http") ? (
            <a key={i} href={line} target="_blank" rel="noopener noreferrer" className="chat-link">{line}</a>
          ) : (
            <span key={i}>{line}<br /></span>
          )
        ))}
      </div>
      {!isBot && <div className="chat-avatar chat-avatar--user">You</div>}
    </div>
  );
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi there! 👋 I'm Thamizhselvan's AI assistant. Ask me anything about his skills, projects, education, or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage(text) {
    const msg = text || input.trim();
    if (!msg || typing) return;

    setInput("");
    setShowSuggestions(false);
    setMessages((m) => [...m, { role: "user", text: msg }]);
    setTyping(true);

    // Simulate thinking delay for realism
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
      const response = getResponse(msg);
      setMessages((m) => [...m, { role: "bot", text: response }]);
      setTyping(false);
    }, delay);
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="chatbot-shell">
      {/* Header */}
      <div className="chatbot-header">
        <div className="chatbot-header-avatar">
          <span>TS</span>
          <span className="chatbot-online-dot" />
        </div>
        <div className="chatbot-header-info">
          <p className="chatbot-header-name">Thamizhselvan's Assistant</p>
          <p className="chatbot-header-status">● Online — Ask me anything</p>
        </div>
      </div>

      {/* Messages */}
      <div className="chatbot-body">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
        {typing && <TypingBubble />}

        {/* Starter suggestions */}
        {showSuggestions && !typing && (
          <div className="chat-suggestions">
            {STARTER_SUGGESTIONS.map((s) => (
              <button key={s} className="chat-suggest-chip" onClick={() => sendMessage(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="chatbot-input-area">
        <textarea
          ref={inputRef}
          className="chatbot-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask about skills, projects, education…"
          rows={1}
          disabled={typing}
        />
        <button
          className={`chatbot-send${typing ? " chatbot-send--disabled" : ""}`}
          onClick={() => sendMessage()}
          disabled={typing}
          aria-label="Send"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

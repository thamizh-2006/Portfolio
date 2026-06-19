import useReveal from "../hooks/useReveal";
import { profile, platforms, achievements } from "../data/data";

export default function About() {
  const [ref, visible] = useReveal();

  const stats = [
    { value: "8.1", label: "CGPA" },
    { value: "660", label: "CodeChef Problems" },
    { value: "4★", label: "CodeChef Rating" },
    { value: "3rd", label: "Iter'yx '26 Hackathon" },
  ];

  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className={`section-inner reveal${visible ? " revealed" : ""}`}>
        <p className="section-eyebrow">01 — Who I Am</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a first-year Computer Science student at KIT Coimbatore (2024–2028),
              obsessed with building things that actually work end to end.
              My instinct is to reach for the full stack — React on the front,
              Node/Express in the middle, MongoDB or MySQL underneath —
              and I pull in Python and ML when the problem calls for intelligence instead of just logic.
            </p>
            <p>
              Outside class, I sharpen problem-solving on CodeChef (4★, 660+ problems)
              and published an NLP chatbot framework for academic information retrieval.
              In 2026 I placed 3rd at the Iter'yx national hackathon in Chennai.
            </p>
            <p>
              I also mentor juniors in HTML & CSS because the fastest way to really
              know something is to teach it.
            </p>
            <div className="about-langs">
              {profile.languages.map((l) => (
                <span key={l.name} className="lang-chip">
                  {l.name} — {l.level}
                </span>
              ))}
            </div>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

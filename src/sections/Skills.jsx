import useReveal from "../hooks/useReveal";
import { skills, certifications, platforms, strengths } from "../data/data";

const ALL_SKILLS = [
  { name: "JavaScript", pct: 85 },
  { name: "Python", pct: 80 },
  { name: "C++", pct: 78 },
  { name: "React.js", pct: 75 },
  { name: "Node.js / Express", pct: 72 },
  { name: "MongoDB / MySQL", pct: 70 },
  { name: "C", pct: 68 },
  { name: "Java", pct: 60 },
  { name: "Git / GitHub", pct: 82 },
];

function SkillBar({ name, pct, visible }) {
  return (
    <div className="skill-bar-row">
      <div className="skill-bar-label">
        <span>{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className={`section-inner reveal${visible ? " revealed" : ""}`}>
        <p className="section-eyebrow">04 — Toolkit</p>
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {/* Bars */}
          <div className="skills-bars">
            {ALL_SKILLS.map((s) => (
              <SkillBar key={s.name} name={s.name} pct={s.pct} visible={visible} />
            ))}
          </div>

          {/* Right column — certifications + competitive + strengths */}
          <div className="skills-sidebar">
            {/* Certifications */}
            <div className="skills-block">
              <h3 className="skills-block-title">Certifications</h3>
              <ul className="cert-list">
                {certifications.map((c) => (
                  <li key={c.name} className="cert-item">
                    <span className="cert-dot" />
                    <div>
                      <p className="cert-name">{c.name}</p>
                      <p className="cert-issuer">{c.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitive */}
            <div className="skills-block">
              <h3 className="skills-block-title">Competitive Programming</h3>
              {platforms.map((p) => (
                <div key={p.name} className="platform-block">
                  <p className="platform-name">{p.name}</p>
                  <div className="platform-stats">
                    {p.stats.map((s) => (
                      <div key={s.label} className="platform-stat">
                        <span className="platform-stat-val">{s.value}</span>
                        <span className="platform-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div className="skills-block">
              <h3 className="skills-block-title">Strengths</h3>
              <div className="strength-chips">
                {strengths.map((s) => (
                  <span key={s} className="strength-chip">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

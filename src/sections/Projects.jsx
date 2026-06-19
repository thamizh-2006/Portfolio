import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import { projects } from "../data/data";

function ProjectCard({ project, delay }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (el) el.style.transform = "";
  }

  const stackColors = {
    "C++": "#ef4444",
    Python: "#3b82f6",
    "Node.js": "#22c55e",
    "React.js": "#06b6d4",
    MongoDB: "#84cc16",
    MySQL: "#f59e0b",
    "Scikit-learn": "#8b5cf6",
    default: "#94a3b8",
  };

  return (
    <article
      ref={cardRef}
      className="project-card"
      style={{ transitionDelay: `${delay}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-inner">
        <div className="project-card-header">
          <span className="project-card-tag">{project.tag}</span>
          <a
            href={project.github}
            className="project-github-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((s) => (
            <span
              key={s}
              className="stack-badge"
              style={{ "--badge-color": stackColors[s] ?? stackColors.default }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className={`section-inner reveal${visible ? " revealed" : ""}`}>
        <p className="section-eyebrow">03 — What I've Built</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} />
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/thamizh-2006"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

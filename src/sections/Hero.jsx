import { useEffect, useState } from "react";
import Chatbot from "../components/Chatbot";
import { profile } from "../data/data";

const ROTATING_ROLES = profile.roles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROTATING_ROLES.length);
        setFade(true);
      }, 350);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        {/* LEFT — identity */}
        <div className="hero-identity">
          <div className="hero-photo-wrap">
            <img src={profile.photo} alt={profile.name} className="hero-photo" />
            <div className="hero-photo-ring" />
          </div>

          <div className="hero-meta">
            <p className="hero-eyebrow">
              <span className="mono">&lt;dev&gt;</span> currently building
            </p>
            <h1 className="hero-name">
              <span className="hero-name-first">Thamizhselvan </span>
              <span className="hero-name-last">S</span>
            </h1>
            <p className="hero-role-wrap">
              <span className={`hero-role${fade ? " hero-role--visible" : ""}`}>
                {ROTATING_ROLES[roleIdx]}
              </span>
            </p>
            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-cta-row">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href={profile.resume} className="btn btn-outline" download>
                Download CV
              </a>
            </div>

            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <GitHubIcon /> {profile.githubHandle}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <LinkedInIcon /> {profile.linkedinHandle}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — AI chatbot */}
        <div className="hero-chatbot">
          <Chatbot />
        </div>
      </div>

      <a href="#about" className="hero-scroll-hint">
        <span>scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5"/>
          <circle className="scroll-wheel" cx="7" cy="6" r="2" fill="currentColor"/>
        </svg>
      </a>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
    </svg>
  );
}

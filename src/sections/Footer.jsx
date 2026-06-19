import { profile } from "../data/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-name">{profile.name}</span>
        <span className="footer-sep">·</span>
        <span className="footer-built">Crafted with React + Vite · 2026</span>
        <span className="footer-sep">·</span>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-link">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

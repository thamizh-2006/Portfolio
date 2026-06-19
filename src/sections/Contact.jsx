import useReveal from "../hooks/useReveal";
import { profile } from "../data/data";

export default function Contact() {
  const [ref, visible] = useReveal(0.1);

  const items = [
    {
      icon: <EmailIcon />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      value: `/${profile.githubHandle}`,
      href: profile.github,
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      value: profile.linkedinHandle,
      href: profile.linkedin,
    },
    {
      icon: <LocationIcon />,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className={`section-inner reveal${visible ? " revealed" : ""}`}>
        <p className="section-eyebrow">05 — Let's Connect</p>
        <h2 className="section-title">Contact</h2>
        <p className="contact-subtitle">
          Open to internships, freelance work, collaborations, or just a good conversation about code.
        </p>

        <div className="contact-grid">
          {items.map((item) => (
            <div key={item.label} className="contact-card">
              <span className="contact-icon">{item.icon}</span>
              <div>
                <p className="contact-label">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="contact-value contact-value--link"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-value">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-resume">
          <a href={profile.resume} download className="btn btn-primary btn-lg">
            Download Résumé →
          </a>
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 8l10 7 10-7"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.13 1 .38 1.98.73 2.92a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.94.35 1.92.6 2.92.73A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

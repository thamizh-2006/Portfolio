import useReveal from "../hooks/useReveal";
import { education, certifications, research, achievements, volunteering } from "../data/data";

const timeline = [
  {
    period: "2022",
    tag: "Milestone",
    title: "SSLC — 92.0%",
    body: "Bhagavan Matriculation Higher Secondary School.",
  },
  {
    period: "2024",
    tag: "Milestone",
    title: "HSC — 83.3%",
    body: "Bhagavan Matriculation Higher Secondary School.",
  },
  {
    period: "2024 →",
    tag: "University",
    title: "B.E. CSE — KIT Coimbatore",
    body: "CGPA 8.1 / 10. Core subjects: Computer Architecture, Networks, OS, DBMS, Algorithms. Expected graduation 2028.",
  },
  {
    period: "2024–25",
    tag: "Certifications",
    title: "AWS · Salesforce · NPTEL × 2",
    body: "AWS Certified Cloud Practitioner, Salesforce Certified Agentforce Specialist, NPTEL — Modern C++, NPTEL — DSA using C++.",
  },
  {
    period: "2025",
    tag: "Research",
    title: "Published Paper",
    body: `"${research.title}" — explored NLP-based retrieval for academic queries.`,
  },
  {
    period: "2026",
    tag: "Achievement",
    title: "3rd Place — Iter'yx '26 Hackathon",
    body: "National-level hackathon held in Chennai.",
  },
  {
    period: "Ongoing",
    tag: "Community",
    title: "Mentoring",
    body: volunteering[0].detail,
  },
];

function TimelineItem({ item, index, visible }) {
  const isLeft = index % 2 === 0;
  return (
    <div
      className={`tl-item${visible ? " tl-item--visible" : ""}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className={`tl-card tl-card--${isLeft ? "left" : "right"}`}>
        <span className="tl-tag">{item.tag}</span>
        <p className="tl-period">{item.period}</p>
        <h3 className="tl-title">{item.title}</h3>
        <p className="tl-body">{item.body}</p>
      </div>
      <div className="tl-node">
        <span className="tl-node-dot" />
      </div>
    </div>
  );
}

export default function Journey() {
  const [ref, visible] = useReveal(0.05);

  return (
    <section className="section journey-section" id="journey" ref={ref}>
      <div className="section-inner">
        <p className="section-eyebrow">02 — My Story</p>
        <h2 className="section-title">Journey</h2>

        <div className="timeline">
          <div className="tl-spine" />
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

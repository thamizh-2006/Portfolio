import {
  profile,
  education,
  skills,
  strengths,
  platforms,
  certifications,
  projects,
  research,
  achievements,
  volunteering,
} from "./data";

// Each handler returns an array of "blocks" the <Terminal> component knows
// how to render: text, heading, list, projectList, linkRow.

const HELP_COMMANDS = [
  { cmd: "whoami", desc: "who I am" },
  { cmd: "skills", desc: "languages, frameworks, tools" },
  { cmd: "projects", desc: "things I've built" },
  { cmd: "education", desc: "degrees & schools" },
  { cmd: "rank", desc: "CodeChef / LeetCode stats" },
  { cmd: "certs", desc: "certifications" },
  { cmd: "research", desc: "published paper" },
  { cmd: "achievements", desc: "hackathons & wins" },
  { cmd: "contact", desc: "email, phone, socials" },
  { cmd: "resume", desc: "download the PDF" },
  { cmd: "clear", desc: "clear the terminal" },
];

function whoami() {
  return [
    { type: "heading", content: profile.name },
    { type: "text", content: `${profile.title} · ${profile.roles.join(" · ")}` },
    { type: "text", content: profile.tagline },
    {
      type: "list",
      items: profile.languages.map((l) => `${l.name} — ${l.level}`),
      label: "Languages",
    },
  ];
}

function skillsCmd() {
  return [
    { type: "heading", content: "Skills" },
    { type: "list", items: skills.languages, label: "Languages" },
    { type: "list", items: skills.frontend, label: "Frontend" },
    { type: "list", items: skills.backend, label: "Backend & DB" },
    { type: "list", items: skills.tools, label: "Tools" },
    { type: "list", items: strengths, label: "Strengths" },
  ];
}

function projectsCmd() {
  return [
    { type: "heading", content: `Projects (${projects.length})` },
    { type: "projectList", items: projects },
    { type: "text", content: "type a project name for details, e.g. \"survey\"" },
  ];
}

function projectDetail(p) {
  return [
    { type: "heading", content: p.title },
    { type: "text", content: p.tag },
    { type: "text", content: p.description },
    { type: "list", items: p.stack, label: "Stack" },
    { type: "linkRow", label: "View on GitHub →", href: p.github },
  ];
}

function educationCmd() {
  const blocks = [{ type: "heading", content: "Education" }];
  education.forEach((e) => {
    blocks.push({ type: "text", content: `${e.degree} — ${e.detail}` });
    blocks.push({ type: "text", content: `${e.school} (${e.period})`, dim: true });
    if (e.courses.length) {
      blocks.push({ type: "list", items: e.courses, label: "Coursework" });
    }
  });
  return blocks;
}

function rankCmd() {
  const blocks = [{ type: "heading", content: "Competitive Programming" }];
  platforms.forEach((p) => {
    blocks.push({
      type: "list",
      items: p.stats.map((s) => `${s.label}: ${s.value}`),
      label: p.name,
    });
  });
  return blocks;
}

function certsCmd() {
  return [
    { type: "heading", content: "Certifications" },
    { type: "list", items: certifications.map((c) => `${c.name} — ${c.issuer}`) },
  ];
}

function researchCmd() {
  return [
    { type: "heading", content: research.type },
    { type: "text", content: `"${research.title}"` },
  ];
}

function achievementsCmd() {
  return [
    { type: "heading", content: "Achievements" },
    { type: "list", items: achievements.map((a) => `${a.title} — ${a.detail}`) },
    { type: "heading", content: "Volunteering" },
    { type: "list", items: volunteering.map((v) => v.detail) },
  ];
}

function contactCmd() {
  return [
    { type: "heading", content: "Contact" },
    { type: "linkRow", label: profile.email, href: `mailto:${profile.email}` },
    { type: "linkRow", label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { type: "linkRow", label: "GitHub →", href: profile.github },
    { type: "linkRow", label: "LinkedIn →", href: profile.linkedin },
    { type: "text", content: profile.location, dim: true },
  ];
}

function resumeCmd() {
  return [
    { type: "text", content: "opening resume.pdf …" },
    { type: "linkRow", label: "Download résumé →", href: profile.resume, download: true },
  ];
}

function helpCmd() {
  return [
    { type: "heading", content: "Available commands" },
    {
      type: "list",
      items: HELP_COMMANDS.map((c) => `${c.cmd} — ${c.desc}`),
    },
  ];
}

function unknown(input) {
  return [
    { type: "error", content: `command not found: "${input}"` },
    { type: "text", content: 'type "help" to see what I can answer.', dim: true },
  ];
}

const PROJECT_KEYWORDS = projects.map((p) => ({
  p,
  keys: [p.id, ...p.title.toLowerCase().split(" ")],
}));

export function runCommand(raw) {
  const input = raw.trim().toLowerCase();
  if (!input) return null;

  if (["clear", "cls", "reset"].includes(input)) return { clear: true };

  if (["help", "?", "commands", "man"].includes(input)) return { blocks: helpCmd() };

  if (["whoami", "about", "who are you", "intro", "hi", "hello", "hey"].some((k) => input.includes(k)))
    return { blocks: whoami() };

  if (["skill", "tech stack", "stack", "languages", "tools"].some((k) => input.includes(k)))
    return { blocks: skillsCmd() };

  if (["education", "degree", "school", "college", "cgpa", "academic"].some((k) => input.includes(k)))
    return { blocks: educationCmd() };

  if (["rank", "codechef", "leetcode", "competitive", "rating", "dsa rank"].some((k) => input.includes(k)))
    return { blocks: rankCmd() };

  if (["cert", "aws", "salesforce", "nptel"].some((k) => input.includes(k)))
    return { blocks: certsCmd() };

  if (["research", "paper", "publication", "nlp chatbot"].some((k) => input.includes(k)))
    return { blocks: researchCmd() };

  if (["achievement", "hackathon", "award", "volunteer", "mentor"].some((k) => input.includes(k)))
    return { blocks: achievementsCmd() };

  if (["contact", "email", "phone", "reach", "hire", "linkedin", "github", "social"].some((k) => input.includes(k)))
    return { blocks: contactCmd() };

  if (["resume", "cv", "download"].some((k) => input.includes(k))) return { blocks: resumeCmd() };

  if (["project", "work", "build", "portfolio"].some((k) => input.includes(k)) && input !== "portfolio.exe")
    return { blocks: projectsCmd() };

  const projectHit = PROJECT_KEYWORDS.find((pk) => pk.keys.some((k) => k.length > 3 && input.includes(k)));
  if (projectHit) return { blocks: projectDetail(projectHit.p) };

  if (["sudo"].some((k) => input.startsWith(k)))
    return { blocks: [{ type: "text", content: "nice try. permission denied — but I admire the confidence." }] };

  return { blocks: unknown(raw) };
}

export const SUGGESTIONS = ["whoami", "projects", "skills", "rank", "resume", "contact"];

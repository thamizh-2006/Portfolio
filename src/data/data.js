// All real content lives here — edit this file to update the site.

export const profile = {
  name: "Thamizhselvan S",
  initials: "TS",
  title: "Computer Science & Engineering",
  roles: ["Full Stack Developer", "AI Enthusiast", "Competitive Programmer"],
  location: "Coimbatore, Tamil Nadu",
  phone: "+91 6379619578",
  email: "thamizhs805@gmail.com",
  github: "https://github.com/thamizh-2006",
  githubHandle: "thamizh-2006",
  linkedin: "https://linkedin.com/in/thamizhselvan-s",
  linkedinHandle: "linkedin.com/in/thamizhselvan-s",
  resume: "/resume.pdf",
  photo: "/profile.jpg",
  languages: [
    { name: "Tamil", level: "Native" },
    { name: "English", level: "Proficient" },
    { name: "Hindi", level: "Basic" },
  ],
  tagline:
    "I build things end to end — from React interfaces down to the databases underneath — and spend my spare cycles on competitive programming and NLP experiments.",
};

export const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    school: "KIT — Kalaignar Karunanidhi Institute of Technology, Coimbatore",
    period: "2024 – 2028",
    detail: "CGPA 8.1 / 10.0",
    courses: [
      "Computer Architecture",
      "Computer Networks",
      "Operating Systems",
      "DBMS",
      "Design & Analysis of Algorithms",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Bhagavan Matriculation Higher Secondary School",
    period: "2024",
    detail: "83.3%",
    courses: [],
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "Bhagavan Matriculation Higher Secondary School",
    period: "2022",
    detail: "92.0%",
    courses: [],
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "C++", "C", "Java"],
  frontend: ["React.js", "HTML", "CSS"],
  backend: ["Node.js", "Express.js", "MongoDB"],
  tools: ["Git", "GitHub"],
};

export const strengths = ["Communication", "Team Work", "Leadership", "Adaptability"];

export const platforms = [
  {
    name: "CodeChef",
    stats: [
      { label: "Max Rating", value: "982" },
      { label: "Stars", value: "4★" },
      { label: "Problems Solved", value: "660" },
      { label: "Best Rank", value: "1009 (Div 4)" },
      { label: "Global Rank", value: "145,227" },
    ],
  },
  {
    name: "LeetCode",
    stats: [{ label: "Problems Solved", value: "90" }],
  },
];

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Salesforce Certified Agentforce Specialist", issuer: "Salesforce" },
  { name: "Modern Programming in C++", issuer: "NPTEL" },
  { name: "Design and Analysis of Algorithms using C++", issuer: "NPTEL" },
];

export const projects = [
  {
    id: "waste",
    title: "Smart Waste Segregation System",
    tag: "Mini Project · DSA",
    summary:
      "A C++ console system that models an entire city waste-pipeline purely through data structures.",
    description:
      "Bins are managed as a linked list, pickup requests queue up FIFO, zone connections form a graph for routing, waste categories sort through a tree, bin status resolves through a hash table, and a dedicated stack lets any pickup be undone.",
    stack: ["C++", "Graph", "Queue", "Stack", "Tree", "Linked List", "Hash Table"],
    github: "https://github.com/thamizh-2006/Smart-Waste-Segregation-System",
  },
  {
    id: "academic",
    title: "Student Attendance Tracker",
    tag: "Project · MERN Stack",
    summary:
      "A backend-driven academic management system built on the MERN stack.",
    description:
      "Authentication, subjects, assignments, and exam records each live as their own REST module on top of Express and MongoDB, built to be the data backbone for a student-facing dashboard.",
    stack: ["Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/thamizh-2006/mernstack-project",
  },
  {
    id: "docs",
    title: "AI-Based Document Classification",
    tag: "Project · AI / ML",
    summary: "An NLP pipeline that sorts raw text into predefined categories.",
    description:
      "Documents are vectorized with TF-IDF and routed through classical ML algorithms via scikit-learn, with a modular train/predict split so new models can be swapped in without touching the pipeline.",
    stack: ["Python", "Scikit-learn", "NLTK", "Pandas", "NumPy"],
    github: "https://github.com/thamizh-2006/AI-based-Document-Classification",
  },
  {
    id: "survey",
    title: "Online Survey System",
    tag: "Project · Full Stack",
    summary: "A full-stack survey platform with real-time response analytics.",
    description:
      "A MySQL-backed REST API handles surveys, multiple question types (text, multiple-choice, rating, checkboxes), and response statistics, served to a vanilla-JS frontend with create, take, and manage flows.",
    stack: ["Node.js", "Express.js", "MySQL", "REST API"],
    github: "https://github.com/thamizh-2006/online-survey-system",
  },
];

export const research = {
  title: "An NLP Chatbot Framework for Academic Information Retrieval",
  type: "Published Paper",
};

export const achievements = [
  {
    title: "3rd Place — Iter'yx '26 Hackathon",
    detail: "National-level hackathon held in Chennai · 2026",
  },
];

export const volunteering = [
  {
    detail:
      "Mentored junior students in HTML & CSS programming fundamentals, delivering structured hands-on exercises and coding challenges that fostered practical understanding and long-term passion for software development.",
  },
];

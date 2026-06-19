// ============================================================
//  SELF-CONTAINED RESUME CHATBOT — no API needed
//  All logic runs in the browser
// ============================================================

const ME = {
  name: "Thamizhselvan S",
  role: "Computer Science & Engineering student",
  college: "KIT — Kalaignar Karunanidhi Institute of Technology, Coimbatore",
  cgpa: "8.1 / 10.0",
  year: "2024–2028",
  email: "thamizhs805@gmail.com",
  phone: "+91 6379619578",
  github: "https://github.com/thamizh-2006",
  linkedin: "https://linkedin.com/in/thamizhselvan-s",
  location: "Coimbatore, Tamil Nadu",
};

// ---- knowledge base ----------------------------------------

const KB = {
  intro: [
    `Hi! I'm Thamizhselvan S — a Computer Science & Engineering student at KIT Coimbatore (2024–2028) with a CGPA of 8.1. I'm passionate about full-stack development and AI. How can I help you today?`,
    `Hey there! I'm Thamizhselvan — a CSE student, full-stack developer, and AI enthusiast from Coimbatore. I've built MERN apps, ML pipelines, and even published an NLP research paper. What would you like to know?`,
  ],

  skills: `My technical skills span the full stack:\n\n🔹 Languages — Python, JavaScript, C++, C, Java\n🔹 Frontend — React.js, HTML, CSS\n🔹 Backend & DB — Node.js, Express.js, MongoDB, MySQL\n🔹 Tools — Git, GitHub\n\nOn the soft side: communication, teamwork, leadership, and adaptability.`,

  education: `Here's my academic journey:\n\n🎓 B.E. Computer Science & Engineering\n   KIT Coimbatore | 2024–2028 | CGPA 8.1/10\n   Key courses: Computer Architecture, Networks, OS, DBMS, Algorithms\n\n📘 HSC — Bhagavan Matriculation Higher Secondary School | 2024 | 83.3%\n\n📗 SSLC — Bhagavan Matriculation Higher Secondary School | 2022 | 92.0%`,

  projects: {
    all: `I've built 4 projects so far:\n\n1️⃣  Smart Waste Segregation System — C++ / DSA\n2️⃣  Student Attendance Tracker — MERN Stack\n3️⃣  AI-Based Document Classification — Python / ML\n4️⃣  Online Survey System — Full Stack\n\nAsk me about any one of them for details!`,

    waste: `Smart Waste Segregation System\n\nA C++ console app that models a city's entire waste pipeline using data structures:\n• Graph → zone routing\n• Queue → FIFO pickup requests\n• Stack → undo last pickup\n• Tree → waste category sorting\n• Linked List → bin management\n• Hash Table → fast bin lookup\n\nIt was a mini-project, but it taught me how to map real-world problems onto DSA concepts.\n\nGitHub → https://github.com/thamizh-2006/Smart-Waste-Segregation-System`,

    attendance: `Student Attendance Tracker\n\nA backend REST API built on the MERN stack (Node.js + Express + MongoDB).\nIt handles authentication, subjects, assignments, and exam records — designed as the data backbone for a student dashboard.\n\nGitHub → https://github.com/thamizh-2006/mernstack-project`,

    ai: `AI-Based Document Classification\n\nAn NLP pipeline in Python that classifies raw text documents into categories.\nThe approach: TF-IDF vectorization → scikit-learn classifiers.\nThe pipeline is modular — you can swap models without touching the data layer.\n\nStack: Python, scikit-learn, NLTK, Pandas, NumPy\n\nGitHub → https://github.com/thamizh-2006/AI-based-Document-Classification`,

    survey: `Online Survey System\n\nA full-stack survey platform supporting multiple question types: text, MCQ, rating, and checkboxes.\nNode.js + Express backend, MySQL database, vanilla JS frontend.\nIncludes real-time response analytics and a full CRUD flow.\n\nGitHub → https://github.com/thamizh-2006/online-survey-system`,
  },

  competitive: `Competitive Programming Stats:\n\n🟠 CodeChef\n   Max Rating: 982 | 4-Star\n   Problems Solved: 660+\n   Best Contest Rank: 1009 (Div 4)\n   Global Rank: 145,227\n\n🟡 LeetCode\n   Problems Solved: 90\n\nI solve problems regularly to sharpen my DSA and logical thinking.`,

  certifications: `My certifications:\n\n✅ AWS Certified Cloud Practitioner — Amazon Web Services\n✅ Salesforce Certified Agentforce Specialist — Salesforce\n✅ Modern Programming in C++ — NPTEL\n✅ Design and Analysis of Algorithms using C++ — NPTEL`,

  research: `Published Research Paper:\n\n📄 "An NLP Chatbot Framework for Academic Information Retrieval"\n\nThis paper explores building a chatbot that retrieves academic information using Natural Language Processing techniques. It's directly related to my interest in AI and conversational systems.`,

  achievements: `Achievements & Recognition:\n\n🏆 3rd Place — Iter'yx '26 Hackathon\n   National-level hackathon held in Chennai (2026)\n\n🤝 Volunteering\n   Mentored junior students in HTML & CSS programming — delivering structured hands-on exercises that helped them build a real passion for software development.`,

  contact: `You can reach me through:\n\n📧 Email → ${ME.email}\n📞 Phone → ${ME.phone}\n💻 GitHub → ${ME.github}\n💼 LinkedIn → ${ME.linkedin}\n📍 Location → ${ME.location}\n\nFeel free to reach out — I'm open to internships, collaborations, and cool projects!`,

  resume: `You can download my full resume as a PDF:\n\n📄 Click the "Download CV" button in the hero section, or tap the Resume link in the navbar.\n\nIt covers my education, skills, projects, certifications, research, and achievements.`,

  internship: `Yes, I'm actively looking for internships and freelance collaborations! I'm especially interested in:\n\n• Full-stack development (MERN)\n• AI/ML engineering\n• Backend API development\n\nDrop me an email at ${ME.email} or connect on LinkedIn — I'd love to chat!`,

  languages: `Languages I speak:\n\n🗣 Tamil — Native\n🗣 English — Proficient\n🗣 Hindi — Basic`,

  strengths: `My key strengths:\n\n💬 Communication — I explain complex things simply (I also mentor juniors)\n🤝 Teamwork — I collaborate well and contribute actively\n🎯 Leadership — I've led teams in hackathons\n🔄 Adaptability — I pick up new tech fast`,

  unknown: [
    `Hmm, I'm not sure about that one. Try asking about my projects, skills, education, certifications, or how to contact me!`,
    `I didn't quite catch that. You can ask me about my skills, projects, internship availability, competitive programming stats, or research paper.`,
    `Good question, but I might not have an answer for that. Try: "What projects have you built?" or "Are you open to internships?"`,
  ],
};

// ---- response engine ----------------------------------------

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function match(text, keywords) {
  return keywords.some((k) => text.includes(k));
}

export function getResponse(raw) {
  const text = raw.toLowerCase().trim();

  // greetings
  if (match(text, ["hello", "hi", "hey", "howdy", "yo", "sup", "good morning", "good evening", "namaste"]))
    return pick(KB.intro);

  // who are you / about / intro
  if (match(text, ["who are you", "about you", "introduce", "tell me about yourself", "your name", "yourself", "what do you do", "bio"]))
    return pick(KB.intro);

  // skills / tech
  if (match(text, ["skill", "tech", "stack", "language", "framework", "tool", "know", "expertise", "proficient", "technologies"]))
    return KB.skills;

  // education / college / degree
  if (match(text, ["education", "college", "university", "school", "degree", "study", "cgpa", "marks", "grade", "academic", "kit", "coimbatore"]))
    return KB.education;

  // specific projects
  if (match(text, ["waste", "segregat", "garbage", "bin", "c++ project", "mini project"]))
    return KB.projects.waste;

  if (match(text, ["attendance", "tracker", "mern", "student"]))
    return KB.projects.attendance;

  if (match(text, ["document", "classification", "ml project", "nlp project", "ai project", "machine learning project", "scikit", "tfidf", "tf-idf"]))
    return KB.projects.ai;

  if (match(text, ["survey", "online survey", "full stack project", "mysql project"]))
    return KB.projects.survey;

  // all projects
  if (match(text, ["project", "built", "build", "work", "portfolio", "github project", "what have you"]))
    return KB.projects.all;

  // competitive
  if (match(text, ["codechef", "leetcode", "competitive", "rating", "rank", "problem", "dsa", "algorithm challenge", "coding platform"]))
    return KB.competitive;

  // certifications
  if (match(text, ["cert", "aws", "salesforce", "nptel", "certif", "credential", "course"]))
    return KB.certifications;

  // research / paper
  if (match(text, ["research", "paper", "publish", "nlp chatbot", "academic retrieval", "published"]))
    return KB.research;

  // achievements / hackathon / volunteering
  if (match(text, ["achievement", "hackathon", "award", "win", "prize", "volunteer", "mentor", "iteryx", "iter"]))
    return KB.achievements;

  // contact
  if (match(text, ["contact", "email", "phone", "reach", "linkedin", "github", "social", "connect", "message", "dm", "mail"]))
    return KB.contact;

  // resume download
  if (match(text, ["resume", "cv", "download", "pdf"]))
    return KB.resume;

  // internship / hire / job
  if (match(text, ["intern", "hire", "job", "opportunit", "freelance", "work with", "collab", "available", "open to", "recruit"]))
    return KB.internship;

  // languages spoken
  if (match(text, ["tamil", "hindi", "english", "speak", "spoken language"]))
    return KB.languages;

  // strengths / soft skills
  if (match(text, ["strength", "soft skill", "leadership", "teamwork", "communication", "adaptab"]))
    return KB.strengths;

  // thanks
  if (match(text, ["thank", "thanks", "great", "awesome", "nice", "cool", "perfect", "helpful"]))
    return `You're welcome! 😊 Feel free to ask anything else about my background, projects, or how to get in touch.`;

  // bye
  if (match(text, ["bye", "goodbye", "see you", "later", "cya"]))
    return `Thanks for visiting! Feel free to come back anytime or reach out at ${ME.email}. 👋`;

  return pick(KB.unknown);
}

export const STARTER_SUGGESTIONS = [
  "Tell me about yourself",
  "What are your skills?",
  "Show me your projects",
  "Are you open to internships?",
  "What's your CGPA?",
  "How can I contact you?",
];

# Thamizhselvan S — Portfolio

An interactive, terminal-style personal portfolio built with React + Vite.

🔗 **Deploy to:** Netlify / Vercel (drag & drop the `dist/` folder after build)

## Features

- 🖥️ Interactive terminal hero — type commands like `projects`, `skills`, `rank`, `contact`
- 🌗 Dark / Light mode toggle (persists in localStorage)
- 📖 Scroll-driven storytelling timeline (education → certs → research → achievements)
- 🃏 3D tilt hover effect on project cards
- 🖱️ Custom cursor with lag ring
- 📊 Animated skill bars
- 📄 Resume download (linked to `/public/resume.pdf`)
- 📱 Fully responsive

## Quick Start

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
# upload dist/ to Netlify, Vercel, or GitHub Pages
```

## Update Your Info

All content lives in **one file**: `src/data/data.js`  
Edit it, save, and the whole site updates.

## Tech Stack

React · Vite · CSS Custom Properties · Web APIs (IntersectionObserver)

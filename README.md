# Shaijad Shaikh | Android Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-shaijad--portfolio.vercel.app-00dfa2?style=flat&logo=vercel&logoColor=white)](https://shaijad-portfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-shaijad7-181717?style=flat&logo=github&logoColor=white)](https://github.com/shaijad7/shaijad-portfolio)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Personal-blue.svg)](LICENSE)

Personal developer portfolio website showcasing my technical skills, mobile & software projects, education, internship experience, and achievements as a Software Developer with a primary focus on **Android Development**.

---

## 🔗 Live Demo

- **Live Portfolio:** [https://shaijad-portfolio.vercel.app/](https://shaijad-portfolio.vercel.app/)
- **GitHub Repository:** [https://github.com/shaijad7/shaijad-portfolio](https://github.com/shaijad7/shaijad-portfolio)

---

## 📖 Overview

This portfolio is designed and built to communicate my technical background, software development experience, and practical engineering skills to recruiters, engineering managers, and collaborators. 

While my primary specialization is **Android Development** (Kotlin, Java, Jetpack Compose, Android Studio), the portfolio also highlights practical work across full-stack backend services, web applications, computer vision, and system architectures.

---

## ✨ Features

- **Premium Dark-Themed UI:** Bespoke charcoal and emerald design system engineered with subtle grid accents and modern typography.
- **Fully Responsive:** Tailored layouts with fluid typography and zero horizontal overflow across mobile (360px & 390px), tablet (768px), and desktop (1440px+) displays.
- **Balanced Centered Hero:** Clear professional positioning with an active availability status badge, Android Developer specialization indicator, and instant CTA links.
- **About & Replicated Education Card:** Detailed background bio and a pixel-faithful vertical education timeline featuring verified qualifications, graduation cap iconography, and electric blue (`#38BDF8`) grade highlights.
- **Categorized Technical Skills:** Organized skill matrices with Android Development featured prominently as the primary specialization alongside Languages, Backend, Databases, Web, AI/CV, and DevOps tools.
- **Selected Projects Showcase:** Interactive project gallery with multi-category filtering, tech stack tags, expandable case-study modal dialogs, and genuine screenshots.
- **Experience Timeline:** Highlights professional internship experience as a Web & Android Development Intern at Sumago Infotech Pvt. Ltd.
- **Recognition & Activities:** Documented hackathon placements, ideathon runner-up honors, technical leadership roles, and community activities.
- **Interactive Navigation & Anchor Offsets:** Sticky blur header with section tracking, mobile slide-over menu, and calibrated anchor offsets clearing the navigation bar.
- **Custom Cursor Experience:** Dual-ring interactive cursor for desktop viewports that tracks clickable targets, automatically hides on touch devices, and honors `prefers-reduced-motion`.
- **Local Intent-Based AI Assistant:** Floating chatbot capable of answering questions about my background, skills, and projects.
  > **Note on Chatbot Implementation:** The chatbot operates completely client-side using a deterministic rule-based intent matching engine (`lib/intent-engine.ts`). It processes queries locally and is **not connected to any external generative AI or LLM API**.

---

## 🚀 Projects

The portfolio showcases four genuine projects built across mobile, web, backend, and computer vision domains:

### 1. QLix — Real-Time Audience Engagement Platform
- **Category:** Android & Mobile
- **Role:** Full Stack Developer
- **Technologies:** `Kotlin`, `Node.js`, `Express.js`, `Socket.IO`, `MongoDB`, `PostgreSQL`, `Firebase`, `JWT`, `AWS`
- **Description:** Built a full-stack engagement platform for live polls, quizzes, and Q&A sessions in meetings and classrooms. Implemented low-latency real-time voting and dynamic leaderboards using Socket.IO and unique session pin codes. Designed role-based REST APIs, attendance tracking, and deployed backend infrastructure on AWS EC2 with Elastic Load Balancing.

### 2. Box Detection System — Computer Vision & Object Detection
- **Category:** AI & Computer Vision
- **Role:** AI / Backend Developer
- **Technologies:** `Python`, `YOLOv8`, `FastAPI`, `Next.js`, `Firebase`
- **Description:** A computer vision application that detects and counts packaging boxes in real-time from static images and continuous video streams. Built using a fine-tuned YOLOv8 deep learning model paired with a high-performance FastAPI backend service and a responsive web dashboard.

### 3. AgriTech — Smart Agriculture Support Platform
- **Category:** Web Development
- **Role:** Full Stack Developer
- **Technologies:** `React`, `Node.js`, `Express.js`, `MongoDB`, `Gemini API`, `OpenAI API`, `JWT Authentication`
- **Description:** A unified digital farming ecosystem integrating crop disease identification, agricultural labour hiring, crop advisory services, and marketplace support. Features role-based access control for farmers, labourers, and agricultural administrators.

### 4. E-Grampanchayat System — Digital Village Administration Platform
- **Category:** Web Development
- **Role:** Backend Developer
- **Technologies:** `PHP`, `JavaScript`, `HTML`, `CSS`, `MySQL`
- **Description:** A web-based civic governance portal designed for rural local bodies to streamline citizen registrations, municipal service issuance, birth/death certificate processing, and grievance redressal workflows.

---

## 🛠️ Tech Stack

### Core Framework & Runtime
- **[Next.js](https://nextjs.org/)** (v16.3.5) — React framework utilizing App Router and Turbopack compiler
- **[React](https://react.dev/)** (v19.2.8) — Modern declarative UI library
- **[TypeScript](https://www.typescriptlang.org/)** (v5) — Static type safety across all components and data models

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) — Utility-first styling engine
- **[Framer Motion](https://www.framer.com/motion/)** (v13.2) — Production animation primitives for scroll triggers and transitions
- **[Lucide React](https://lucide.dev/)** — Lightweight iconography

### Code Quality & Deployment
- **[ESLint](https://eslint.org/)** — Static code analysis and linting
- **[Vercel](https://vercel.com/)** — Edge deployment platform with automated CI/CD

---

## 📂 Project Structure

```text
shaijad-portfolio/
├── app/
│   ├── globals.css              # Global styles, Tailwind directives & theme variables
│   ├── icon.svg                 # Application favicon
│   ├── layout.tsx               # Root layout, metadata & font configuration
│   └── page.tsx                 # Main single-page application entry point
├── components/
│   ├── sections/
│   │   ├── About.tsx            # Profile bio, quick facts & education timeline
│   │   ├── Achievements.tsx     # Hackathons, certifications & activities
│   │   ├── Contact.tsx          # Contact channels & resume link
│   │   ├── Experience.tsx       # Internship timeline
│   │   ├── Footer.tsx           # Copyright & bottom navigation
│   │   ├── Hero.tsx             # Centered headline, focus badge & CTA buttons
│   │   ├── Navbar.tsx           # Sticky navigation bar with mobile menu
│   │   ├── SelectedWork.tsx     # Featured projects with category filters
│   │   └── Skills.tsx           # Categorized skill grids & Android feature card
│   └── ui/
│       ├── AIChatbot.tsx        # Floating chatbot UI
│       ├── CustomCursor.tsx     # Desktop custom interactive cursor
│       ├── CustomCursorLoader.tsx # Client-side wrapper for cursor hydration
│       ├── Section.tsx          # Reusable motion wrapper with standard spacing
│       └── button.tsx           # Radix-slot based accessible button primitive
├── data/
│   └── portfolio.ts             # Central verified portfolio content & project data
├── lib/
│   ├── intent-engine.ts         # Client-side rule-based NLP intent classifier
│   └── utils.ts                 # Class merging utility (clsx + tailwind-merge)
├── public/
│   ├── profile/                 # Profile photographs
│   ├── projects/                # Verified project screenshots (qlix, agritech, etc.)
│   └── Shaijad-Shaikh-Resume.pdf # Downloadable resume PDF
├── next.config.ts               # Next.js build and image optimization configuration
├── package.json                 # Project dependencies and script declarations
├── tsconfig.json                # TypeScript compiler configuration
└── README.md                    # Project documentation
```

---

## 💻 Installation & Local Setup

### Prerequisites

Make sure you have installed:
- **Node.js** (v18.18.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **pnpm**
- **Git**

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shaijad7/shaijad-portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd shaijad-portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Visit [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📜 Available Scripts

In the project directory, you can run the following scripts defined in `package.json`:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack on `http://localhost:3000`. |
| `npm run build` | Compiles the TypeScript code and creates an optimized static production build. |
| `npm run start` | Runs the compiled Next.js production server. |
| `npm run lint` | Executes ESLint to check for code quality and syntax issues. |

---

## 🌐 Deployment

The website is continuously deployed on **[Vercel](https://vercel.com/)** directly from the `main` branch.

### Deploying Your Own Instance

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your portfolio repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will compile and host the application with automated SSL and edge caching.

Live URL: [https://shaijad-portfolio.vercel.app/](https://shaijad-portfolio.vercel.app/)

---

## 📬 Contact

Feel free to reach out for internship opportunities, freelance inquiries, or technical collaboration:

- **Name:** Shaijad Shaikh
- **Email:** [shaijadshaikh8380@gmail.com](mailto:shaijadshaikh8380@gmail.com)
- **Location:** Nashik, Maharashtra, India
- **GitHub:** [@shaijad7](https://github.com/shaijad7)
- **Portfolio:** [https://shaijad-portfolio.vercel.app/](https://shaijad-portfolio.vercel.app/)

---

## 📄 License

This repository is maintained as my personal developer portfolio. You are welcome to reference the architecture and code structure for learning purposes. Please do not duplicate personal details, photographs, or project case studies without permission.

/**
 * Portfolio Data File - Hena Benny
 * You can edit all details, links, text, and projects in this single file.
 */

export const personalData = {
  name: "HENA BENNY",
  firstName: "Hena",
  lastName: "Benny",
  pronouns: "she/her",
  headlineBadge: "Open to internships & collaborations",
  role: "First-year B.Tech CSE (Artificial Intelligence) Student & Builder",
  college: "Thejus College of Engineering",
  location: "Thrissur, Kerala, India",
  tagline: "First-year CSE (AI) student. I learn, build & experiment with ideas that you wish existed.",
  
  heroWords: {
    left: "DESIGNING",
    right: "CODING",
    subLeft: "CURIOUS MIND",
    subRight: "AI EXPERIMENTS"
  },
  
  figmaSelection: {
    label: "Hena",
    dimensions: "720 × 140",
  },

  about: {
    title: "PORTFOLIO",
    subtitle: "A first-year explorer with a hunger for artificial intelligence and expressive web experiences.",
    batch: "2026–2030",
    photo: "/hena-photo.jpg",
    bioParagraphs: [
      "Hey! I'm Hena Benny, a first-year Computer Science and Engineering (Artificial Intelligence) undergraduate at Thejus College of Engineering in Thrissur, Kerala (Batch 2026–2030).",
      "Having come from a VHSE Computer Science (Junior Software Developer - JSD) background, I built a strong hands-on foundation in software engineering, practical coding, and web technologies right from vocational higher secondary school.",
      "Now in B.Tech CSE (AI), I spend my days mastering data structures, exploring neural network basics, experimenting with modern web tools, and questioning how software can feel more intuitive, playful, and alive.",
      "When I step away from my IDE, you'll probably find me sketching UI concepts in Figma, sipping hot chai, listening to indie playlists, or brainstorming hackathon ideas with friends."
    ],
    detailsList: [
      { label: "Degree", value: "B.Tech CSE (Artificial Intelligence)" },
      { label: "Batch", value: "2026 — 2030 (1st Year)" },
      { label: "Institution", value: "Thejus College of Engineering, Thrissur" },
      { label: "Foundation", value: "VHSE Computer Science (JSD)" },
      { label: "Location", value: "Kerala, India 🌴" },
      { label: "Current Focus", value: "Machine Learning Foundations & Interactive Web" },
      { label: "Availability", value: "Summer 2026 Internships & Open Source" }
    ],
    quirks: [
      "☕ Fueled by Kerala chai & midnight commits",
      "🤖 Fascinated by Transformer architectures & LLM agents",
      "🎨 Big believer that code should be playful and tactile",
      "📚 Reading about cognitive science & neural computation"
    ]
  },

  counters: [
    { label: "Projects Completed", value: 8, suffix: "+" },
    { label: "Technologies Explored", value: 12, suffix: "+" },
    { label: "Problems Solved & Hours", value: 250, suffix: "h+" },
    { label: "Hackathons & Events", value: 4, suffix: "" }
  ],

  skillsCategories: [
    {
      category: "Core Languages",
      description: "Foundational syntaxes I code with every day",
      skills: [
        { name: "Python", level: "Proficient", icon: "code", color: "#F7F08A" },
        { name: "C Language", level: "Academic Core", icon: "terminal", color: "#B9A8F0" },
        { name: "JavaScript", level: "ES6+ Modern", icon: "file-code", color: "#F7F08A" },
        { name: "HTML5 & CSS3", level: "Advanced", icon: "layout", color: "#8E7CC3" },
        { name: "SQL Basics", level: "Relational DB", icon: "database", color: "#D8CCE6" }
      ]
    },
    {
      category: "AI & Machine Learning",
      description: "My primary field of study and passion",
      skills: [
        { name: "ML Foundations", level: "Core Concepts", icon: "brain", color: "#B9A8F0" },
        { name: "OpenCV", level: "Computer Vision", icon: "eye", color: "#F7F08A" },
        { name: "NumPy & Pandas", level: "Data Wrangling", icon: "table", color: "#8E7CC3" },
        { name: "Prompt Engineering", level: "LLM Workflows", icon: "sparkles", color: "#F7F08A" },
        { name: "Neural Nets Basics", level: "Perceptrons & Backprop", icon: "network", color: "#D8CCE6" }
      ]
    },
    {
      category: "Web & Developer Tools",
      description: "Modern tools to ship and collaborate",
      skills: [
        { name: "React.js", level: "Component Driven", icon: "atom", color: "#B9A8F0" },
        { name: "Tailwind CSS", level: "Utility-First", icon: "palette", color: "#F7F08A" },
        { name: "Git & GitHub", level: "Version Control", icon: "git-branch", color: "#8E7CC3" },
        { name: "Vite", level: "Build Tooling", icon: "zap", color: "#D8CCE6" },
        { name: "VS Code", level: "Daily Driver", icon: "cpu", color: "#B9A8F0" }
      ]
    },
    {
      category: "Design & Creative",
      description: "Crafting interfaces that feel intuitive and joyful",
      skills: [
        { name: "Figma", level: "UI & Wireframes", icon: "figma", color: "#F7F08A" },
        { name: "Vector Graphics", level: "SVGs & Icons", icon: "pen-tool", color: "#8E7CC3" },
        { name: "Design Systems", level: "Tokens & Typography", icon: "grid", color: "#B9A8F0" },
        { name: "Prototyping", level: "Interactive Flows", icon: "mouse-pointer", color: "#D8CCE6" }
      ]
    }
  ],

  projects: [
    {
      id: "neuro-scribe",
      title: "NeuroScribe AI",
      category: "AI & Education",
      subtitle: "Smart lecture notes synthesizer & concept graph mapper",
      description: "An intelligent learning tool designed for STEM students. It synthesizes dense classroom transcripts into atomic bite-sized takeaways, generates interactive concept dependency graphs, and automatically extracts math equations and code snippets.",
      tags: ["Python", "Gemini API", "React", "Tailwind CSS", "FastAPI"],
      liveUrl: "https://neuroscribe-demo.vercel.app",
      githubUrl: "https://github.com/henabenny/neuro-scribe-ai",
      status: "Featured Project",
      accentColor: "#F7F08A",
      stats: { accuracy: "94% Concept Precision", latency: "<1.2s", users: "Classmates & Beta" },
      highlights: [
        "Interactive SVG concept graph linking prerequisite topics",
        "LaTeX-formatted math formulas with one-click copy",
        "Markdown revision summary export"
      ]
    },
    {
      id: "thejus-navigator",
      title: "Thejus Campus AI Navigator",
      category: "Full Stack & NLP",
      subtitle: "AI concierge and interactive guide for college freshmen",
      description: "A friendly, conversational campus assistant built to help first-year students at Thejus College of Engineering navigate department buildings, locate labs, discover student clubs (IEDC, IEEE), and ask syllabus questions in natural language.",
      tags: ["React", "JavaScript", "Vector Search", "Tailwind CSS"],
      liveUrl: "https://thejus-navigator.vercel.app",
      githubUrl: "https://github.com/henabenny/thejus-campus-bot",
      status: "Campus Utility",
      accentColor: "#B9A8F0",
      stats: { queries: "500+ Queries Tested", latency: "Instant", coverage: "All B.Tech Depts" },
      highlights: [
        "Fuzzy search & natural language question answering",
        "Interactive SVG campus map with pinpoint locations",
        "Works smoothly on low-bandwidth mobile networks"
      ]
    },
    {
      id: "iris-vision",
      title: "IrisVision Gesture Engine",
      category: "Computer Vision",
      subtitle: "Real-time hand gesture recognition for media & presentations",
      description: "A lightweight computer vision desktop prototype developed with Python and OpenCV that interprets real-time webcam gesture frames to control slide presentations, adjust volume, and trigger keyboard shortcuts hands-free.",
      tags: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      liveUrl: "https://github.com/henabenny/iris-vision-gestures",
      githubUrl: "https://github.com/henabenny/iris-vision-gestures",
      status: "Research Prototype",
      accentColor: "#8E7CC3",
      stats: { fps: "60 FPS Processing", gestures: "8 Recognised", accuracy: "96.5%" },
      highlights: [
        "Lightweight pipeline running purely on CPU without dedicated GPU",
        "Presentation pointer mode with virtual laser beam",
        "Real-time visual debug HUD showing landmark tracking"
      ]
    },
    {
      id: "mind-canvas",
      title: "MindCanvas Generative Art",
      category: "Creative Coding",
      subtitle: "Audio-reactive neural wave simulation in browser",
      description: "An experimental canvas project that translates audio frequencies and mouse trajectories into fluid neural synaptic pulses, exploring the visual aesthetic of artificial neurons firing in synchrony.",
      tags: ["HTML5 Canvas", "Web Audio API", "GSAP", "React"],
      liveUrl: "https://mindcanvas-art.vercel.app",
      githubUrl: "https://github.com/henabenny/mind-canvas",
      status: "Creative Lab",
      accentColor: "#F7F08A",
      stats: { canvas: "HTML5 2D", fps: "Smooth 60fps", presets: "5 Synapse Themes" },
      highlights: [
        "Direct Web Audio API microphone / ambient synthesizer hook",
        "Export high-resolution PNG poster artwork",
        "Particle collision and organic vector tendrils"
      ]
    }
  ],

  journey: [
    {
      period: "2024 — 2026",
      title: "VHSE Computer Science (Junior Software Developer - JSD)",
      organization: "Vocational Higher Secondary Education (VHSE), Kerala",
      badge: "The Foundation",
      description: "Completed vocational higher secondary education in Computer Science as a trained Junior Software Developer (JSD). Gained rigorous early hands-on grounding in software engineering fundamentals, Python & C programming, web technologies, databases, and practical software labs before stepping into B.Tech CSE (AI).",
      skillsAcquired: ["Junior Software Developer (JSD)", "Python & C Programming", "Web Development Basics", "Database & SQL", "Software Lab Practicals"]
    },
    {
      period: "2026",
      title: "Stepped into B.Tech CSE (Artificial Intelligence)",
      organization: "Thejus College of Engineering, Thrissur, Kerala",
      badge: "Freshman Year (2026–2030)",
      description: "Embarked on the B.Tech CSE (AI) undergraduate journey (Batch 2026–2030). Started building strong foundations in C programming, linear algebra, discrete mathematics, and computational thinking.",
      skillsAcquired: ["C Programming", "Discrete Mathematics", "Data Structures", "Engineering Mechanics"]
    },
    {
      period: "2026 — Present",
      title: "Tech Communities & First Campus Hackathon",
      organization: "IEDC / Campus Developer Club",
      badge: "Community & Code",
      description: "Joined college innovation and developer societies. Participated in campus hackathons, working through the night to build prototype information systems with a multi-disciplinary team.",
      skillsAcquired: ["Git team workflows", "Rapid prototyping", "Public pitching", "Full stack basics"]
    },
    {
      period: "2026 — Active",
      title: "Diving into Machine Learning & Creative Web",
      organization: "Self-driven Labs & Academic Projects",
      badge: "Active Journey",
      description: "Actively studying neural networks, computer vision with OpenCV, and pairing backend intelligence with sleek, playful React interfaces. Currently seeking summer internships and collaborative open-source ventures.",
      skillsAcquired: ["OpenCV", "React.js", "Tailwind CSS", "Prompt Engineering", "Lenis & GSAP"]
    },
    {
      period: "Looking Forward (2026 — 2030)",
      title: "Aspiring AI Engineer & Product Thinker",
      organization: "Future Roadmap",
      badge: "Next Horizon",
      description: "Working towards mastering deep learning architectures, contributing to prominent AI open-source libraries, and graduating as a skilled engineer building technology that brings genuine wonder.",
      skillsAcquired: ["Deep Learning at scale", "Distributed Systems", "AI Product Architecture"]
    }
  ],

  contact: {
    heading: "LET'S TALK",
    subheading: "Got a cool project idea, an internship opportunity, or just want to chat about AI and design over chai? My inbox is always open!",
    email: "henabenny.dev@gmail.com",
    collegeEmail: "hena.benny@thejus.ac.in",
    location: "Thrissur, Kerala, India (IST / UTC+5:30)",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/henabenny", handle: "@henabenny", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/hena-benny", handle: "Hena Benny", icon: "linkedin" },
      { name: "Instagram", url: "https://instagram.com/hena.benny", handle: "@hena.benny", icon: "instagram" },
      { name: "Email", url: "mailto:henabenny.dev@gmail.com", handle: "henabenny.dev@gmail.com", icon: "mail" }
    ]
  },

  navLinks: [
    { name: "WORK", href: "#work" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "JOURNEY", href: "#journey" },
    { name: "CONTACT", href: "#contact" }
  ],

  footer: {
    copyright: "Designed & built with curiosity by Hena Benny © 2026",
    collegeLine: "Thejus College of Engineering • Thrissur, Kerala",
    subline: "Crafted with React, Tailwind CSS, Lenis, and GSAP. Zero copyright infringements."
  }
};


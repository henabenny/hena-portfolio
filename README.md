# Hena Benny — Personal Portfolio ("Inside the Mind")

A single-page, scroll-driven interactive personal portfolio website for **Hena Benny**, a first-year B.Tech CSE (Artificial Intelligence) student at **Thejus College of Engineering, Thrissur, Kerala**.

Designed around the playful concept of stepping **"Inside the Mind of"** a young AI builder, the site features original 2D vector illustrations, mouse-tracking character pupils, a pinned GSAP ScrollTrigger camera zoom, Lenis silky-smooth scrolling, and an ambient Web Audio synthesizer.

---

## 🎨 Visual Style & Design Language

- **Palette**:
  - Base: Soft dusty purple (`#6B5B95`)
  - Accent Shades: Deep twilight purple (`#3B3355`), Mind void (`#201B35`), Lavender (`#B9A8F0`, `#8E7CC3`)
  - Highlight Accent: Off-white (`#F2EFEA`) and Warm Pastel Yellow (`#F7F08A`)
- **Atmosphere**: Subtle film-grain texture, twinkling stars, and drifting 2D vector birds.
- **Typography**:
  - Display Headline: Tall high-contrast serif (*Bodoni Moda* & *Italiana*)
  - Body & Labels: Condensed uppercase sans (*Barlow Condensed* & *Plus Jakarta Sans*)
- **Illustration Style**: Flat 2D vector illustration with thick dark outlines (`#261F36`) and rounded shapes.
- **Original Character**: A cheerful illustrated character of Hena Benny waving, with the top of her head opened like a lid, releasing floating thought icons (code brackets, glowing lightbulb, neural network, and Kerala chai). Her pupils dynamically track the visitor's mouse coordinates in real time.

---

## 🧠 Interactive Highlights

1. **Figma Selection Box on Hover**: Hovering over the giant "HENA BENNY" name displays a Figma-style vector bounding box with four corner handles, a `720 × 140` dimension badge, and a cursor tag with "Hena".
2. **Scroll Experience ("Step Inside Her Mind")**: A pinned GSAP ScrollTrigger timeline smoothly zooms into the open head lid, transitions the color palette into a deeper night shade, and unlocks the memory cortex sections.
3. **Thought Bubbles & Synapses (Skills)**: Interactive category chips (Core Languages, AI/ML Foundations, Web Tools, Creative Design) that react to mouse hover.
4. **3D Tilt Project Cards (Work)**: Interactive project cards with perspective tilt, custom "VIEW" cursor, tech tags, and a modal architecture breakdown.
5. **Academic Chronicle (Journey)**: A connected vertical timeline tracing Hena's journey from higher secondary to Thejus College of Engineering, hackathons, and AI engineering goals.
6. **Native Ambient Synthesizer (Sound)**: A toggleable `SOUND ON / SOUND OFF` button with an animated equalizer bar, synthesizing gentle ambient chords and soft UI clicks via the Web Audio API without external audio files.
7. **Contact Signal Transmission**: A responsive contact form with validation, character feedback, and a confetti celebration upon transmission, plus a "Back to Top" rocket shortcut.

---

## ⚡ Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS v4 + `@tailwindcss/vite`
- **Scroll Physics**: Lenis (`lenis`)
- **Timeline & Scroll Animations**: GSAP (`gsap`) + `ScrollTrigger`
- **Micro-interactions & Physics**: Framer Motion (`framer-motion`)
- **Sound**: Web Audio API native synthesizer
- **Celebration Effects**: Canvas Confetti (`canvas-confetti`)
- **Icons**: Custom vector SVGs & Lucide React (`lucide-react`)

---

## 🗂️ Project Structure

```
hena/
├── public/
│   └── favicon.svg           # Custom branded vector favicon
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx   # Level 01: Bio, Hand-drawn Photo Frame, Counters
│   │   ├── ContactSection.jsx # Level 05: Form, Channels, Confetti, Back to Top
│   │   ├── CustomCursor.jsx   # Custom trailing ring cursor with hover modes
│   │   ├── Footer.jsx         # Live Kerala IST clock & copyright
│   │   ├── HenaCharacter.jsx  # Original 2D SVG girl waving + eye tracking
│   │   ├── Hero.jsx           # Figma box, letter reveal, ruler tick progress
│   │   ├── Icons.jsx          # Original SVGs for GitHub, LinkedIn, Instagram, Figma
│   │   ├── JourneySection.jsx # Level 04: Connected vertical timeline
│   │   ├── Navbar.jsx         # Status pill, sound toggle with equalizer, links
│   │   ├── NoiseOverlay.jsx   # Pure SVG film-grain texture overlay
│   │   ├── Preloader.jsx      # "Waking up Hena's neurons..." bootloader
│   │   ├── ProjectsSection.jsx# Level 03: 3D tilt cards & modal inspector
│   │   ├── SkillsSection.jsx  # Level 02: Orbiting thought bubble chips
│   │   ├── TwinklingStars.jsx # Background twinkling stars
│   │   └── VectorBirds.jsx    # Flat 2D vector drifting birds
│   ├── utils/
│   │   └── sound.js           # Web Audio API ambient tone & click generator
│   ├── App.jsx                # Main single-page scroll layout & Lenis sync
│   ├── data.js                # 🌟 ALL text, projects, and links in one place
│   ├── index.css              # Tailwind CSS v4 & theme variables
│   └── main.jsx               # React entry point
├── index.html                 # HTML shell with Google Fonts & metadata
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration with chunk splitting
└── README.md                  # Project documentation
```

---

## ✏️ How to Customize the Content

All website content is centralized in **`src/data.js`**. You do not need to touch component code to update your profile:

1. **Personal Information**: Open `src/data.js` and modify `name`, `college`, `location`, `tagline`, and `headlineBadge`.
2. **About & Quirks**: Edit `about.bioParagraphs` and `about.quirks`.
3. **Skills**: Add or remove skills under `skillsCategories`.
4. **Projects**: Update `projects` with your real GitHub repositories, live URLs, descriptions, and feature bullet points.
5. **Timeline / Journey**: Add new hackathons, milestones, or certificates under `journey`.
6. **Contact Channels**: Update your email address, LinkedIn, and GitHub links under `contact`.

---

## 🚀 Running Locally

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v22)
- **npm** v9+

### 2. Installation
```bash
# Clone or enter the repository
cd hena

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub (`git push origin main`).
2. Log into [vercel.com](https://vercel.com).
3. Click **"Add New Project"** and import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Deploy to Netlify
1. Log into [netlify.com](https://netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select your repository.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

---

## ♿ Accessibility & Performance

- **Semantic HTML**: Structural landmarks (`header`, `nav`, `main`, `section`, `footer`).
- **Accessible Motion**: Automatically respects `prefers-reduced-motion` settings.
- **Keyboard Navigation**: Skip-to-content shortcut and high-contrast `:focus-visible` rings.
- **Optimized Rendering**: Zero external image or audio weight; pure vector SVGs and compositor-only transforms for 60fps animations.

---

© 2026 Hena Benny. Thejus College of Engineering, Thrissur, Kerala.

<div align="center">
  <img src="public/favicon.ico" alt="Logo" width="80" height="80">
  <h3 align="center">Anuj Soni - Iterative Developer Portfolio</h3>

  <p align="center">
    A next-generation, highly interactive 3D web developer portfolio built with React, Three.js, Framer Motion, and GSAP. 
    <br />
    <a href="https://your-portfolio-link.vercel.app"><strong>View Live Demo »</strong></a>
    <br />
  </p>
</div>

---

## 📸 Sneak Peek

*Add your screenshots here by replacing the placeholder links!*

| Home / Terminal CLI | 3D Spline Robot |
| :---: | :---: |
| <img src="https://via.placeholder.com/600x400/101010/FFFFFF?text=Home+Page+CLI" alt="Home Page" width="100%"> | <img src="https://via.placeholder.com/600x400/101010/FFFFFF?text=3D+Spline+Robot" alt="3D Robot" width="100%"> |

| MagicBento Glow Cards (Projects) | Interactive Bubble Navbar |
| :---: | :---: |
| <img src="https://via.placeholder.com/600x400/101010/FFFFFF?text=Projects+Glow+Cards" alt="Projects" width="100%"> | <img src="https://via.placeholder.com/600x400/101010/FFFFFF?text=Bubble+Menu" alt="Menu" width="100%"> |

---

## ✨ Key Features & Functionalities

This portfolio goes beyond a simple static website, featuring complex interactions, physics-based animations, and a full-stack contact flow:

### 1. 🎬 Next-Gen UI/UX & Animations
- **Terminal CLI Hero**: A custom hacker-style typed terminal interface (`HeroCLI.tsx`) on the home page.
- **ScrollStack Effect**: Layer-by-layer pinned scrolling mechanics for navigating sections.
- **MagicBento Glow Cards**: Sophisticated spotlight/border-glow hover effects implemented on cards across the Projects, Skills, and Experience pages.
- **Bubble Navigation**: A dynamic, inline-expanding pill-shaped navigation bar powered by GSAP.

### 2. 🤖 Interactive 3D Elements
- **Spline Robot Implementation**: A custom 3D robot model integrated via `@splinetool/react-spline` that actively tracks the user's cursor flawlessly across the screen.

### 3. ✉️ Full-Stack Contact Flow
- **Live Contact Form**: Connects seamlessly to a Node.js/Express backend (`server/index.js`).
- **Nodemailer Integration**: Safely and securely delivers messages straight to the owner's Gmail inbox.
- **Vercel Serverless Ready**: Transformed the Express app into a serverless function (`api/index.js`) for a unified single-deployment architecture on Vercel.

---

## 🌊 Application Flow 

1. **Landing & Initialization**: 
   - User lands on `/`. The `HeroCLI` mounts, simulating a terminal boot-up sequence.
   - The `Spline` 3D environment lazily loads to preserve initial paint metrics.
2. **Exploration**: 
   - User scrolls down. `Lenis` intercepts the scroll to create a buttery smooth scrolling experience.
   - Components enter the viewport triggering `Framer Motion` reveal animations.
3. **Deep Dive**:
   - Hovering over project cards activates the `MagicBento` utility, calculating cursor proximity to inject CSS radial-gradient spotlights.
4. **Interaction**: 
   - User navigates to the `/contact` route. 
   - Submits the form &rarr; Triggers `POST /api/contact` &rarr; Vercel Serverless Function executes Nodemailer script &rarr; Returns success JSON &rarr; UI updates dynamically. 

---

## 🛠️ Tech Stack

**Frontend:**
- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D & Graphics**: Three.js, React Spline, Postprocessing
- **Scroll**: Lenis (Smooth Scrolling)
- **Icons**: Lucide React

**Backend (Serverless):**
- **Core**: Node.js, Express
- **Email Delivery**: Nodemailer
- **Platform**: Vercel Serverless Functions (`api/index.js`)

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18+ recommended)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anujsoni3/portfolio-.git
   cd portfolio-
   ```

2. Install all core dependencies:
   ```bash
   npm install
   ```

3. Set up Environment Variables:
   Create a `.env` file in the root directory and add your email credentials:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_specific_password
   ```
   *(Note: Use Google App Passwords, not your standard Gmail password).*

4. Run the development server (Frontend + Backend concurrently):
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ☁️ Deployment (Vercel)

This project is fully structured for a seamless 1-click deployment on Vercel combining both the React frontend and the Express backend.

1. Push your code to your GitHub repository.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository. Vercel will auto-detect Vite.
4. Open the **Environment Variables** tab and add `EMAIL_USER` and `EMAIL_PASS`.
5. Click **Deploy**. 

*The `vercel.json` and `api/index.js` files automatically handle routing frontend SPA paths and mapping backend requests to Vercel Serverless Functions!*

---

## 📂 Project Structure Overview

```text
├── api/                  # Vercel Serverless Functions entry points
├── server/               # Express backend source code
│   └── index.js          # Contact form Nodemailer API
├── src/                  # React Frontend
│   ├── components/       # Reusable UI (HeroCLI, GridScan, BubbleMenu, GlowCard...)
│   ├── context/          # React Contexts (ThemeContext)
│   ├── hooks/            # Custom React hooks (useTheme)
│   ├── pages/            # Route pages (Home, Skills, Projects, Contact...)
│   ├── App.tsx           # Main application routing & layout
│   └── main.tsx          # React DOM entry
├── public/               # Static assets & 3D models files
├── vercel.json           # Vercel deployment/routing configuration
└── package.json          # Dependencies & Scripts
```

---

<div align="center">
  <b>Built with ❤️ by <a href="https://github.com/anujsoni3">Anuj Soni</a></b>
</div>

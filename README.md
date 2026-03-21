### 🏗️ Project Overview
EROLECT Builders is a high-end, utility-driven architectural portfolio designed for a construction firm specializing in aquatic engineering (luxury pools) and structural development. The goal was to build a "presentable and useful" digital presence that converts high-ticket leads through structural storytelling.

Key Functions
Adaptive Hero Engine: A custom-built auto-sliding hero section using React hooks to showcase high-fidelity project imagery.

Case-Study Portfolio: An interactive grid with a Project Modal System. Instead of just images, it displays the "Location, Problem, and Solution" for every project.

Lead Generation Engine: A fully reactive contact system integrated with Formspree for zero-backend email delivery.

Architectural UI: A custom-themed interface built with Tailwind CSS, featuring a "Single Page" smooth-scroll navigation for low friction.

Dynamic Theming: Support for Light and Dark modes to match the luxury aesthetic of modern construction.

### 🧩 The Problem It Solves
Most construction websites are either static galleries or overly complex. This project solves three core business problems:

Lead Friction: Clients often struggle to find contact info. By using a Single Page Application (SPA) with anchor links, the "Get a Quote" call-to-action is always one click away.

Trust Gap: By including a Process Section and Problem/Solution Case Studies, the site moves from "showing pictures" to "proving expertise."

Mobile Accessibility: Construction clients often browse on-site. This UI is optimized for mobile performance with a reactive slide-out navigation.

### 🛠️ Technical Stack
Frontend: React (Vite)

Styling: Tailwind CSS (Utility-first)

State Management: React Hooks (useState, useEffect)

Deployment: Vercel

Form Handling: Formspree API

### 🚧 Challenges Encountered & Solutions
1. The Modal Scroll Lock
Challenge: When a project modal was opened, the background page would still scroll, causing a disorienting user experience.

Solution: I implemented a side-effect in the Portfolio component that toggles the overflow-hidden class on the document.body whenever a project is selected.

2. Navbar State Sync
Challenge: In the mobile view, clicking an anchor link scrolled the page but kept the hamburger menu open, blocking the view.

Solution: I refactored the navigation logic to ensure that every link triggers a state update (setIsMenuOpen(false)) to close the overlay during the scroll transition.

3. Real-Time Image Cycling
Challenge: Creating a smooth, high-end fade effect for the Hero images without using heavy external libraries like Swiper.js.

Solution: Built a custom interval timer using useEffect that maps through an image array and applies conditional Tailwind opacity classes for a performant, "lean" slider.

### 🚀 Future Roadmap
[ ] Project Dashboard: A protected route to allow the admin to upload new projects via a CMS (Sanity or Firebase).

[ ] WhatsApp Integration: A floating "Direct Chat" button for instant structural consultations.

[ ] PWA Support: Making the site installable for offline viewing of the portfolio.

How to Run Locally
Clone the repo: git clone [repo-link]

Install dependencies: npm install

Start dev server: npm run dev
# Accredian Enterprise - Partial Clone

This project is a partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built as part of the Full Stack Developer Intern assignment.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd accredian
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The site will be accessible at [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Approach Taken

The goal was to build a premium, highly responsive Next.js App Router application that mimics the structure, styling, and animations of the Accredian Enterprise page.

1. **Tech Stack**: Next.js 16+ (App Router), React, Tailwind CSS, TypeScript.
2. **Architecture**: 
   - A modular component structure separated into layout (`Navbar`, `Footer`), sections (`HeroSection`, `StatsBar`, `CATFramework`, etc.), and reusable UI elements (`Button`, `Card`, `SectionHeading`, `AnimatedCounter`).
   - A mock API route (`app/api/leads/route.ts`) handles lead capture submissions securely, storing data locally in `data/leads.json`.
3. **Styling & Animations**: 
   - Used Tailwind CSS for robust layout and custom global CSS for keyframe animations (e.g., marquee carousels, scroll-triggered fade-ins, counting numbers).
   - Intersection Observers via custom React hooks were utilized heavily to create smooth reveal animations as sections enter the viewport, giving the site a modern, premium feel.

## AI Usage Explanation

Antigravity (an AI coding assistant powered by Gemini) was used to accelerate the development process. 

**Where AI Helped:**
- Rapid scaffolding of the Next.js project and component files.
- Generating parallel subagents to concurrently build distinct components (e.g., `HeroSection`, `Navbar`, `LeadCaptureForm`).
- Creating standard boilerplate code for custom hooks (like `useInView`) and utility components (like `AnimatedCounter`).
- Setting up the Next.js App Router API route for the lead capture form with validation logic.

**What was Modified/Improved Manually:**
- Refining and fixing Next.js/Turbopack configurations (e.g., handling lockfile warnings and `next.config.ts` issues).
- Rectifying TypeScript errors and hook parameter definitions (e.g., fixing `useAnimateOnScroll` types).
- Manually structuring the `page.tsx` rendering order and ensuring the visual fidelity of individual sections (like the marquee effect in `PartnersSection` and the layout of the `CATFramework` process).

## Improvements with More Time

If given more time, I would focus on:
- **Database Integration**: Replacing the mock `leads.json` file with a real database like PostgreSQL (using Prisma or Firebase Data Connect) for robust lead management.
- **Headless CMS**: Integrating Sanity or Contentful to manage the page's content (e.g., testimonials, FAQs, and domain expertise descriptions) dynamically without hardcoding them in React.
- **End-to-End Testing**: Adding Cypress or Playwright tests to ensure critical user flows (like form submissions and responsive mobile navigation) remain unbroken.
- **Analytics & SEO**: Expanding metadata, adding Google Analytics/Tag Manager snippets, and integrating comprehensive schema markup for better discoverability.

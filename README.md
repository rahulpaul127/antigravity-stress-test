# Developer Portfolio (AI Stress-Test)

This project is not just a portfolio—it is a **stress-test experiment** of modern AI coding capabilities.

I built this entire site using **Antigravity**, pushing every available AI model to its quota limit to see if it could deliver production-grade quality without human intervention in the code.

## The Experiment

The goal was simple but rigorous:
1.  **Zero Manual Coding:** Every line of code had to be generated via prompts.
2.  **Zero Compromise:** I refused to accept "good enough." If a model hallucinated or gave average output, I iterated until it was perfect.
3.  **Zero Accessibility Issues:** The final result had to pass **Axe DevTools** with 0 violations.

## The Result

-   **Tech Stack:** Next.js 16 (App Router), Tailwind CSS, Framer Motion, Lucide Icons.
-   **Performance:** Fully optimized images with `next/image` and proper `sizes` props.
-   **Accessibility:** 100% clean Axe DevTools report (WCAG 2.1 AA compliant).
-   **Design:** Premium, dark-mode aesthetic with animated UI elements.

## Key Features

-   **Self-Contained Assets:** All images are stored locally, ensuring zero external dependencies or broken links.
-   **Animated Hero Section:** A realistic, typing-code animation built with Framer Motion.
-   **Responsive Grid:** A portfolio section that adapts perfectly to all device sizes.
-   **Client Testimonials:** A functional carousel with optimized image loading.
-   **Theme Support:** Robust light/dark mode toggling.

## How It Was Built

I treated the AI as a junior developer that needed strict guidance. I didn't just say "make a site." I prompted for specific architectural patterns, accessibility constraints, and design tokens.

When the AI failed (e.g., broken image URLs, missing `sizes` props), I didn't fix it myself. I forced the AI to debug its own work, clear its own cache, and verify the fix in the browser.

## Running Locally

1.  Clone the repo:
    ```bash
    git clone [your-repo-url]
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) to see the result.

---

*Built by [Your Name] using Antigravity.*

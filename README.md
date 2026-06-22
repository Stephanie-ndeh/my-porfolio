# Stephanie Mbusheri — Portfolio

A minimalist, animated personal portfolio built with Vue 3, TypeScript, and Tailwind CSS.

## Stack

- Vue 3 (Composition API, `<script setup>`)
- TypeScript
- Tailwind CSS
- Vite

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build outputs to `dist/`, ready to deploy to Vercel, Netlify, or any static host.

## Project structure

```
src/
  components/
    NavBar.vue          – top navigation with smooth-scroll links
    HeroSection.vue      – headline, animated grid background, CTA buttons
    AnimatedGrid.vue     – canvas-based interactive dot grid (hero background)
    AboutSection.vue     – bio + tech stack pills
    WorkSection.vue      – featured project + project list
    ContactSection.vue   – closing CTA + contact links
    FooterBar.vue        – copyright + back-to-top
  composables/
    useScrollReveal.ts   – IntersectionObserver-based scroll-in animation
  App.vue                – assembles all sections
  main.ts                – app entry point
  style.css              – Tailwind directives + base styles
```

## Customizing content

All copy and project data currently lives directly inside each component
(`HeroSection.vue`, `AboutSection.vue`, `WorkSection.vue`, `ContactSection.vue`).
To update text, projects, or links, edit those files directly.

To add a downloadable résumé, drop a `resume.pdf` file into `public/` — the nav
button already links to `/resume.pdf`.

## Accessibility & performance notes

- Keyboard focus is visible on all interactive elements
- `prefers-reduced-motion` is respected (animations are disabled for users who request it)
- The animated grid uses a single `<canvas>` and `requestAnimationFrame`, cleaned up on unmount

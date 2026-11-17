# Bulus Kingsley | Developer Portfolio

A dark, animated and fully responsive portfolio for a full stack developer (MERN), built with React and Vite. No UI library: every animation is hand-written CSS and canvas.

## Features

- Fingerprint-scan intro: tap to scan, then real 3D gate doors swing open (pure CSS 3D transforms)
- Falling-code gate backdrop and an interactive particle network background (Canvas API)
- Sticky navbar with active-section highlight and a mobile menu
- Sections: Hero, About (with CV download), Skills, Projects, Contact
- Projects are rendered from data, show 5 first, with an "Explore More" button; each card links to the live project
- "Templates for Sale" popup with price, preview, buy link and a WhatsApp option
- Contact form (opens the email app), WhatsApp and social links
- Back-to-top button, scroll-reveal animations, landscape support

## Tech Stack

React 19, Vite, CSS3, Canvas API

## Getting Started

    git clone https://github.com/Kingspac/bulus-portfolio.git
    cd bulus-portfolio
    npm install
    npm run dev

## Customize

All content lives in `src/data.js`: profile, about text, skills, projects, templates, links. Put assets in `public/`:

- `profile.jpg` your photo
- `cv.pdf` your CV
- `projects/` project screenshots
- `templates/` template previews

## Project Structure

    src/
      App.jsx            page composition and intro state
      data.js            all editable content
      index.css          global, hero, gate and modal styles
      sections.css       navbar and section styles
      components/        Gate, Hero, Navbar, About, Skills, Projects,
                         Contact, Footer, BackToTop, TemplatesModal, ...

## Deployment (Render, static site)

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Remove the Eruda debug lines from `index.html` before deploying

## Author

Bulus Kingsley, Full Stack Developer (MERN)

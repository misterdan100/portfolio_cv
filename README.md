# ✨ Modern Portfolio Website - Daniel Merchan

[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC.svg?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple.svg?logo=framer)](https://www.framer.com/motion/)

Dynamic portfolio website built with Next.js 15 and TailwindCSS 4, featuring smooth animations and a modern design aesthetic. Showcases projects, skills, and experience interactively.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-link.vercel.app/) 

## ✨ Key Features

-   **Modern Design:** Clean, visually appealing interface with a focus on aesthetics.
-   **Smooth Scrolling:** Implemented using Lenis for a seamless browsing experience.
-   **Engaging Animations:** Utilizes Motion (Framer Motion) for 3D hover effects, transitions, and dynamic elements.
-   **Interactive Sections:** Features dynamic project cards, interactive skills filtering, and an organized experience timeline.
-   **Responsive:** Fully responsive design adapting to all device sizes (desktops, tablets, mobiles).
-   **Performance Optimized:** Built with Next.js App Router for efficient loading and rendering.

## 🛠️ Tech Stack

-   **Framework:** Next.js 15 (App Router)
-   **Language:** TypeScript 5
-   **Styling:** Tailwind CSS 4
-   **Animation:** Motion 11 (Framer Motion)
-   **Smooth Scroll:** Lenis

## 🏗️ Project Structure

```
└── daniel-merchan-portfolio/
    ├── app/
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    ├── components/
    │   ├── project-card.tsx
    │   ├── navbar.tsx
    │   ├── coming-soon.tsx
    │   ├── projects-section.tsx
    │   ├── hero-section.tsx
    │   ├── main-container.tsx
    │   ├── skills-section.tsx
    │   ├── experience-section.tsx
    │   ├── footer.tsx
    │   └── about-section.tsx
    ├── public/
    │   └── projects/
    ├── next.config.ts
    ├── lib/
    │   └── lenis-scroll.tsx
    ├── package.json
    ├── postcss.config.mjs
    ├── eslint.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── README.md

```
## 🧩 Components Overview

### Main Sections

-   `main-container.tsx`: Root container integrating Lenis scroll animations.
-   `hero-section.tsx`: Initial landing view with introductory text and potentially 3D effects.
-   `projects-section.tsx`: Displays project cards in an interactive showcase.
-   `skills-section.tsx`: Shows a grid of skills, possibly with filtering capabilities.
-   `experience-section.tsx`: Presents work history or relevant experience, often as a timeline.
-   `about-section.tsx`: Section for a personal introduction or bio.
-   `footer.tsx`: Contains contact information, social links, and copyright.

### Core Components

-   `navbar.tsx`: Navigation bar for site links.
-   `project-card.tsx`: Individual card component to display project details.
-   `coming-soon.tsx`: Placeholder component for sections under development.


## 👤 Author
Daniel Merchan - "misterdan"

GitHub: [@misterdan100](https://github.com/misterdan100)

Portfolio: [danielmerchan.com](https://danielmerchan.com) 

## 📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details. ```
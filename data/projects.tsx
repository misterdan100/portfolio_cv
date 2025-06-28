import { Project } from '@/components/project-card';
import { ExternalLink } from "lucide-react";
import { IoLogoGithub } from "react-icons/io5";

export const projects: Project[] = [
    {
      title: "Conversdan - AI Conversation SaaS Platform",
      description:
        "An LMS SaaS app from scratch featuring user authentication, subscriptions, and payments using Next.js, Supabase, and Stripe. A real-time teaching platform with Vapi, integrate an AI vocal agent, and deliver seamless, interactive learning sessions.",
      image: "/projects/conversdan_ai_saas.png",
      technologies: [
        "Next.js",
        "Supabase",
        "Stripe",
        "Vapi Agent AI",
        "Clerk",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          icon: <ExternalLink className="w-5 h-5" />,
          label: "Live Demo",
          url: "https://conversdan-saas-ai.vercel.app/",
        },
        {
          icon: <IoLogoGithub className="w-6 h-6" />,
          label: "GitHub",
          url: "https://github.com/misterdan100/conversdan_saas_ai",
        },
      ],
      status: "completed",
    },
    {
      title: "Imaginify - AI Image SaaS Platform",
      description:
        "Full-stack AI SaaS platform for advanced image processing. It allows users to perform Cloudinary AI-powered transformations like image restoration, generative fill, and object removal, featuring a secure credit-based system with Stripe, advanced semantic search, and a community showcase.",
      image: "/projects/imaginify.png",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Clerk",
        "Cloudinary",
        "Stripe",
        "TailwindCSS",
      ],
      links: [
        {
          icon: <ExternalLink className="w-5 h-5" />,
          label: "Live Demo",
          url: "https://imaginefy-rho.vercel.app/",
        },
        {
          icon: <IoLogoGithub className="w-6 h-6"  />,
          label: "GitHub",
          url: "https://github.com/misterdan100/imaginefy",
        },
      ],
      status: "completed",
    },
    {
      title: "MisterFi - Finance Management",
      description:
        "Full-stack web application for advanced personal finance management. It allows users to log, categorize, and analyze financial transactions, featuring automated expense classification, detailed visualizations, budget tracking, secure authentication, and a modern, responsive interface with light/dark mode.",
      image: "/projects/misterfi.png",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "Turborepo",
        "PostgreSQL",
        "React Query",
        "Node.js",
        "TypeScript",
        "TailwindCSS",
        "Redux Toolkit",
        "Docker",
        "Clerk",
      ],
      links: [
        {
          icon: <ExternalLink className="w-5 h-5" />,
          label: "Live Demo",
          url: "https://misterfi.vercel.app/",
        },
        {
          icon: <IoLogoGithub className="w-6 h-6"  />,
          label: "GitHub",
          url: "https://github.com/misterdan100/misterfi",
        },
      ],
      status: "completed",
    },
    {
      title: "Mister Shop - E-commerce",
      description:
        "Full-stack web application simulating an e-commerce site inspired by Tesla Apparel, designed for managing product catalogs, users, and purchasing processes. It allows users to browse, filter by category, manage shopping carts and orders, featuring secure authentication and a robust architecture using Next.js, Typescript, Zustand, Prisma, Docker, and PostgreSQL.",
      image: "/projects/mister-shop.png",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Zustand",
        "Docker",
        "Prisma",
      ],
      links: [
        {
          icon: <ExternalLink className="w-5 h-5" />,
          label: "Live Demo",
          url: "https://mister-shop.vercel.app/",
        },
        {
          icon: <IoLogoGithub className="w-6 h-6"  />,
          label: "GitHub",
          url: "https://github.com/misterdan100/teslo-shop-v1",
        },
      ],
      status: "completed",
    },
    {
      title: "Mister Tasks",
      description:
        "Full-stack web application designed for efficient management of personal and project tasks. It allows users to create, edit, organize, and filter tasks, featuring secure authentication and a modern, responsive interface with dark mode.",
      image: "/projects/mister-tasks.png",
      technologies: [
        "React",
        "Node.js",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Redux",
      ],
      links: [
        {
          icon: <ExternalLink className="w-5 h-5" />,
          label: "Live Demo",
          url: "https://todo-app-v5-five.vercel.app/",
        },
        {
          icon: <IoLogoGithub className="w-6 h-6"  />,
          label: "GitHub",
          url: "https://github.com/misterdan100/todo-app-v5",
        },
      ],
      status: "completed",
    },
    {
      title: "Rent Cars",
      description:
        "Next.js car rental application built with TypeScript and Prisma, featuring secure Clerk authentication, Stripe payment processing, and a dynamic Tailwind/Shadcn UI.",
      image: "/projects/rent-cars.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Stripe",
        "React",
        "Clerk",
      ],
      links: [
        {
          icon: <ExternalLink className="w-5 h-5" />,
          label: "Live Demo",
          url: "https://rental-cars-project-jet.vercel.app/cars",
        },
        {
          icon: <IoLogoGithub className="w-6 h-6"  />,
          label: "GitHub",
          url: "https://github.com/misterdan100/rental-cars-project",
        },
      ],
      status: "completed",
    },
    {
      title: "Shopi",
      description:
        "Interactive e-commerce application using React/Vite/Tailwind, featuring seamless product search, favoriting, shopping cart functionality, and order placement.",
      image: "/projects/shopi.png",
      technologies: ["React", "Vite", "Prisma", "TailwindCSS"],
      links: [
        {
          icon: <ExternalLink className="w-5 h-5" />,
          label: "Live Demo",
          url: "https://ecommerce-misterdan.netlify.app/",
        },
        {
          icon: <IoLogoGithub className="w-6 h-6"  />,
          label: "GitHub",
          url: "https://github.com/misterdan100/e-commerce-react-vite-tailwind",
        },
      ],
      status: "completed",
    },
  ];
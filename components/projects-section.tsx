"use client";

import React, { useRef } from "react";
import { motion, useMotionValue } from "motion/react";
import ProjectCard, { Project } from "./project-card";
import { PiProjectorScreenBold } from "react-icons/pi";
import { ExternalLink } from "lucide-react";
import { IoLogoGithub } from "react-icons/io5";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Projects data
  const projects = [
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
  ] as Project[];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative bg-gray-100 dark:bg-[#122727] py-20 overflow-hidden transition-colors duration-700" // Updated background color
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
    >
      <div className="mx-auto px-4 container">
        {/* Section Title */}
        <motion.div className="mb-8 lg:mb-20 text-center">
          <h2 className="bg-clip-text bg-gradient-to-b from-gray-900 dark:from-white to-gray-600 dark:to-gray-400 mb-4 pb-2 font-bold text-transparent text-4xl md:text-5xl"> {/* Updated text gradient */}
            Projects
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <PiProjectorScreenBold className="w-8 h-8 text-gray-700 dark:text-gray-300" /> {/* Updated icon color */}
            </motion.span>
          </h2>
          <div className="bg-gradient-to-r from-teal-600 dark:from-[#004C31] to-cyan-700 dark:to-[#004A6A] mx-auto w-24 h-1" /> {/* Updated divider gradient */}
        </motion.div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;

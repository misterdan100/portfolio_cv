"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue } from 'motion/react';
import ProjectCard, { Project } from './project-card';
import { PiProjectorScreenBold } from 'react-icons/pi';
import { ExternalLink } from 'lucide-react';
import { GitHubLight } from 'developer-icons';

const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Projects data
    const projects = [
        {
            title: "Mister Tasks",
            description: "Full-stack web application designed for efficient management of personal and project tasks. It allows users to create, edit, organize, and filter tasks, featuring secure authentication and a modern, responsive interface with dark mode.",
            image: "/projects/mister-tasks.png",
            technologies: ["React", "Node.js", "Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Redux"],
            links: [
                {
                    icon: <ExternalLink className='w-6 h-6 text-white'/>,
                    label: "Live Demo",
                    url: "https://todo-app-v5-five.vercel.app/"
                },
                {
                    icon: <GitHubLight className='w-5 h-5 text-white'/>,
                    label: "GitHub",
                    url: "https://github.com/misterdan100/todo-app-v5"
                }
            ],
            status: "completed"
        },
        {
            title: "Rent Cars",
            description: "Next.js car rental application built with TypeScript and Prisma, featuring secure Clerk authentication, Stripe payment processing, and a dynamic Tailwind/Shadcn UI.",
            image: "/projects/rent-cars.png",
            technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "React", "Clerk"],
            links: [
                {
                    icon: <ExternalLink className='w-6 h-6 text-white'/>,
                    label: "Live Demo",
                    url: "https://rental-cars-project-jet.vercel.app/cars"
                },
                {
                    icon: <GitHubLight className='w-5 h-5 text-white'/>,
                    label: "GitHub",
                    url: "https://github.com/misterdan100/rental-cars-project"
                }
            ],
            status: "completed"
        },
        {
            title: "Shopi",
            description: "Interactive e-commerce application using React/Vite/Tailwind, featuring seamless product search, favoriting, shopping cart functionality, and order placement.",
            image: "/projects/shopi.png",
            technologies: ["React", "Vite", "Prisma", "TailwindCSS"],
            links: [
                {
                    icon: <ExternalLink className='w-6 h-6 text-white'/>,
                    label: "Live Demo",
                    url: "https://ecommerce-misterdan.netlify.app/"
                },
                {
                    icon: <GitHubLight className='w-5 h-5 text-white'/>,
                    label: "GitHub",
                    url: "https://github.com/misterdan100/e-commerce-react-vite-tailwind"
                }
            ],
            status: "completed"
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
            className="relative py-20 bg-gray-900 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-2 md:gap-4">
                        Projects
                        <PiProjectorScreenBold className="w-6 h-6 md:w-8 md:h-8 text-violet-400" />
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto" />
                </motion.div>

                <div className="grid gap-8 max-w-6xl grid-cols-1 md:grid-cols-2 mx-auto">
                    {projects.map((project: Project, index: number) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                        />

                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;
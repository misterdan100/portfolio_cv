"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Boxes, SquareChartGantt } from 'lucide-react';
import { JavaScript, TypeScript, React as ReactIcon, NextJs, TailwindCSS, Framer, NodeJs, ExpressJsLight, MongoDB, PostgreSQL, Docker, Git, HTML5, CSS } from 'developer-icons';

interface Skill {
    name: string;
    category: string;
    icon: React.ReactNode;
    tailwindClasses?: string;
    color?: string;
}

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const skills: Skill[] = [

        {
            name: 'React',
            category: 'Frontend',
            icon: <ReactIcon className="w-6 h-6" />,
            tailwindClasses: 'border-cyan-400/40',
            color: '#61DAFB'
        },
        {
            name: 'Next.js',
            category: 'Frontend',
            icon: <NextJs className="w-6 h-6" />,
            tailwindClasses: 'border-gray-300/40',
            color: '#FFFFFF'
        },
        {
            name: 'TypeScript',
            category: 'Languages',
            icon: <TypeScript className="w-6 h-6" />,
            tailwindClasses: 'border-blue-400/40',
            color: '#3178C6'
        },
        {
            name: 'JavaScript',
            category: 'Languages',
            icon: <JavaScript className="w-6 h-6" />,
            tailwindClasses: 'border-yellow-400/40 ',
            color: '#F7DF1E'
        },
        {
            name: 'TailwindCSS',
            category: 'Frontend',
            icon: <TailwindCSS className="w-6 h-6" />,
            tailwindClasses: 'border-sky-400/40',
            color: '#06B6D4'
        },
        {
            name: 'Framer Motion',
            category: 'Frontend',
            icon: <Framer className="w-6 h-6 " color='#fff' />,
            tailwindClasses: 'border-purple-400/40',
            color: '#9C5DF3'
        },


        // Backend
        {
            name: 'Node.js',
            category: 'Backend',
            icon: <NodeJs className="w-6 h-6" />,
            tailwindClasses: 'border-green-400/40',
            color: '#339933'
        },
        {
            name: "Express.js",
            category: "Backend",
            icon: <ExpressJsLight className="w-6 h-6" />,
            tailwindClasses: 'border-gray-300/40',
            color: '#FFFFFF'
        },
        {
            name: 'MongoDB',
            category: 'Backend',
            icon: <MongoDB className="w-6 h-6" />,
            tailwindClasses: 'border-green-500/40',
            color: '#47A248'
        },
        {
            name: 'PostgreSQL',
            category: 'Backend',
            icon: <PostgreSQL className="w-6 h-6" />,
            tailwindClasses: 'border-blue-400/40',
            color: '#336791'
        },

        // Others
        {
            name: 'Docker',
            category: 'Others',
            icon: <Docker className="w-6 h-6" />,
            tailwindClasses: 'border-blue-400/40',
            color: '#2496ED'
        },
        {
            name: 'Git',
            category: 'Others',
            icon: <Git className="w-6 h-6" />,
            tailwindClasses: 'border-orange-400/40',
            color: '#F05032'
        },
        {
            name: "Sanity",
            category: "Others",
            icon: <Boxes className="w-6 h-6 text-red-400" />,
            tailwindClasses: 'border-red-400/40',
            color: '#F03E2F'
        },
        {
            name: 'HTML',
            category: 'Languages',
            icon: <HTML5 className="w-6 h-6" />,
            tailwindClasses: 'border-orange-500/40',
            color: '#E34F26'
        },
        {
            name: 'CSS',
            category: 'Languages',
            icon: <CSS className="w-6 h-6" />,
            tailwindClasses: 'border-purple-300/40',
            color: '#883fb6'
        },
    ];

    const categories = Array.from(new Set(skills.map(skill => skill.category)));

    const filteredSkills = activeCategory
        ? skills.filter(skill => skill.category === activeCategory)
        : skills;

    return (
        <section className="py-24 min-h-screen bg-[#122727]">
            <div className="max-w-6xl mx-auto px-4">

                {/* Section Title */}
                <motion.div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Skills & Technologies
                        <motion.span
                            className="inline-block ml-2"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <SquareChartGantt className="w-8 h-8 text-gray-300" />
                        </motion.span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#004C31] to-[#004A6A] mx-auto" />
                </motion.div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-5 py-1 cursor-pointer rounded-full text-sm transition-all ${activeCategory === null
                            ? 'bg-[#197F8A]/20 text-[#6EFF91] border border-[#197F8A]/30'
                            : 'text-[#EEFBEE] hover:text-[#6EFF91]'
                            }`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-1 cursor-pointer rounded-full text-sm transition-all ${activeCategory === category
                                ? 'bg-[#197F8A]/20 text-[#6EFF91] border border-[#197F8A]/30'
                                : 'text-[#EEFBEE] hover:text-[#6EFF91]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className={`group relative cursor-grab ${skill.tailwindClasses}`}
                        >
                            <div 
                                className="absolute inset-0 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" 
                                style={{
                                    backgroundColor: `${skill.color}20` // 20 is hex for 12% opacity
                                }}
                            />
                            <div 
                                className="relative bg-transparent backdrop-blur-sm rounded-xl border p-4 transition-all hover:-translate-y-1 duration-200 group-hover:shadow-lg"
                                style={{
                                    borderColor: `${skill.color}40`, // 40 is hex for 25% opacity
                                    boxShadow: `0 10px 15px -3px ${skill.color}10, 0 4px 6px -4px ${skill.color}10`
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    {skill.icon}
                                    <span className="font-medium text-gray-300 group-hover:text-gray-100 transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
"use client";

import React, { useRef } from "react";
import { motion, useMotionValue } from "motion/react";
import ProjectCard, { Project } from "./project-card";
import { PiProjectorScreenBold } from "react-icons/pi";
import { projects } from '@/data/projects';


const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


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

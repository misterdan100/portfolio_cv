// ProjectCard.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "motion/react";
import { getTechStyle } from "@/utils/tech-styles";

interface ProjectLink {
  icon: React.ReactNode;
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status?: "in-progress" | "completed";
  links: ProjectLink[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const rotationSpringConfig = { stiffness: 400, damping: 25, mass: 0.1 };

  const rotateX = useSpring(0, rotationSpringConfig);
  const rotateY = useSpring(0, rotationSpringConfig);

  const contentX = useSpring(0, springConfig);
  const contentY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseXRelative = e.clientX - centerX;
    const mouseYRelative = e.clientY - centerY;

    rotateX.set(mouseYRelative * -0.01);
    rotateY.set(mouseXRelative * 0.01);

    contentX.set(mouseXRelative * 0.02);
    contentY.set(mouseYRelative * 0.02);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    contentX.set(0);
    contentY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-6xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative bg-white/80 dark:bg-[#0E1E1E]/50 shadow-sm backdrop-blur-lg border border-gray-200 dark:border-[#0E1E1E]/50 rounded-xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: "1000px",
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        {/* Project Image */}
        <motion.div
          className="relative h-64 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              x: contentX,
              y: contentY,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#007A5E]/80 dark:from-[#007A5E] via-[#005F7A]/40 dark:via-[#005F7A]/50 to-transparent dark:to-transparent"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Project Content */}
        <motion.div
          className="relative p-6"
          style={{
            x: contentX,
            y: contentY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Title and Status */}
          <div className="flex items-center gap-3 mb-3">
            <motion.h3
              className="font-bold text-gray-800 dark:text-[#E6F4E6] text-2xl"
              style={{ translateZ: 50 }}
            >
              {project.title}
            </motion.h3>
            {project.status === "in-progress" && (
              <motion.div
                className="bg-[#166D75]/10 dark:bg-[#166D75]/20 px-3 py-1 border border-[#166D75]/20 dark:border-[#166D75]/30 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex w-2 h-2">
                    <span className="inline-flex absolute bg-[#166D75] opacity-75 rounded-full w-full h-full animate-ping"></span>
                    <span className="inline-flex relative bg-[#166D75] rounded-full w-2 h-2"></span>
                  </span>
                  <span className="font-medium text-[#166D75] text-xs">
                    In Progress
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Description */}
          <motion.p
            className="mb-4 text-gray-700 dark:text-[#E6F4E6] leading-relaxed"
            style={{ translateZ: 30 }}
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            style={{ translateZ: 40 }}
          >
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                className={`${getTechStyle(
                  tech
                )} px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border cursor-default`}
                whileHover={{
                  scale: 1.05,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div 
            className="lg:flex gap-3 grid grid-cols-2" 
            style={{ translateZ: 50 }}
          >
            {project.links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-emerald-100 hover:bg-emerald-600 dark:bg-[#4EFF85]/20 dark:hover:bg-[#009963] px-4 py-2 rounded-lg h-10 font-medium text-emerald-800 hover:text-white dark:hover:text-white dark:text-emerald-100 transition-colors"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(94, 255, 133, 0.2)",
                }}
              >
                {link.icon} {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hover Glow Effect */}
      <motion.div
        className="-z-10 absolute -inset-1 bg-gradient-to-r from-[#003D28]/10 dark:from-[#003D28]/20 to-[#003C5A]/10 dark:to-[#003C5A]/20 opacity-0 group-hover:opacity-100 blur-xl rounded-xl"
        animate={
          isHovered
            ? {
                opacity: [0, 0.5, 0],
                scale: [0.8, 1.2, 0.8],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
            : { opacity: 0 }
        }
      />
    </motion.div>
  );
};

export default ProjectCard;

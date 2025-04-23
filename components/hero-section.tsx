"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "motion/react";
import { ChevronRight, FileDown } from "lucide-react";
import Image from "next/image";

const stackItems = [
  { name: "React", color: "cyan" },
  { name: "Node.js", color: "green" },
  { name: "Next.js", color: "violet" },
  { name: "TypeScript", color: "blue" },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string }> = {
    cyan: { bg: "bg-cyan-100 dark:bg-cyan-700/50", text: "text-cyan-700 dark:text-cyan-300" },
    green: { bg: "bg-green-100 dark:bg-green-700/50", text: "text-green-700 dark:text-green-300" },
    violet: { bg: "bg-violet-100 dark:bg-violet-700/50", text: "text-violet-700 dark:text-violet-300" },
    blue: { bg: "bg-blue-100 dark:bg-blue-700/50", text: "text-blue-700 dark:text-blue-300" },
  };

  return (
    colorMap[color] || {
      bg: "bg-gray-200 dark:bg-[#122727]/50",
      text: "text-gray-800 dark:bg-gradient-to-b dark:from-white dark:to-gray-400 dark:bg-clip-text dark:text-transparent",
    }
  );
};

const GlitchText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const controls = useAnimationControls();
  const letters = Array.from(text);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: delay + i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    }));
  }, [controls, delay]);

  return (
    <div className="inline-block relative">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, x: -20 }}
          custom={i}
          animate={controls}
          className="inline-block relative"
          whileHover={{
            color: ["#aabcaa", "#004A6A", "#aabcaa"],
            transition: { duration: 0.2 },
          }}
        >
          {letter === " " ? "\u00A0" : (letter as string)}
        </motion.span>
      ))}
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <motion.div
      className="bottom-8 left-1/2 absolute -translate-x-1/2 cursor-pointer transform"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative border-2 dark:border-[#006A6A] border-teal-600 rounded-full w-6 h-10">
        <motion.div
          className="bg-teal-600 dark:bg-[#006A6A] mx-auto rounded-full w-2 h-2"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <motion.p
        className="mt-2 text-teal-700 dark:text-[#006a69] text-sm text-center -translate-x-[5px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Scroll
      </motion.p>
    </motion.div>
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="relative bg-gray-100 dark:bg-[#122727] min-h-screen overflow-hidden text-gray-900 dark:text-white transition-colors duration-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background elements remain the same */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #00996310 1px, transparent 1px),
                            linear-gradient(to bottom, #006B9910 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Particles section remains the same */}

      {/* Main Content */}
      <motion.div
        className="z-10 relative flex justify-center items-center px-4 min-h-screen"
        style={{ opacity }}
      >
        {/* Decorative lines remain the same */}
        <motion.div
          className="top-0 left-0 absolute bg-gradient-to-b from-cyan-700 dark:from-[#004A6A] to-transparent w-1 h-32"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.div
          className="top-0 left-0 absolute bg-gradient-to-r from-cyan-700 dark:from-[#004A6A] to-transparent w-32 h-1"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Main Title */}
        <motion.div
          className="flex justify-center gap-12"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="flex lg:flex-row flex-col justify-center items-center gap-12 mt-20 lg:mt-0">
            {/* LEFT SECTION */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Name............ */}
              <h1 className="mb-4 font-bold text-gray-900 dark:text-white text-5xl md:text-8xl">
                <GlitchText text="Daniel Merchan" />
              </h1>

              {/* Rol........... */}
              <motion.div
                className="mb-4 font-bold text-gray-700 dark:text-gray-200 text-xl md:text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <GlitchText text="Full Stack Developer" />
              </motion.div>

              {/* Skills */}
              <motion.div
                className="flex items-center gap-4 mb-8 text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                {stackItems.map((skill, index) => {
                  const { bg, text } = getColorClasses(skill.color);
                  return (
                    <span
                      key={index}
                      className={`${bg} ${text} px-3 py-1 rounded-full text-sm font-normal hover:scale-110 cursor-default transition`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </motion.div>

              {/* Description Card */}
              <motion.div
                className="relative hover:shadow-cyan-500/30 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(25,127,138,0.3)] rounded-2xl max-w-2xl transition-shadow duration-300 delay-700"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-gray-800 dark:text-[#EEFBEE] text-lg lg:text-left text-center">
                  I&apos;m a dedicated web developer focused on solving
                  problems, building robust online experiences and user-friendly
                  applications.🚀
                </p>
              </motion.div>

              {/* CTA Button */}
              <div className="items-center lg:items-start gap-6 grid grid-cols-2">
                <motion.a
                  className="group relative flex justify-center items-center gap-2 bg-emerald-100 hover:bg-emerald-600 dark:bg-[#4EFF85]/20 dark:hover:bg-[#009963] mt-8 px-4 py-2 border border-emerald-300 dark:border-emerald-700 rounded-full w-full overflow-hidden font-semibold text-emerald-800 hover:text-white dark:hover:text-white dark:text-emerald-100 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                >
                  <div className="flex items-center gap-2">
                    <span className="z-10 relative">Resume CV</span>
                    <FileDown />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-emerald-600 dark:bg-[#009963]"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  className="group relative flex justify-center items-center bg-emerald-100 hover:bg-emerald-600 dark:bg-[#4EFF85]/20 dark:hover:bg-[#009963] mt-8 px-4 py-2 border border-emerald-300 dark:border-emerald-700 rounded-full w-full overflow-hidden font-semibold text-emerald-800 hover:text-white dark:hover:text-white dark:text-emerald-100 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                >
                  <div className="flex items-center gap-2">
                    <span className="z-10 relative">View Projects</span>
                    <ChevronRight />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-emerald-600 dark:bg-[#009963]"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex justify-center items-center w-96 h-96">
              <Image
                src="https://avatars.githubusercontent.com/u/122033493"
                alt="Hero Image"
                width={400}
                height={400}
                className="hover:shadow-gray-400/50 hover:shadow-xl dark:hover:shadow-[#15372b] border-4 hover:border-emerald-500 dark:hover:border-[#e1e1e1] border-transparent rounded-[80px] w-full h-full object-cover transition"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </motion.div>
  );
};

export default HeroSection;

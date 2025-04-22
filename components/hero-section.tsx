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

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string }> = {
    cyan: { bg: "bg-cyan-700/50", text: "text-cyan-300" },
    green: { bg: "bg-green-700/50", text: "text-green-300" },
    violet: { bg: "bg-violet-700/50", text: "text-violet-300" },
    blue: { bg: "bg-blue-700/50", text: "text-blue-300" },
  };

  return (
    colorMap[color] || {
      bg: "bg-[#122727]/50",
      text: "bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent",
    }
  );
};

const stackItems = [
  { name: "React", color: "cyan" },
  { name: "Node.js", color: "green" },
  { name: "Next.js", color: "violet" },
  { name: "TypeScript", color: "blue" },
];

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
    <div className="relative inline-block">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, x: -20 }}
          custom={i}
          animate={controls}
          className="inline-block relative"
          whileHover={{
            color: ["#EEFBEE", "#004A6A", "#EEFBEE"],
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
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="w-6 h-10 border-2 border-[#006A6A] rounded-full relative">
        <motion.div
          className="w-2 h-2 mx-auto bg-[#006A6A] rounded-full"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <motion.p
        className="text-[#006a69] text-sm mt-2 text-center -translate-x-[5px]"
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
      className="relative min-h-screen bg-[#122727] overflow-hidden"
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
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
        style={{ opacity }}
      >
        {/* Decorative lines remain the same */}
        <motion.div
          className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-[#004A6A] to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.div
          className="absolute top-0 left-0 h-1 w-32 bg-gradient-to-r from-[#004A6A] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Main Title */}
        <motion.div
          className="flex gap-12 justify-center"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
            <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">



          {/* LEFT SECTION */}
          <div className="flex flex-col">
            {/* Name............ */}
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-4">
              <GlitchText text="Daniel Merchan" />
            </h1>

            {/* Rol........... */}
            <motion.div
              className="text-xl md:text-4xl font-bold text-gray-200  mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <GlitchText text="Full Stack Developer" />
            </motion.div>

            {/* Skills */}
            <motion.div
              className="flex items-center gap-4 text-gray-400 mb-8"
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
              className="relative max-w-2xl backdrop-blur-lg "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(25, 127, 138, 0.3)",
              }}
            >
              <p className="text-[#EEFBEE] text-lg">
                I&apos;m a dedicated web developer focused on solving problems,
                building robust online experiences and user-friendly
                applications.🚀
              </p>
            </motion.div>

            {/* CTA Button */}
            <div className="flex gap-6 items-center ">

            <motion.a
                className="mt-8 px-8 py-3 bg-[#4EFF85]/20  rounded-full font-semibold hover:bg-[#009963] transition-colors relative overflow-hidden group flex items-center gap-2 w-fit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
              >
                <div className="flex items-center gap-2 ">
                  <span className="relative z-10">Resume CV</span>
                  <FileDown />
                </div>
                <motion.div
                  className="absolute inset-0 bg-[#009963]"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                className="mt-8 px-8 py-3 bg-[#4EFF85]/20  rounded-full font-semibold hover:bg-[#009963] transition-colors relative overflow-hidden group flex items-center gap-2 w-fit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
              >
                <div className="flex items-center gap-2 ">
                  <span className="relative z-10">View Projects</span>
                  <ChevronRight />
                </div>
                <motion.div
                  className="absolute inset-0 bg-[#009963]"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-96 h-96 flex justify-center items-center ">
            <Image
              src="https://avatars.githubusercontent.com/u/122033493"
              alt="Hero Image"
              width={400}
              height={400}
              className="rounded-[80px] w-full h-full object-cover border-4 border-transparent hover:border-[#e1e1e1] hover:shadow-xl hover:shadow-[#15372b] transition"
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

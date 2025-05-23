"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import ProjectsSection from './projects-section';
import SkillsSection from './skills-section';
import ContactSection from './contact-section';

const MainContainer = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const contactRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const skillRef = useRef(null);

    // Main scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Hero section animations
    const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
    const heroY = useTransform(smoothProgress, [0, 0.2], [0, -50]);

    // Experience section animations
    const { scrollYProgress: expProgress } = useScroll({
        target: contactRef,
        offset: ["start end", "end start"]
    });

    const contactOpacity = useTransform(
        expProgress,
        [0, 0.1, 0.8, 1],
        [0, 1, 1, 0]
    );

    const contactScale = useTransform(
        expProgress,
        [0, 0.1, 0.8, 1],
        [0.8, 1, 1, 0.8]
    );

    // About section animations
    const { scrollYProgress: aboutProgress } = useScroll({
        target: aboutRef,
        offset: ["start end", "end start"]
    });

    const aboutOpacity = useTransform(
        aboutProgress,
        [0, 0.1, 0.8, 1],
        [0, 1, 1, 0]
    );

    const aboutScale = useTransform(
        aboutProgress,
        [0, 0.1, 0.8, 1],
        [0.8, 1, 1, 0.8]
    );

    // Skill section animations
    const { scrollYProgress: skillProgress } = useScroll({
        target: skillRef,
        offset: ["start end", "end start"]
    });

    const skillOpacity = useTransform(
        skillProgress,
        [0, 0.1, 0.8, 1],
        [0, 1, 1, 0]
    );

    const skillScale = useTransform(
        skillProgress,
        [0, 0.1, 0.8, 1],
        [0.8, 1, 1, 0.8]
    );

    const { scrollYProgress: projectsProgress } = useScroll({
        target: projectsRef,
        offset: ["start end", "end start"]
    });

    const projectsOpacity = useTransform(
        projectsProgress,
        [0, 0.1, 0.8, 1],
        [0, 1, 1, 0]
    );

    const projectsScale = useTransform(
        projectsProgress,
        [0, 0.1, 0.8, 1],
        [0.8, 1, 1, 0.8]
    );

    // Background gradient animation
    const gradientProgress = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        [
            "radial-gradient(circle at 50% 50%, rgba(0,76,49,0.1) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at 50% 50%, rgba(0,153,99,0.1) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at 50% 50%, rgba(25,127,138,0.1) 0%, rgba(0,0,0,0) 70%)"
        ]
    );

    return (
        <motion.main
            ref={containerRef}
            className="relative bg-[#122727]"
            style={{
                background: gradientProgress
            }}
        >
            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2% 50%, rgba(0,153,99,0.1) 0%, transparent 100%), radial-gradient(circle at 98% 50%, rgba(0,107,153,0.1) 0%, transparent 100%)`,
                        scale: smoothProgress
                    }}
                />
            </div>

            {/* Hero Section */}
            <motion.section
                id="home"
                ref={heroRef}
                className="top-0 relative h-screen"
                style={{
                    scale: heroScale,
                    opacity: heroOpacity,
                    y: heroY
                }}
            >
                <HeroSection />
            </motion.section>

            {/* Experience Section */}
            {/* <motion.section
                ref={contactRef}
                className="top-0 z-10 relative min-h-screen"
                style={{
                    opacity: experienceOpacity,
                    scale: experienceScale
                }}
            >
                <ExperienceSection />
            </motion.section> */}

            <motion.section
                ref={skillRef}
                className="top-0 z-20 relative min-h-screen"
                style={{
                    opacity: skillOpacity,
                    scale: skillScale
                }}
            >
                <SkillsSection />
            </motion.section>

            {/* Projects Section */}
            <motion.section
                id="projects"
                ref={projectsRef}
                className="z-20 relative min-h-screen"
                style={{
                    opacity: projectsOpacity,
                    scale: projectsScale
                }}
            >
                <ProjectsSection />
            </motion.section>

            {/* About Section */}
            <motion.section
                id="about"
                ref={aboutRef}
                className="z-20 relative min-h-screen"
                style={{
                    opacity: aboutOpacity,
                    scale: aboutScale
                }}
            >
                <AboutSection />
            </motion.section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                ref={contactRef}
                className="z-20 relative min-h-screen"
                style={{
                    opacity: contactOpacity,
                    scale: contactScale
                }}
            >
                <ContactSection />
            </motion.section>


            {/* Scroll Progress Indicator */}
            <motion.div
                className="right-4 bottom-4 fixed flex justify-center items-center border-[#6EFF91] border-2 rounded-full w-12 h-12 font-medium text-[#EEFBEE] text-sm"
                style={{
                    scale: useTransform(smoothProgress, [0, 0.1], [0, 1]),
                    opacity: useTransform(smoothProgress, [0, 0.1], [0, 1])
                }}
            >
                <motion.div
                    className="absolute inset-2"
                    style={{
                        background: "linear-gradient(to bottom, #004C31 0%, #004A6A 100%)",
                        rotate: useTransform(smoothProgress, [0, 1], [0, 360])
                    }}
                />
                <div className="absolute inset-2 flex justify-center items-center bg-[#2E6160] rounded-full">
                    {Math.round(useTransform(smoothProgress, [0, 1], [0, 100]).get())}%
                </div>
            </motion.div>
        </motion.main>
    );
};

export default MainContainer;
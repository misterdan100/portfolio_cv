"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Database, Brain, Sparkles, Zap, PencilRuler } from 'lucide-react';

const AnimatedPanel = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay }}
            className="relative"
        >
            {children}
        </motion.div>
    );
};

const SkillCard = ({ Icon, title, description }: { Icon: any, title: string, description: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#009963]/20 to-[#006B99]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-[#2E6160]/50 backdrop-blur-sm p-6 rounded-xl border border-[#009963]/20">
                <Icon className="w-8 h-8 mb-4 text-[#009963]" />
                <h3 className="text-xl font-bold text-[#EEFBEE] mb-2">{title}</h3>
                <p className="text-[#EEFBEE]">{description}</p>
            </div>
        </motion.div>
    );
};

const AboutSection = () => {
    return (
        <motion.section
            className="relative min-h-screen bg-[#122727] py-20 px-4 overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2% 50%, rgba(0,153,99,0.1) 0%, transparent 100%),
                            radial-gradient(circle at 98% 50%, rgba(0,107,153,0.1) 0%, transparent 100%)`
                    }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        About Me
                        <motion.span
                            className="inline-block ml-2"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-8 h-8 text-gray-300" />
                        </motion.span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#004C31] to-[#004A6A] mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-6">
                        <AnimatedPanel delay={0.2}>
                            <h3 className="text-2xl font-bold text-[#009963] mb-4">
                                Hello! I&apos;m Daniel
                            </h3>
                            <p className="text-[#EEFBEE] leading-relaxed">
                                A driven Web Developer honing full-stack skills with a focus on modern JavaScript technologies including React, Next.js, Node.js, and TypeScript. I combine dedicated self-study with daily hands-on practice, building personal projects that span both front-end and back-end development. <br/>I leverage AI tools to accelerate my development workflow, streamline debugging, and brainstorm innovative approaches. My passion is creating functional, engaging web applications and solving problems efficiently through code.
                            </p>
                        </AnimatedPanel>

                        <AnimatedPanel delay={0.4}>
                            <p className="text-[#EEFBEE] leading-relaxed">
                                I am actively looking for opportunities to bring my strong work ethic, problem-solving skills, AI-assisted efficiency, and enthusiasm for development to a challenging role. Ready to contribute effectively and learn quickly within a collaborative team environment.
                            </p>
                        </AnimatedPanel>

                        <motion.div
                            className="grid md:grid-cols-2 gap-8 md:mt-16"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-center">
                                <Zap className="w-8 h-8 text-[#009963] mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-[#EEFBEE] mb-2">Full Stack Skill</h4>
                                <p className="text-[#EEFBEE]">Proficient in both frontend and backend development</p>
                            </div>
                            <div className="text-center">
                                <Brain className="w-8 h-8 text-[#009963] mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-[#EEFBEE] mb-2">Problem Solver</h4>
                                <p className="text-[#EEFBEE]">Creating efficient solutions to complex challenges</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <SkillCard
                            Icon={Code}
                            title="Modern Frontend Development"
                            description="Building dynamic UIs using React, Next.js, TypeScript, Tailwind CSS, and Framer Motion."
                        />
                        <SkillCard
                            Icon={Database}
                            title="Backend & Data Integration"
                            description="Developing APIs with Node.js/Express.js, integrating MongoDB, PostgreSQL, and Sanity CMS."
                        />
                        <SkillCard
                            Icon={PencilRuler}
                            title="Development Tools & Workflow"
                            description="Utilizing AI to accelerate development, Git for version control and Docker for application containerization."
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutSection;
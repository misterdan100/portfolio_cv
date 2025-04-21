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
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-violet-500/20">
                <Icon className="w-8 h-8 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </motion.div>
    );
};

const AboutSection = () => {
    return (
        <motion.section
            className="relative min-h-screen bg-gray-900 py-20 px-4 overflow-hidden"
        >
            {/* Background Elements remain the same */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 100%),
                            radial-gradient(circle at 98% 50%, rgba(217, 70, 239, 0.1) 0%, transparent 100%)`
                    }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title remains the same */}
                <motion.div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About Me
                        <motion.span
                            className="inline-block ml-2"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-8 h-8 text-violet-400" />
                        </motion.span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto" />
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Left Column - Updated About Text */}
                    <div className="space-y-6">
                        <AnimatedPanel delay={0.2}>
                            <h3 className="text-2xl font-bold text-violet-400 mb-4">
                            Hello! I&apos;m Daniel
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                A driven Web Developer honing full-stack skills with a focus on modern JavaScript technologies including React, Next.js, Node.js, and TypeScript. I combine dedicated self-study with daily hands-on practice, building personal projects that span both front-end and back-end development. <br/>I leverage AI tools to accelerate my development workflow, streamline debugging, and brainstorm innovative approaches. My passion is creating functional, engaging web applications and solving problems efficiently through code.
                            </p>
                        </AnimatedPanel>

                        <AnimatedPanel delay={0.4}>
                            <p className="text-gray-300 leading-relaxed">
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
                                <Zap className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-white mb-2">Full Stack Skill</h4>
                                <p className="text-gray-300">Proficient in both frontend and backend development</p>
                            </div>
                            <div className="text-center">
                                <Brain className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-white mb-2">Problem Solver</h4>
                                <p className="text-gray-300">Creating efficient solutions to complex challenges</p>
                            </div>
                        </motion.div>

                        {/* Updated Stats */}
                        {/* <AnimatedPanel delay={0.6}>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-gray-800/50 p-4 rounded-lg border border-violet-500/20">
                                    <h4 className="text-violet-400 font-bold">Experience</h4>
                                    <p className="text-3xl font-bold text-white">1+ Years</p>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-lg border border-violet-500/20">
                                    <h4 className="text-violet-400 font-bold">Projects</h4>
                                    <p className="text-3xl font-bold text-white">15+</p>
                                </div>
                            </div>
                        </AnimatedPanel> */}
                    </div>

                    {/* Right Column - Updated Skills */}
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

                {/* Bottom Section - Updated Quick Facts */}
                {/* <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center">
                        <Zap className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Full Stack Expert</h4>
                        <p className="text-gray-300">Proficient in both frontend and backend development</p>
                    </div>
                    <div className="text-center">
                        <Rocket className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Cloud Native</h4>
                        <p className="text-gray-300">Experienced in AWS and modern cloud technologies</p>
                    </div>
                    <div className="text-center">
                        <Brain className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Problem Solver</h4>
                        <p className="text-gray-300">Creating efficient solutions to complex challenges</p>
                    </div>
                </motion.div> */}
            </div>
        </motion.section>
    );
};

export default AboutSection;
"use client";

import React from 'react';
import { motion } from 'motion/react';
import { socialLinks } from './navbar';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="relative bg-gray-900 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Logo/Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4 md:mb-0 flex items-center"
                    >
                        <Image 
                            src="https://raw.githubusercontent.com/misterdan100/misterdan-cv-v1/3c8a1efa2243b5df709c190cb4a142a259504922/src/assets/img/daniel-merchan-logo_4.svg"
                            alt="Logo"
                            width={28}
                            height={28}
                            className="inline-block mr-2"
                        />
                        <span className="text-xl font-semibold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                            Daniel Merchan Caceres
                        </span>
                    </motion.div>

                    {/* Center - Social Links */}
                    <motion.div
                        className="flex gap-6 mb-4 md:mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 ${social.color} transition-colors relative group`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <social.icon className="w-5 h-5" />
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                    px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded-md
                                    opacity-0 group-hover:opacity-100 transition-opacity
                                    whitespace-nowrap pointer-events-none">
                                    {social.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Right side - Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-sm"
                    >
                        © {currentYear} All rights reserved
                    </motion.div>
                </div>

                {/* Animated gradient line */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                        background: 'linear-gradient(to right, rgba(124, 58, 237, 0), rgba(124, 58, 237, 0.5), rgba(124, 58, 237, 0))'
                    }}
                    animate={{
                        backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            </div>
        </motion.footer>
    );
};

export default Footer;
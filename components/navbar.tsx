"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ButtonTheme from "./button-theme";
import { socialLinks } from "@/lib/socialLinks";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="top-0 right-0 left-0 z-50 fixed flex justify-center items-center px-4 h-20 md:h-24 transition-colors duration-700">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-5xl"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b6f5c6]/0 dark:from-[#004C31]/0 via-[#b6e6f5]/10 dark:via-[#004A6A]/10 to-[#b6f5c6]/0 dark:to-[#004C31]/0 blur-lg rounded-full scale-110 transform" />

        {/* Main Navigation */}
        <div className="z-[100] relative bg-white/80 dark:bg-[#122727]/80 shadow-[#b6e6f5]/10 shadow-lg dark:shadow-[#004A6A]/10 backdrop-blur-md px-4 md:px-8 py-3 md:py-4 border border-[#b6e6f5]/40 dark:border-[#004D53]/40 rounded-full">
          <div className="flex justify-between items-center gap-4">
            {/* Desktop Navigation */}
            <div className="flex items-center gap-4">
              <motion.a
                key="logo-navbar-item"
                href={pathname === "/" ? "#home" : "/"}
                rel="noopener noreferrer"
                className={`text-gray-700 dark:text-gray-400 transition-colors relative group pl-2 lg:pl-0`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Image
                  src="https://raw.githubusercontent.com/misterdan100/misterdan-cv-v1/3c8a1efa2243b5df709c190cb4a142a259504922/src/assets/img/daniel-merchan-logo_4.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  priority
                />
              </motion.a>
              <ul className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <motion.li
                    className="cursor-pointer"
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="group relative px-2 py-1 font-medium text-gray-900 hover:text-green-600 dark:hover:text-[#6EFF91] dark:text-[#EEFBEE] text-sm transition-colors"
                    >
                      {item.name}
                      <div className="bottom-0 left-1/2 group-hover:left-0 absolute bg-green-500 dark:bg-[#6EFF91] w-0 group-hover:w-full h-[2px] transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleMenuClick}
                className="md:hidden p-2 text-gray-700 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-4 pl-6 border-[#b6e6f5]/40 dark:border-[#004D53]/40 border-l">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-700 dark:text-gray-400 ${social.color} transition-colors relative group`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span
                    className="-bottom-8 left-1/2 absolute bg-white dark:bg-gray-900 opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 text-xs whitespace-nowrap transition-opacity -translate-x-1/2 pointer-events-none transform"
                  >
                    {social.label}
                  </span>
                </motion.a>
              ))}
              {/* Theme Toggle Button - Desktop */}
              <div className="hidden md:block pl-4 border-[#b6e6f5]/40 dark:border-gray-700/40 border-l">
                {" "}
                <ButtonTheme />
              </div>
            </div>

            {/* Mobile Social Links - Always visible */}
            <div className="md:hidden flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-700 dark:text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  download={social.label === "CV Resume"}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
              <div className="pl-4 border-[#b6e6f5]/40 dark:border-gray-700/40 border-l"
              >
                {" "}
                <ButtonTheme />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="top-20 right-0 left-0 absolute bg-white/95 dark:bg-[#122727]/95 shadow-[#b6e6f5]/10 shadow-lg dark:shadow-[#004A6A]/10 backdrop-blur-lg mt-2 p-4 border border-[#b6e6f5]/40 dark:border-[#004D53]/40 rounded-2xl"
            >
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block hover:bg-green-100 dark:hover:bg-[#009963]/10 px-4 py-2 rounded-lg font-medium text-gray-900 hover:text-green-600 dark:hover:text-[#6EFF91] dark:text-[#EEFBEE] text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-200/0 dark:from-[#009963]/0 via-blue-200/10 dark:via-[#006B99]/10 to-green-200/0 dark:to-[#009963]/0 opacity-50 rounded-full scale-105 transform" />
      </motion.nav>
    </div>
  );
};

export default NavBar;

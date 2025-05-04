"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Code,
  Database,
  Brain,
  Sparkles,
  Zap,
  PencilRuler,
  PhoneOutgoing,
  MailCheck,
  PhoneMissed,
  MapPin,
} from "lucide-react";
import ContactForm from "./contact-form";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { socialLinks } from "@/lib/socialLinks";

const AnimatedPanel = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
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

const FormCard = ({
  Icon,
  title,
  description,
}: {
  Icon: any;
  title: string;
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 dark:from-[#009963]/20 to-blue-700/20 dark:to-[#006B99]/20 blur-xl group-hover:blur-2xl rounded-xl transition-all duration-300" />
      <div className="relative bg-white/80 dark:bg-[#2E6160]/50 backdrop-blur-sm p-6 border dark:border-[#009963]/20 border-teal-600/20 rounded-xl">
        <ContactForm />
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <motion.section className="relative bg-gray-100 dark:bg-[#122727] px-4 py-20 min-h-screen overflow-hidden transition-colors duration-700">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 2% 50%, rgba(0,153,99,0.1) 0%, transparent 100%),
                            radial-gradient(circle at 98% 50%, rgba(0,107,153,0.1) 0%, transparent 100%)`,
          }}
        />
      </div>

      <div className="z-10 relative mx-auto max-w-6xl">
        {/* Title Section */}
        <motion.div className="mb-8 lg:mb-20 text-center">
          <h2 className="bg-clip-text bg-gradient-to-b from-gray-900 dark:from-white to-gray-600 dark:to-gray-400 mb-4 font-bold text-transparent text-4xl md:text-5xl">
            Get in Touch
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <PhoneOutgoing className="w-8 h-8 text-gray-600 dark:text-gray-300" />
            </motion.span>
          </h2>
          <p className="mb-4 text-gray-800 dark:text-[#EEFBEE] text-lg text-center">
            Feel free to reach out for a job or just to collaborate
          </p>
          <div className="bg-gradient-to-r from-teal-700 dark:from-[#004C31] to-blue-800 dark:to-[#004A6A] mx-auto w-24 h-1" />
        </motion.div>

        {/* Description */}
        <div className="gap-12 grid md:grid-cols-2 mb-20">
          <div className="space-y-6 pt-8">
            <AnimatedPanel delay={0.2}>
              <h3 className="mb-4 font-bold text-teal-600 dark:text-[#009963] text-2xl">
                Contact
              </h3>
            </AnimatedPanel>

            <div className="flex flex-col gap-6">
              <AnimatedPanel delay={0.4}>
                <div className="flex items-center gap-3">
                  <MailCheck size={30} 
                    className="text-gray-700 dark:text-gray-400"
                  />
                  {/* Icon color might need adjustment depending on the specific icon library and skill.color */}
                  <span className="font-medium text-gray-700 dark:group-hover:text-gray-100 dark:text-gray-300 group-hover:text-gray-900 transition-colors">
                    danielmca60@gmail.com
                  </span>
                </div>
              </AnimatedPanel>

              <AnimatedPanel delay={0.4}>
                <div className="flex items-center gap-3">
                  <PhoneMissed size={30} 
                    className="text-gray-700 dark:text-gray-400"
                  />
                  {/* Icon color might need adjustment depending on the specific icon library and skill.color */}
                  <a 
                    href="https://api.whatsapp.com/send/?phone=573107802775"
                    target="_blank"
                    className="font-medium text-gray-700 dark:group-hover:text-gray-100 dark:text-gray-300 group-hover:text-gray-900 transition-colors"
                  >
                    +57 310 780 2775
                  </a>
                </div>
              </AnimatedPanel>

              <AnimatedPanel delay={0.4}>
                <div className="flex items-center gap-3">
                  <MapPin size={30} 
                    className="text-gray-700 dark:text-gray-400"
                  />
                  {/* Icon color might need adjustment depending on the specific icon library and skill.color */}
                  <span className="font-medium text-gray-700 dark:group-hover:text-gray-100 dark:text-gray-300 group-hover:text-gray-900 transition-colors">
                    Medellin - Colombia
                  </span>
                </div>
              </AnimatedPanel>
            </div>


            <motion.div
              className="flex flex-wrap gap-8 md:mt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {socialLinks.slice(0, 3).map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-teal-600 dark:text-[#009963] ${social.color} transition-colors relative group`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-7 h-7" />
                  <span
                    className="-bottom-8 left-1/2 absolute bg-white dark:bg-gray-900 opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 text-xs whitespace-nowrap transition-opacity -translate-x-1/2 pointer-events-none transform"
                  >
                    {social.label}
                  </span>
                </motion.a>
              ))}
              
            </motion.div>
          </div>

          <div className="gap-6 grid grid-cols-1">
            <FormCard
              Icon={Code}
              title="Modern Frontend Development"
              description="Building dynamic UIs using React, Next.js, TypeScript, Tailwind CSS, and Framer Motion."
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

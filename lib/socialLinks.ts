import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LogoX } from "@/public/LogoX";

export const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/misterdan100",
      label: "GitHub",
      color: "hover:text-gray-700 dark:hover:text-gray-200",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/daniel-caceres-ab8388260/",
      label: "LinkedIn",
      color: "hover:text-gray-700 dark:hover:text-blue-400",
    },
    {
      icon: LogoX,
      href: "https://x.com/_misterdan_",
      label: "X",
      color: "hover:text-gray-700 dark:hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:danielmca60@gmail.com",
      label: "Email",
      color: "hover:text-gray-700 dark:hover:text-violet-400",
    },
    {
      icon: FileText,
      href: "#",
      label: "Resume",
      color: "hover:text-gray-700 dark:hover:text-green-400",
    },
  ];
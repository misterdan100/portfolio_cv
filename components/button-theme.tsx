'use client'
import { motion } from 'motion/react';
import { useTheme } from "@/hooks/useTheme"
import { Sun, Moon } from 'lucide-react';

export default function ButtonTheme() {
    const { theme, toggleTheme } = useTheme()

    if(!theme) return null
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="hover:bg-gray-700/50 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:ring-offset-2 focus:ring-offset-gray-800 text-emerald-600 hover:text-white transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </motion.button>
  )
}
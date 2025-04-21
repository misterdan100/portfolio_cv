/**
 * Technology styles dictionary with Tailwind CSS classes for styling technology buttons
 * Each technology has a custom background color, text color, border color, and hover effect
 */
export const techStyles = {
    "Next.js": "bg-black/20 text-white border-white/20 hover:bg-black/50",
    "React": "bg-cyan-500/20 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/50",
    "TypeScript": "bg-blue-500/20 text-blue-300 border-blue-500/20 hover:bg-blue-500/50",
    "JavaScript": "bg-yellow-500/20 text-yellow-300 border-yellow-500/20 hover:bg-yellow-500/50",
    "Node.js": "bg-green-500/20 text-green-300 border-green-500/20 hover:bg-green-500/50",
    "Express": "bg-gray-500/20 text-gray-300 border-gray-500/20 hover:bg-gray-500/50",
    "MongoDB": "bg-green-600/20 text-green-400 border-green-600/20 hover:bg-green-500/50",
    "PostgreSQL": "bg-blue-600/20 text-blue-400 border-blue-600/20 hover:bg-blue-500/50",
    "MySQL": "bg-orange-500/20 text-orange-300 border-orange-500/20 hover:bg-orange-500/50",
    "Prisma": "bg-blue-500/20 text-blue-300 border-blue-500/20 hover:bg-blue-500/50",
    "TailwindCSS": "bg-cyan-400/20 text-cyan-300 border-cyan-400/20 hover:bg-cyan-500/50",
    "HTML": "bg-orange-600/20 text-orange-400 border-orange-600/20 hover:bg-orange-500/50",
    "CSS": "bg-violet-400/20 text-violet-300 border-violet-400/20 hover:bg-violet-500/50",
    "SASS": "bg-pink-500/20 text-pink-300 border-pink-500/20 hover:bg-pink-500/50",
    "Redux": "bg-purple-500/20 text-purple-300 border-purple-500/20 hover:bg-purple-500/50",
    "Firebase": "bg-yellow-600/20 text-yellow-400 border-yellow-600/20 hover:bg-yellow-500/50",
    "GraphQL": "bg-pink-600/20 text-pink-400 border-pink-600/20 hover:bg-pink-500/50",
    "Docker": "bg-blue-500/20 text-blue-300 border-blue-500/20 hover:bg-blue-500/50",
    "AWS": "bg-orange-500/20 text-orange-300 border-orange-500/20 hover:bg-orange-500/50",
    "CI/CD": "bg-gray-500/20 text-gray-300 border-gray-500/20 hover:bg-gray-500/50",
    "Jest": "bg-red-500/20 text-red-300 border-red-500/20 hover:bg-red-500/50",
    "Testing": "bg-green-500/20 text-green-300 border-green-500/20 hover:bg-green-500/50",
    "Webpack": "bg-blue-500/20 text-blue-300 border-blue-500/20 hover:bg-blue-500/50",
    "Python": "bg-yellow-500/20 text-yellow-300 border-yellow-500/20 hover:bg-yellow-500/50",
    "Django": "bg-green-700/20 text-green-500 border-green-700/20 hover:bg-green-500/50",
    "Flask": "bg-gray-600/20 text-gray-400 border-gray-600/20 hover:bg-gray-500/50",
    "Ruby": "bg-red-600/20 text-red-400 border-red-600/20 hover:bg-red-500/50",
    "Rails": "bg-red-500/20 text-red-300 border-red-500/20 hover:bg-red-500/50",
    "PHP": "bg-purple-600/20 text-purple-400 border-purple-600/20 hover:bg-purple-500/50",
    "Laravel": "bg-red-500/20 text-red-300 border-red-500/20 hover:bg-red-500/50",
    "Vue": "bg-green-500/20 text-green-300 border-green-500/20 hover:bg-green-500/50",
    "Angular": "bg-red-500/20 text-red-300 border-red-500/20 hover:bg-red-500/50",
    "Svelte": "bg-orange-500/20 text-orange-300 border-orange-500/20 hover:bg-orange-500/50",
    "Flutter": "bg-blue-400/20 text-blue-200 border-blue-400/20 hover:bg-blue-500/50",
    "Swift": "bg-orange-500/20 text-orange-300 border-orange-500/20 hover:bg-orange-500/50",
    "Kotlin": "bg-purple-500/20 text-purple-300 border-purple-500/20 hover:bg-purple-500/50",
    "Java": "bg-red-700/20 text-red-500 border-red-700/20 hover:bg-red-500/50",
    "C#": "bg-purple-600/20 text-purple-400 border-purple-600/20 hover:bg-purple-500/50",
    ".NET": "bg-blue-600/20 text-blue-400 border-blue-600/20 hover:bg-blue-500/50",
    "Go": "bg-blue-500/20 text-blue-300 border-blue-500/20 hover:bg-blue-500/50",
    "Rust": "bg-orange-600/20 text-orange-400 border-orange-600/20 hover:bg-orange-500/50",
    "Electron": "bg-blue-400/20 text-blue-200 border-blue-400/20 hover:bg-blue-500/50",
    "Shadcn UI": "bg-gray-700/20 text-gray-300 border-gray-700/20 hover:bg-gray-500/50",
    "Clerk": "bg-blue-500/20 text-blue-300 border-blue-500/20 hover:bg-blue-500/50",
    "Convex": "bg-purple-500/20 text-purple-300 border-purple-500/20 hover:bg-purple-500/50",
    "Stripe": "bg-pink-500/20 text-pink-300 border-pink-500/20 hover:bg-pink-500/50",
    "Vite": "bg-yellow-500/20 text-yellow-300 border-yellow-500/20 hover:bg-yellow-500/50",
};

/**
 * Get Tailwind CSS classes for a specific technology
 * @param technology - The name of the technology (case-insensitive)
 * @returns The corresponding Tailwind CSS classes or default classes if technology not found
 */
export const getTechStyle = (technology: string): string => {
    // Normalize the input by converting to lowercase for comparison
    const normalizedInput = technology.toLowerCase();
    
    // Find the matching technology key (case-insensitive)
    const techKey = Object.keys(techStyles).find(
        key => key.toLowerCase() === normalizedInput
    );
    
    // Return the style for the found key or default style
    return techKey ? techStyles[techKey as keyof typeof techStyles] : "bg-gray-700/20 text-gray-300 border-gray-700/20";
};
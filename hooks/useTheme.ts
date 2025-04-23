import { useCallback, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

export function useTheme() {
    // initialize state, trying localStorage first, then system preferences
    const [theme, setTheme] = useState<Theme>(() => {
        // check if is SSR time
        if(typeof window === 'undefined') {
            return 'light'
        }

        // search for theme in localStorage
        const storedTheme = localStorage.getItem('theme') as Theme | null
        if(storedTheme) {
            return storedTheme
        }

        // check for system preference
        // const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        // if(isDarkMode) {
        //     return 'dark'
        // }

        // default to light theme
        return 'light'
    })

    // Effect to apply the theme class and update localStorage
    useEffect(() => {
        // selet html element
        const root = window.document.documentElement
        // check if theme is dark
        const isDark = theme === 'dark'

        // set dark theme in html element if is dark
        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        // set theme in localStorage
        localStorage.setItem('theme', theme)

    }, [theme])

    // Function to toggle the theme
    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }, [])

    return { theme , toggleTheme }
}
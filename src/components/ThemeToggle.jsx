import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }


    return (
    <button onClick = {toggleTheme} className={cn(
        "fixed right-12 md:right-4 z-50 hover:opacity-60 rounded-full transition-colors p-2 z-50",
        "foucus:outlin-hidden transition-all duration-300",
        isScrolled ? 'md:top-4 top-0.5' : 'md:top-5 top-2'
    )}>
        {isDarkMode ? <Sun className="h-8 w-8 text-yellow-300 "/> : <Moon className="h-8 w-8 text-blue-900" /> } 
    </button>
    )
}
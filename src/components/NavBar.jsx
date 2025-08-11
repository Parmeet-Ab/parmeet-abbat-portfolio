import {cn} from "@/lib/utils";
import { Menu, X, Sun } from "lucide-react";
import {useEffect, useState} from "react";


const navItems = [
    { name: 'Home', href: "#home"},
    { name: 'About', href: "#about"},
    { name: 'Projects', href: "#projects"},
    { name: 'Skills', href: "#skills"},
    { name: 'Contact', href: "#contact"},
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);
    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className={cn("fixed w-full transition-all duration-300 bg-background/50 border-primary/40", 
            isScrolled ? "py-3 bg-background/95 md:bg-primary/40 md:backdrop-blur-md shadow-xs": "py-5",
            isMobileMenuOpen ? "z-60" : "z-40"
        )}>
            <div className = 'container flex items-center justify-between'>
                <a className = "text-xl font-bold text-primary flex items-center" href="#home">
                    <span className = "relative z-10">
                        <span className='text-glow'>Parmeet's</span> Portfolio
                    </span>
                </a>

                {/*Desktop Navigation*/}
                <div className = "hidden md:flex space-x-8 w-full">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground font-bold hover:text-primary transition-colors duration-300">{item.name}</a>
                    ))}
                </div>
            
                {/* Mobile Navigation */}
                <button onClick={()=> setIsMobileMenuOpen((prev)=> !prev)}
                    className = {cn("md:hidden py-4 text-foreground z-60 hover:opacity-50 hover:scale-105 absolute right-5",
                        isMobileMenuOpen ? "right-8" : "right-5",
                    )
                        
                    }
                    aria-label= {isMobileMenuOpen ? "Close menu" : "Open menu"}> 
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24}/>} 
                </button>

                 <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                 )}>
                    <div className = "flex flex-col space-y-17 text-5xl">
                        {navItems.map((item, key, i) => (
                            <a 
                            key={key}
                            i = {i} 
                            href={item.href} 
                            className=" font-semibold text-foreground/80 hover:text-primary hover:scale-105 hover:text-glow transition-colors duration-300"
                            onClick={()=> setIsMobileMenuOpen(false)}>{item.name}</a>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    );
}
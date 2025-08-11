import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const HomeSection = () => {
    const [isScrolled, setIsScrolled] = useState([false]);
        
        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
            
    
        }, []);
    
    return (
        <section id='home' className= "relative min-h-screen flex flex-cols-3 items-center md:justify-start justify-center px-8"> 
            <div className="container max-w-5xl text-center md:text-left z-10 mx-auto">
                <div className ="space-y-6"> 
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        <span className = "opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className = "text-primary opacity-0 animate-fade-in-delay-1 text-glow">Parmeet </span>
                        <span className ="text-gradient ml-2 opacity-0 animate-fade-in-delay-2" >Abbat</span>
                    </h1>
                    <p className = ' max-w-2xl text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3'>Aspiring software engineer driven to craft efficient, user-focused solutions. Skilled in Python, JavaScript, and full-stack development, with a passion for innovation, teamwork, and project managment.</p>

                    <div className = "opacity-0 animate-fade-in-delay-4 pt-4 md:text-xl">
                        <a href="#projects" className = 'button'> View My Work </a>
                    </div>

                </div>
            </div>
            <img src='test.jpg' className = 'mx-auto circle hidden md:block'/>
            <div className = {cn("absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce",
                isScrolled ? 'invisible' : 'flex'
            )}>
                <span className = 'text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowDown className = {cn('h-5 w-5 text-primary',
                    
                )} />
            </div>

        </section>
        
    )
}
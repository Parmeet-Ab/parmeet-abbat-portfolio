import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className = 'py-5 px-4 bg-card relative border-t border-border mt-2 flex flex-wrap justify-between items-center md:mt-2 '>
            {" "}
            <p className = 'text-sm text-muted-foreground'> &copy;{new Date().getFullYear()} ParmeetAbbat, All rights reserved</p>
            <a href='#home' className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
                <ArrowUp />
            </a>
        </footer>
    )
}
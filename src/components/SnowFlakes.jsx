import { SnowflakeIcon, TreePalm, TreePalmIcon } from "lucide-react"
import { useEffect, useState } from "react";

export const SnowFlakes = () => {
    const [snowflakes, setSnowflakes] = useState([]);
    
    useEffect(() => {
        generateSnowflakes();
        const resizeHandler = () => {
            generateSnowflakes();
        }
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
        

    }, []);
    
    const generateSnowflakes = () => {
        const numberOfSnowflakes = Math.floor(window.innerWidth * window.innerHeight / 40000);
        const newSnowflakes = [];

        for (let i = 0; i < numberOfSnowflakes; i++) { 
            
            newSnowflakes.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * window.innerHeight -10,
                size: Math.random() * 6 + 6, 
                animationDuration: Math.random() * 3 + 2
            });
        }
        setSnowflakes(newSnowflakes);
    };
    
    return <div className='fixed'>
        {snowflakes.map((flake) => (
            <SnowflakeIcon key={flake.id} className="snowflake animate-falling relative z-10" style={{
                width: flake.size + 'px',
                height: flake.size + 'px',
                left: flake.x + '%',
                top: flake.y + 'px',
                animationDuration: flake.animationDuration + 's'
            }} />
        ))}
        
    </div>
}
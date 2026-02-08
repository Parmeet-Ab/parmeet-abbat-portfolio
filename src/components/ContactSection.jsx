import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"


export const ContactSection = () => {
    return (
        <section id="contact" className = "py-24 px-4 realtive bg-secondary/30"> 
            <div className = 'container mx-auto max-w-5xl grid grid-cols-1'>

                <div>
                    <h2 className = 'text-3xl md:text-4xl font-bold mb-4 text-center'> Get In <span className = 'text-primary'>Touch</span></h2>
                    <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>I’m always happy to connect, whether it’s to talk about software engineering, collaborate on a project, or just share ideas. If you have a question, an opportunity, or something cool you’re working on, feel free to reach out. I’m looking forward to hearing from you!</p>
                </div>
                <div className = 'space-y-6 justify-center grid grid-rows-3 text-left'>
                            <div className = 'flex items-start space-x-4'>
                                <div className = 'p-3 rounded-full bg-primary/10'>
                                    <Mail className = 'h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className = 'font-medium text-glow'> Email: </h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors' href="mailto:parmeetabbat@gmail.com"> parmeetabbat@gmail.com</a>
                                </div>
                            </div>
                            <div className = 'flex items-start space-x-4'>
                                <div className = 'p-3 rounded-full bg-primary/10'>
                                    <Phone className = 'h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className = 'font-medium text-glow'> Phone </h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors' 
                                    href="tel:+16473890055"> 
                                    +1 (647) 389 0055</a>
                                </div>
                            </div>
                            <div className = 'flex items-start space-x-4'>
                                <div className = 'p-3 rounded-full bg-primary/10'>
                                    <MapPin className = 'h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className = 'font-medium text-glow'> Location </h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'> Toronto, Canada</a>
                                </div>
                            </div>
                        </div>
                        <div className = 'pt-4'> 
                            <h4 className='font-medium mb-4'> Connect With Me</h4>
                            <div className = 'flex space-x-4 justify-center'> 
                                <a href='https://www.linkedin.com/in/parmeet-abbat-5a7a74302/' 
                                target='_blank' 
                                className = 'hover:text-primary transition-colors'>
                                    <Linkedin />
                                </a>
                                <a href='' 
                                target='_blank' 
                                className = 'hover:text-primary transition-colors'>
                                    <Instagram />
                                </a >
                                <a href='https://github.com/Parmeet-Ab' 
                                target='_blank' 
                                className = 'hover:text-primary transition-colors'>
                                    <Github />
                                </a>
                            </div>
                        </div>
                        <img src = '/test3.jpg' className = 'mx-auto circle block md:hidden mt-10 mb' />
            </div>
        </section>
    )
}
import { Briefcase, Cloud, Code, Lightbulb, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I'm an aspiring Software Engineer with a passion for building impactful, user-friendly applications. I’m currently strengthening my skills in JavaScript, Python, and Java, and exploring modern frameworks like React and Spring Boot, along with cloud technologies like AWS.
            </p>

            <p className="text-muted-foreground">
              I love tackling complex problems, whether it’s designing intuitive front-end interfaces or developing efficient back-end systems. Recently, I’ve worked on projects ranging from interactive websites to algorithmic solutions, focusing on clean, maintainable, and scalable code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/AbbatParmeet_Resume.pdf"
                className="px-6 py-2 rounded-full button transition-colors duration-300 hover:scale-105 active:scale-95"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover rounded-2xl ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left bg-p">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & Backend</h4>
                  <p className="text-muted-foreground">
                    Building scalable systems and deploying applications using Spring Boot and AWS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Algorithm Design</h4>
                  <p className="text-muted-foreground">
                     Implementing solutions for problems using data structures and algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
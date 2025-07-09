"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-28 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
           Hi, I'm <span className="text-primary">Junhong 👋🏼</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Founder, software engineer, designer, malware enthusiast</p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {/* Creator of user-centered digital experiences.  */}
            Passionate about solving problems with code.
            <br/>
            Lover of good food, good music, and good conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" onClick={scrollToContact}>
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/junhong-liao" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/junhongliao" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:j.liao@columbia.edu">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { FileText, Github, Linkedin, Mail } from "lucide-react"

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
            Hi, I'm <span className="text-primary">Junhong.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Founder, software sngineer, designer, malware enthusiast</p>
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
            <Button variant="ghost" size="icon">
              <FileText className="h-5 w-5" />
              <span className="sr-only">Resume</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

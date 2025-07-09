"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  const initialContent = (
    <div className="space-y-4">
      <p className="text-lg text-muted-foreground">
        When my mom and I immigrated to the US, our english was... broken.
      </p>
      <p className="text-lg text-muted-foreground">
      At times, trying to get by on broken english felt like an uphill battle we were slowly losing together. But my mom worked tirelessly at the local mart, saving slices of her paycheck to buy me a set of educational CDs so I could have the opportunity to learn english, at just 5 years old.
      </p>
      <br />
    </div>
  )

  const expandedContent = (
    <div className="space-y-4">
      <p className="text-lg text-muted-foreground">
        Every evening, after my mom would return from work, the two of us would sit in the living room of our 1-bed apartment and go through the lessons together. 
      </p>

      <p className="text-lg text-muted-foreground">
        We didn't walk out of the experience with perfect English, but little by litte, the lessons became a foothold in this country for my mom and I. As humbling as it is to admit, I don't think we'd be where we are today without the transformative, lasting impact those CDs had on our lives.
      </p>
      
      <p className="text-lg text-muted-foreground">
        So - at the age of five, I was taught that even in its most humble forms, technology had the potential to bridge huge divides and change lives for the better.
      </p>
      
      <p className="text-lg text-muted-foreground">
        Applying for university, I retained my passion for technology and decided I would study computer science. During my time at Columbia, I've been fortunate to manage a mentorship program of over 50 students and help double the size of our alumni community in the tech industry to over a thousand active members by way of leading a monthly newsletter to hundreds of readers.
      </p>
      
      <p className="text-lg text-muted-foreground">
        I began my career as an within JPMorgan's Investment Bank, and worked within TPG's New York Investment Team the following summer. These roles were an opportunity to get comfortable with deeply collaborative work in high-pressure, fast-paced environments, while deepening my understanding of the capital markets, through working with a spectrum of clients with a diverse and dynamic sets of needs.
      </p>
      
      <p className="text-lg text-muted-foreground">
        While I found these experiences extremely rewarding, I felt an underlying, persistent draw towards tech, a space I felt resonated more deeply with my personal values and early experiences. My initial experiences fueled a lasting passion for technology as a means to genuinely improve people's lives, just like those CDs had improved mine.
      </p>
      
      <p className="text-lg text-muted-foreground">
        This desire to build led me to a HRTech company called UKG, where I worked across the stack to deliver developer tools to 40+ engineering teams. I got the opportunity to work closely with product managers and my engineering manager, and got the chance to own and lead two of my own projects.
      </p>
      
      <p className="text-lg text-muted-foreground">
        As soon as my internship ended, I got to building. I recently published my first chrome extension to the web store, focused on bringing accessibility to the web reading experience for people with ADHD, as someone who's battled ADHD my whole life. As of July 2024, I'm currently working on co-founding a new project with one of my closest friends, that we like to think of as 'Github for creatives'.
      </p>
      
      <p className="text-lg text-muted-foreground">
        Ultimately, when I think back on these experiences and I try to connect the dots, I've realized several things I'd like my career to center around:
      </p>
      
      <ul className="text-lg text-muted-foreground space-y-2 ml-4">
        <li>(1) I'd like my career to be focused on cutting through ambiguity and noise, and identifying the signals that really matter.</li>
        <li>(2) I'd like my career to be focused on being a great leader, no matter what my title says.</li>
        <li>(3) Above all else, I'd like my career to be centered around building products that solve real and meaningful problems for people.</li>
      </ul>
    </div>
  )

  return (
    <section id="about" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="relative">
                {initialContent}
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
                )}
                {!isExpanded && (
                  <div className="relative">
                    <div className="blur-sm opacity-60 pointer-events-none select-none">
                      <div className="space-y-4">
                        <p className="text-lg text-muted-foreground">
                          Every evening, after my mom would return from work, the two of us would sit in the living room of our 1-bed apartment and go through the lessons together.
                        </p>
                        <p className="text-lg text-muted-foreground">
                          We didn't walk out of the experience with perfect English, but little by litte, the lessons became a foothold in this country for my mom and I...
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {isExpanded && expandedContent}
                
                <div className="flex justify-center mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {isExpanded ? (
                      <>
                        Show less <ChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read more <ChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>🎓 BA in Computer Science, Columbia University</li>
                    <li>💻 2+ YOE in software development</li>
                    <li>🍎 Based in New York, NY</li>
                    <li>🍳 Avid home chef and thrifter of all things vintage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

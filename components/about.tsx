"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  const fullText = `I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful designs. When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while reading about the latest industry trends. I believe in continuous learning and staying up-to-date with the evolving tech landscape. My approach to development focuses on creating user-centered experiences that not only look great but also solve real-world problems efficiently.`

  const words = fullText.split(' ')
  const first50Words = words.slice(0, 50).join(' ')
  const remainingText = words.slice(50).join(' ')

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
                <p className="text-lg text-muted-foreground">
                  {first50Words}
                  {!isExpanded && remainingText && (
                    <span className="relative">
                      <span className="text-transparent bg-gradient-to-r from-muted-foreground to-transparent bg-clip-text">
                        {' ' + remainingText.slice(0, 20)}...
                      </span>
                    </span>
                  )}
                  {isExpanded && remainingText && (
                    <span> {remainingText}</span>
                  )}
                </p>
                
                {remainingText && (
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
                )}
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

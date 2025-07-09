"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react"

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = ["/img2.jpg", "/img1.JPG", "/img3.JPG"]
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const initialContent = (
    <div className="space-y-4">
      <p className="text-lg text-muted-foreground">
        When my mom and I immigrated to the US, our english was... broken.
      </p>
      <p className="text-lg text-muted-foreground">
      At times, trying to get by on broken english felt like an uphill battle we were slowly losing together. But my mom worked tirelessly at the local mart, saving slices of her paycheck to buy me a set of educational CDs so I could have the opportunity to learn english, at just 5 years old.
      </p>
      <p className="text-lg text-muted-foreground">
        Every evening, after my mom would return from work, the two of us would sit criss-cross on the living room floor and go through the days' lessons together. 
      </p>
      <br />
    </div>
  )

  const expandedContent = (
    <div className="space-y-4">
      <p className="text-lg text-muted-foreground">
        We didn't walk out of the experience with perfect English, but little by litte, the lessons became a foothold in this country for my mom and I. As humbling as it is to admit, I don't think we'd be where we are today without the transformative, lasting impact those CDs had on our lives.
      </p>
      <p className="text-lg text-muted-foreground">
        So - at the age of five, I was taught that even in its most humble forms, technology had the potential to bridge huge divides and change lives for the better.
      </p>
      <p className="text-lg text-muted-foreground">
      That belief stuck. It carried me to Columbia to study computer science. It shaped my decision to lead a 50+ person mentorship program and help double Columbia's tech alumni network. It lingered even during my time in investment banking and private equity - valuable experiences, but not ones that scratched my itch to create.
      </p>

      <p className="text-lg text-muted-foreground">
      I wanted to build - so I did. At UKG, I led developer tooling projects used by 40+ teams. Then I built a Chrome extension to make web reading easier for people with ADHD - something I've battled with my whole life. Now, I'm working on a project to help construction companies make faster, more efficient estimates. Through all of it, I've realized I care most about 3 things in my career:
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-lg text-muted-foreground">

        <li>One, separating signals that matter from distractions that don't.</li>
        <li>Two, leading well, regardless of title.</li>
        <li>Three, building things that actually help people.</li>
      </ol>
    </div>
  )

  return (
    <section id="about" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="relative w-full max-w-md">
                <img
                  src={images[currentImageIndex]}
                  alt="Profile"
                  className="rounded-lg shadow-lg w-full"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">About Me</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>🎓 Computer Science @ Columbia</li>
                    <li>💻 2+ YOE in software development</li>
                    <li>🍎 Based in New York</li>
                    <li>🍳 Avid home chef, thrifter of all things vintage</li>
                    <li>✍🏼 Pen trick expert (ask me about it)</li>
                  </ul>
                </CardContent>
              </Card>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"

export function About() {
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
              <p className="text-lg text-muted-foreground">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                make a difference. I love turning complex problems into simple, beautiful designs.
              </p>

              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or enjoying a good cup of coffee while reading about the latest industry trends.
              </p>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>🎓 Computer Science Graduate</li>
                    <li>💼 5+ Years Experience</li>
                    <li>🌍 Based in San Francisco, CA</li>
                    <li>☕ Coffee Enthusiast</li>
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Shield } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: ["React.js", "Next.js", "HTML5", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Python", "Java", "Spring Boot", "FastAPI", "Django", "OpenAI"],
    },
    {
      title: "Design",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma", "UI/UX Design", "Lucidchart", "Prototyping", "Wireframing"],
    },
    {
      title: "Security & Tools",
      icon: <Shield className="h-6 w-6" />,
      skills: ["FlareVM", "IDA Pro", "Wireshark", "AWS", "GCP", "Docker", "Kubernetes"],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">{category.icon}</div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookOpen, Users, DollarSign, Award } from 'lucide-react'

const features = [
  {
    title: "Diverse Course Library",
    description: "Access a wide range of courses across various subjects.",
    icon: BookOpen
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals and experienced educators.",
    icon: Users
  },
  {
    title: "Sell Your Expertise",
    description: "Create and sell your own courses on our platform.",
    icon: DollarSign
  },
  {
    title: "Certifications",
    description: "Earn certificates to showcase your new skills.",
    icon: Award
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Coursify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


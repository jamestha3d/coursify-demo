// import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const courses = [
  { title: "Web Development Bootcamp", instructor: "Jane Doe", image: "/placeholder.svg?height=200&width=300" },
  { title: "Data Science Fundamentals", instructor: "John Smith", image: "/placeholder.svg?height=200&width=300" },
  { title: "Digital Marketing Mastery", instructor: "Alice Johnson", image: "/placeholder.svg?height=200&width=300" }
]

export default function CourseShowcase() {
  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index}>
              <img src={course.image} alt={course.title} width={300} height={200} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardContent>
                  <p className="text-gray-600">Instructor: {course.instructor}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


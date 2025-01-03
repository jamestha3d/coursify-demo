import React from 'react';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, DollarSign, Calendar, Rocket } from 'lucide-react';
import { toast } from 'react-toastify'
import Header from '../components/Layout/header';


export default function LandingPage() {
  const [email, setEmail] = useState('')
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        const response = await fetch('https://simpliclass.onrender.com/api/v1/user/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email})
        })
        console.log('submitted')
        if (!response.ok) {
          // Toastify Error
          console.log('some error')
          const errorData = await response.json()
  
          toast.error(errorData.message) 
          return
        }
      console.log('Email submitted:', email)
      toast.success("You've been added to our early access list."
      )
      setEmail('')
    }catch (error) {
      // Toastify error
      console.log('some error occured')
      toast.error(error.message)
    }
    }
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Learn, Teach, and Grow with <span className="text-purple-600">Coursify</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The all-in-one platform for creating, selling, and managing online courses. Empower your knowledge and monetize your skills.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Button size="lg" asChild>
            <a href="#coming-soon" className="scroll-smooth">Get Started</a>
          </Button>
            
            {/* <Button size="lg" variant="outline" className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto">Learn More</Button> */}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Why Choose Coursify?</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Buy Courses", icon: BookOpen, description: "Access a wide range of high-quality courses" },
              { title: "Create Courses", icon: Users, description: "Easily create and publish your own courses" },
              { title: "Sell Courses", icon: DollarSign, description: "Monetize your knowledge and skills" },
              { title: "Manage Meetings", icon: Calendar, description: "Schedule and manage live sessions effortlessly" },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="coming-soon" className="py-20 bg-white-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
            <p className="text-xl mb-8">Be the first to know when we launch. Sign up for early access!</p>
            <form  onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full md:w-64"
                
              />
              <Button type="submit">Get Early Access</Button>
            </form>
          </div>
        </section>


        
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">© {new Date().getFullYear()} Coursify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
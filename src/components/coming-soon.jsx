'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export default function ComingSoon() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    toast({
      title: "Success!",
      description: "You've been added to our early access list.",
    })
    setEmail('')
  }

  return (
    <section id="coming-soon" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
        <p className="text-xl mb-8">Be the first to know when we launch. Sign up for early access!</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4">
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
  )
}


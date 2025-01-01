'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { toast } from "@/hooks/use-toast"
import { toast } from 'react-toastify'
export default function ComingSoon() {
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


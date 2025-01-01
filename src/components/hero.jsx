import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Coursify</h1>
        <p className="text-xl md:text-2xl mb-8">Learn, Teach, and Sell Courses with Ease</p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </div>
    </section>
  )
}


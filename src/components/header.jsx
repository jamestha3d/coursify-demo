import Link from "./Link";
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          <div style={{display: 'flex', alignContent: 'center'}}>
          {/* <img src='src/assets/Coursify.png' alt='logo' style={{ width: '100px', height: 'auto' }}/> */}
          <span>Coursify</span>
          </div>
          
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="#courses" className="text-gray-600 hover:text-gray-900">Courses</Link>
          <Link href="#coming-soon" className="text-gray-600 hover:text-gray-900">Get Early Access</Link>
        </nav>
        <Button asChild>
          <a href="#coming-soon" className="scroll-smooth">Sign Up</a>
        </Button>
      </div>
    </header>
  )
}


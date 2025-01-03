import React from 'react'
import { BookOpen} from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation()
  return (
    <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600 mr-2" />
            <Link to="/" className="text-2xl font-bold text-gray-900">Coursify</Link>
            </div>
            <div>
            {/* {location.pathname != '/login' && }
            {location.pathname != '/signup' && } */}
            <Button variant="ghost" className="mr-2" asChild>
                <Link to="/login" >Log In</Link>
            </Button>
            <Button asChild>
                    <Link to="/signup" >Sign Up</Link>
                </Button>
            
            
            </div>
        </nav>
    </header>
  )
}

export default Header




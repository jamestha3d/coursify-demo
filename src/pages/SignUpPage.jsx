import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <BookOpen className="mx-auto h-12 w-12 text-purple-600" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
            sign in to your existing account
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Enter your details to create an account</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" type="text" required />
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" autoComplete="new-password" required />
              </div>
              <div>
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input id="password_confirmation" name="password_confirmation" type="password" required />
              </div>
              <div>
                <Button type="submit" className="w-full">Sign Up</Button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-gray-600">
              By signing up, you agree to our{' '}
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Privacy Policy
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
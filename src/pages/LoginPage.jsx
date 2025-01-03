import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../utils/axios';
import useInput from '../hooks/useInput';
import useToggle from '../hooks/useToggle';


const LOGIN_URL = '/user/login'

export default function LoginPage() {
  const {setAuth} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/dashboard"

  const userRef = useRef()
  const errRef = useRef();

  const [user, resetUser, userAttribs] = useInput('user', '')
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('error occured');
  const [check, toggleCheck] = useToggle('persist', false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({ email: user, password: pwd }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({ user, pwd, roles, accessToken });
        resetUser();
        setPwd('');
        navigate(from, { replace: true });
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }
        errRef.current.focus();
    }
    // navigate('/dashboard')
      }
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <BookOpen className="mx-auto h-12 w-12 text-purple-600" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>

            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleLogin}className="space-y-6" action="#" method="POST">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" name="email" type="email" autoComplete="off" ref={userRef} {...userAttribs}required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" autoComplete="current-password" onChange={(e) => setPwd(e.target.value)}
                    value={pwd} required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    onChange={toggleCheck}
                    checked={check}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <Button type="submit" className="w-full">Sign In</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
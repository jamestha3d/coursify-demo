import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../utils/axios";
import useAuth from '../hooks/useAuth';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/user/signup';

export default function SignUpPage() {

  const {setAuth} = useAuth()
  const navigate = useNavigate()
  const userRef = useRef();
  const errRef = useRef();
  const nameRef = useRef();
  
  const [name, setName] = useState('');
  const [nameFocus, setNameFocus] = useState('')

  const [email, setEmail] = useState('');
  const [validName, setValidName] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, [])

  useEffect(() => {
      setValidName(true);
  }, [email])

  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
      setErrMsg('');
  }, [pwd, matchPwd])

  const handleSignup = async (e) => {
    e.preventDefault()
    // if button enabled with JS hack
    // const v1 = USER_REGEX.test(user);
    const v1 = true
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }

    try {
      const response = await axios.post(REGISTER_URL,
          JSON.stringify({ email, password: pwd, firstName: name, lastName: name }),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      setAuth({ email, pwd, roles, accessToken });
      //clear state and controlled inputs
      setEmail('');
      setPwd('');
      setMatchPwd('');
      navigate("/dashboard")
    } catch (err) {
        console.log(err.message)
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 409) {
            setErrMsg('Username Taken');
        } else {
            setErrMsg('Registration Failed')
        }
        errRef.current.focus();
    }
    
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <BookOpen className="mx-auto h-12 w-12 text-purple-600" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Enter your details to create an account</CardDescription>
          </CardHeader>
          <CardContent>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSignup} className="space-y-6" action="#" method="POST">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" ref={nameRef} onChange={(e) => setName(e.target.value)} value={name} autoComplete="off" name="name" type="text" required 
                onFocus={() => setNameFocus(true)} onBlur={() => setNameFocus(false)}/>
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email}name="email" type="email" autoComplete="email" required
                onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)}/>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" onChange={(e)=> setPwd(e.target.value)} value={pwd} 
                aria-invalid={validPwd ? "false": "true"} aria-describedby="pwdnote" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)}required />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
              </div>
              <div>
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input id="password_confirmation" name="password_confirmation" onChange={(e) => setMatchPwd(e.target.value)} type="password" required 
                  aria-invalid={validMatch ? "false" : "true"} aria-describedby="confirmnote" onFocus={() => setMatchFocus(true)} onBlur={() => setMatchFocus(false)}/>
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                </p>

              </div>
              <div>
                <Button disabled={!validPwd || !validMatch ? true : false} type="submit" className="w-full">Sign Up</Button>
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
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './pages/DashboardLayout';
import Home from './pages/Home';
import Header from './components/Layout/header';
import Footer from './components/Layout/Footer';

const PublicLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);


function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "signup",
          element: <SignUpPage />
        },
        {
          path: "login",
          element: <LoginPage />
        }
      ]
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: "home",
          element: <Home />
        }
      ]
    }
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    
    </>
  )
}

export default App

import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import CourseShowcase from '../components/course-showcase'
import ComingSoon from '../components/coming-soon'
import Footer from '../components/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <CourseShowcase />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  )
}


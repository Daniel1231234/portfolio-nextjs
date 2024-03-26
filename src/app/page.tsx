import About from "@/components/About"
import AppHeader from "@/components/AppHeader"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Home from "@/components/Home"
import Nav from "@/components/Nav"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function App() {
  return (
    <div className="relative z-0">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <AppHeader />
        <Home />
      </div>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

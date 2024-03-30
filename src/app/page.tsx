import About from "@/components/About"
import AppHeader from "@/components/AppHeader"
import Contact from "@/components/Contact"
import Home from "@/components/Home"
import Nav from "@/components/Nav"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function App() {
  return (
    <>
      <div className="bg-hero bg-cover bg-no-repeat bg-center">
        <AppHeader />
        <Home />
      </div>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

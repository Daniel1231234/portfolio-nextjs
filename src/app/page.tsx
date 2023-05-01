import About from "@/cmps/About";
import AppHeader from "@/cmps/AppHeader";
import Contact from "@/cmps/Contact";
import Footer from "@/cmps/Footer";
import Home from "@/cmps/Home";
import Nav from "@/cmps/Nav";
import Projects from "@/cmps/Projects";
import Skills from "@/cmps/Skills";

export default function HomePage() {
  return (
    <>
    <AppHeader />
      <Home />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

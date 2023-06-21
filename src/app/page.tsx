import About from "@/cmps/About";
import AppHeader from "@/cmps/AppHeader";
import Contact from "@/cmps/Contact";
import Footer from "@/cmps/Footer";
import Home from "@/cmps/Home";
import Nav from "@/cmps/Nav";
import Projects from "@/cmps/Projects";
import Skills from "@/cmps/Skills";

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
  );
}

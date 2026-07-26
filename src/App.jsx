import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
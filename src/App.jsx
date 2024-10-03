import './App.css';
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer';
import About from './sections/About/About';

function App() {
  return (
  <>
     <Hero/>
     <About/>
     <Projects/>
     <Skills />
     <Contact/>
     <Footer/>
  </>
  );
}

export default App;

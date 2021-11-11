import './App.css';
import { useEffect } from 'react';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;

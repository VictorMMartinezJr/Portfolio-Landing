import './App.css';
import { useEffect } from 'react';
import Main from './components/Pages/Main/Main';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import StreamVic from './components/SingleProjects/StreamVic';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/aboutme'>
            <AboutMe />
            {/* <Skills /> */}
          </Route>
          <Route exact path='/aboutme'>
            <Projects />
          </Route>
          <ContactMe />
          <Route exact path='/streamvic'>
            <StreamVic />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

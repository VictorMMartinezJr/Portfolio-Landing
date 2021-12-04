import './App.css';
import { useEffect } from 'react';
import Main from './components/Pages/Main/Main';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ContactMe from './components/ContactMe/ContactMe';
import StreamVic from './components/SingleProjects/StreamVic';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/Pages/Projects/Projects';

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
          <Route path='/aboutme'>
            <AboutMe />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/streamvic'>
            <StreamVic />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

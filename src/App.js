import './App.css';
import { useEffect } from 'react';
import Main from './components/Pages/Main/Main';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StreamVic from './components/SingleProjects/StreamVic';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/Pages/Projects/Projects';
import AnimeShoppe from './components/SingleProjects/AnimeShoppe';
import VisitIceland from './components/SingleProjects/VisitIceland';
import TheCrown from './components/SingleProjects/TheCrown';
import Footer from './components/Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>VictorMtzCodes</title>
          <meta name='description' content='Front end web developer Victor Martinez Jr' />
          <meta name='keywords' content='Front end web developer, Victor Martinez Jr, VictorMtzCodes, Victor Mtz Codes' />
        </Helmet>

        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Main />
              <AboutMe />
              <AboutMe />
              <Projects />
            </Route>
            <Route path='/streamvic'>
              <StreamVic />
            </Route>
            <Route path='/animeshoppe'>
              <AnimeShoppe />
            </Route>
            <Route path='/visiticeland'>
              <VisitIceland />
            </Route>
            <Route path='/thecrown'>
              <TheCrown />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;

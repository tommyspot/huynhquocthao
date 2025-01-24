import { useState, useEffect } from 'react';
import { enquireScreen } from 'enquire-js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from '~/components/NavBar';
import Footer from '~/components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './global.less';

let isMobileScreen;
enquireScreen((b) => {
  isMobileScreen = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

function App() {
  const [ isMobile, setIsMobile ] = useState(isMobileScreen);
  const [ show, setShow ] = useState(!location.port);

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
    if (location.port) {
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
  }, []);

  return (
    <Router>
      {show && (
        <>
          <NavBar
            id="Nav3_0"
            key="Nav3_0"
            isMobile={isMobile}
          />
          <Switch>
            <Route path="/" exact>
              <Home isMobile={isMobile} />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            {/* <Route path="/failure" exact>
              <Failure />
            </Route> */}
          </Switch>
          <Footer
            id="Footer2_0"
            key="Footer2_0"
            isMobile={isMobile}
          />
        </>
      )}
    </Router>
  );
}

export default App;

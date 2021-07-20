import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

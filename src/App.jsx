import React, { useState, useEffect } from 'react';
import { enquireScreen } from 'enquire-js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Nav3 from './Home/Nav3';
import Footer2 from './Home/Footer2';
import { Nav30DataSource, Footer20DataSource } from './Home/data.source';
import './App.css';

let isMobileScreen;
enquireScreen((b) => {
  isMobileScreen = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

function App() {
  const [ isMobile, setIsMobile ] = useState(isMobileScreen);
  const [ show, setShow ] = useState(!location.port);

  useEffect(() => {
    // 适配手机屏幕;
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }, []);

  return (
    <Router>
      {show && (
        <>
          <Nav3
            id="Nav3_0"
            key="Nav3_0"
            dataSource={Nav30DataSource}
            isMobile={isMobile}
          />
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
          <Footer2
            id="Footer2_0"
            key="Footer2_0"
            dataSource={Footer20DataSource}
            isMobile={isMobile}
          />
        </>
      )}
    </Router>
  );
}

export default App;

import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux';

import App from './App';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = ({ match }) => (
  <div>
    <h2>About</h2>
    <h3>{match.params.test}</h3>
  </div>
);

const RouterComp = () => (
  <Provider store={store}>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about/:test" component={About} />
      <Route path="/topics" component={App} />
    </div>
  </Router>
  </Provider>
);

export default RouterComp;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Homepage from './homepage/Homepage';
import About from './about/About';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

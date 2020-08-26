import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Homepage from './homepage/Homepage.lazy';
import About from './about/About.lazy';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

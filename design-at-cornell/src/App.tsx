import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage.lazy';
import ExploreCourses from './explore-courses/ExploreCourses.lazy';
import AreasOfStudy from './areas-of-study/AreasOfStudy.lazy';
import About from './about/About.lazy';
import Contact from './contact/Contact.lazy';
import PageNotFound from './404/PageNotFound.lazy';
import Header from './header/Header.lazy';
import Footer from './footer/Footer.lazy';

function App() {
  return (
    <Router>
      <div data-testid="App">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/explore-courses" component={ExploreCourses} />
          <Route path="/areas-of-study" component={AreasOfStudy} />
          <Route exact path="/" component={Homepage} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

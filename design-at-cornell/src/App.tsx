import React from 'react';
import './AppStyles.ts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage.lazy';
import ExploreCourses from './explore-courses/ExploreCourses.lazy';
import Events from './events/Events.lazy';
import AreasOfStudy from './areas-of-study/AreasOfStudy.lazy';
import Clubs from './clubs/Clubs.lazy';
import DesignCommunity from './design-community/DesignCommunity.lazy';
import Articles from './design-community/design-articles/articles-page/ArticlesPage.lazy';
import Faculty from './design-community/design-faculty/faculty-page/FacultyPage.lazy';
import About from './about/About.lazy';
import Contact from './contact/Contact.lazy';
import PageNotFound from './404/PageNotFound.lazy';
import Header from './header/Header.lazy';
import Footer from './footer/Footer.lazy';
import { GlobalStyle } from './AppStyles';
import { GlobalContextProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <GlobalStyle />
        <div data-testid="App">
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/explore-courses" component={ExploreCourses} />
            <Route path="/events" component={Events} />
            <Route path="/areas-of-study" component={AreasOfStudy} />
            <Route path="/student-organizations" component={Clubs} />
            <Route path="/design-community" component={DesignCommunity} />
            <Route path="/articles" component={Articles} />
            <Route path="/faculty" component={Faculty} />
            <Route exact path="/" component={Homepage} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;

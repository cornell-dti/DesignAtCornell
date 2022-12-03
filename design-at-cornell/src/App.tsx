import React from 'react';
import './AppStyles.ts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage.lazy';
import ExploreCourses from './explore-courses/ExploreCourses.lazy';
import Events from './events/Events.lazy';
import AreasOfStudy from './areas-of-study/AreasOfStudy.lazy';
import Clubs from './clubs/Clubs.lazy';
import Articles from './articles/Articles';
import Faculty from './design-community/design-faculty/faculty-page/FacultyPage.lazy';
// import About from './about/About.lazy';
// import Contact from './contact/Contact.lazy';
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
            {/* <Route path="/about" component={About} /> */}
            {/* <Route path="/contact" component={Contact} /> */}
            <Route path="/courses" component={ExploreCourses} />
            <Route path="/areas-of-study" component={AreasOfStudy} />
            <Route path="/student-orgs" component={Clubs} />
            <Route path="/events" component={Events} />
            {/* <Route path="/design-community" component={DesignCommunity} /> */}
            <Route path="/faculty" component={Faculty} />
            <Route path="/articles" component={Articles} />
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

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './homepage/Homepage.lazy';
import About from './about/About.lazy';
import SideNav from './side-nav/SideNav.lazy';
import Contact from './contact/Contact.lazy';
import { SidebarPushable, Segment, SidebarPusher } from 'semantic-ui-react';
import SiteHeader from './site-header/SiteHeader.lazy';

function App() {
  return (
    <div className="App">
      <Router>
        <SidebarPushable as={Segment} style={{ overflow: 'hidden' }}>
          <SideNav />
          <SidebarPusher>
            <div className="header" style={{ height: '10vh' }}>
              <SiteHeader />
            </div>
            <div className="header" style={{ minHeight: '90vh' }}>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Homepage} />
              </Switch>

            </div>
          </SidebarPusher>
        </SidebarPushable>
      </Router>
    </div>
  );
}

export default App;
import React from 'react';
import './App.styled.js';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Menu from './components/Menu';
import Merchandise from './components/Merchandise';
import SuggestionsComments from './components/SuggestionsComments';
import Updates from './components/Updates';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Banner, Heading, NavBar} from './App.styled';

export default function App() {
  return (
    <div style={{backgroundColor: '#09243C'}} >
      <Router>
        <Banner> 
          <Heading> Burek at Pece's </Heading> 
        </Banner>
        <NavBar>
          <ul>
            <li>
              <Link to='/'>Home Page</Link>
            </li>
            <li>
              <Link to='/AboutUs'>About Us</Link>
            </li>
            <li>
              <Link to='/Menu'>Menu</Link>
            </li>
            <li>
              <Link to='/Merchandise'>Merchandise</Link>
            </li>
            <li>
              <Link to='/SuggestionsComments'>Feedback/Suggestions</Link>
            </li>
            <li>
              <Link to='/Updates'>Latest News</Link>
            </li>
            <li>
              <Link to='/ContactUs'>Contact Us</Link>
            </li>
          </ul>
          <hr></hr>
        </NavBar>
        <Switch>
          <Route path='/AboutUs'>
            <AboutUs />
          </Route>
          <Route path='/Menu'>
            <Menu />
          </Route>
          <Route path='/Merchandise'>
            <Merchandise />
          </Route>
          <Route path='/SuggestionsComments'>
            <SuggestionsComments />
          </Route>
          <Route path='/Updates'>
            <Updates />
          </Route>
          <Route path='/ContactUs'>
            <ContactUs />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        </Router>
      
    </div>
  );
}
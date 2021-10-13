import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Navigation from './Navbar/Navigation';
import Interests from './components/Interests';
import Blog from './components/Blog';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';








function App() {
  return (

    <Router>
      <Navigation />
      <Homepage />
      <h4 className="services">Services</h4>

      <Service />
      <Grid item lg={12} sm={12} xs={12}>
        <h4 className="hobbies">Portfolio</h4>
        <Portfolio />
        <h4 className="hobbies">My Interests</h4>
        <Interests />
        {/* <h4 className="hobbies">Blog</h4> */}
        {/* <Blog /> */}
      </Grid>
      <Footer />
    </Router>




  );
}

export default App;

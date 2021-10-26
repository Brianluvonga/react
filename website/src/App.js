import React from 'react';
import Navigation from './Navigation';
import './components/Navbar.css'
import './App.css';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Interests from './components/Interests';
import ContactPage from './pages/ContactPage';
import Portfolio from './pages/Portfolio';
import FutureInterests from './pages/FutureInterests';
import Projects from './pages/Projects';




function App() {
  return (

    <div>
      <Navigation />
      <Homepage />

      {/* <h4 className="services">Services</h4> */}
      <br />

      <Divider />
      <br />
      <Projects />
      <br />

      <Divider />

      <FutureInterests />

      <br />
      <Divider />

      <ContactPage />


      <Footer />
    </div>

    // <Router>
    //   <Navigation />
    //   <Homepage />
    //   <h4 className="services">Services</h4>

    //   <Service />
    //   <Grid item lg={12} sm={12} xs={12}>
    //     <h4 className="hobbies">Portfolio</h4>
    //     <Portfolio />
    //     <Interests />
    //     {/* <h4 className="hobbies">Blog</h4> */}
    //     {/* <Blog /> */}
    //   </Grid>
    //   <Footer />
    // </Router>


  );
}

export default App;

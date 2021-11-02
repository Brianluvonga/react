import React from 'react';
import Navigation from './Navigation';
import './components/Navbar.css'
import './App.css';
import Divider from "@material-ui/core/Divider";
import Homepage from './pages/Homepage';
import Footer from './Footer';
import ContactPage from './pages/ContactPage';
import FutureInterests from './pages/FutureInterests';
import Projects from './pages/Projects';
import Skills from './pages/Skills';



function App() {
  return (

    <div>
      <Navigation />
      <Homepage />
      <br />

      <Divider />
      <br />
      <Skills />
      <br />

      <Divider />

      <Projects />
      <br />

      <Divider />

      <FutureInterests />

      <br />
      <Divider />
      <ContactPage />


      <Footer />
    </div>
  );
}

export default App;

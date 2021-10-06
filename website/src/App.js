import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavigationBar from './NavigationBar';

import Homepage from './Homepage';
import About from './About';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />

      <Container>
        <main>
          <Homepage />
          <About />
        </main>
      </Container>
      <Footer />

    </div>
  );
}

export default App;

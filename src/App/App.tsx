import React from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import {AppDiv} from './style';


const App: React.FC = () => {
  return (
    <AppDiv>
      <Navbar />
      <Header />
      <About/>
      {/*  <Projects></Projects>*/}
      <Footer />
    </AppDiv>
  );
}

export default App;
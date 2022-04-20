import React from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <About></About>
       <Projects></Projects>
       <Footer></Footer>  */}
    </div>
  );
}

export default App;
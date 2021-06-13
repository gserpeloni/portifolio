import React from 'react';
import Banner from '../components/Banner';
import Body from '../components/Projects';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QuemSouEu from '../components/QuemSouEu';
import About from '../components/About';
import './App.css';
import Social from '../components/Social';

 const App: React.FC = () => {
  return (
    <div className="App">
       <Header></Header>
       <Banner></Banner>
       <QuemSouEu></QuemSouEu>
       <Social></Social>
       <About></About>
       <Body></Body>
       <Footer></Footer>
    </div>
  );
}

export default App;
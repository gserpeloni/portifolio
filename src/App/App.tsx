import React from 'react';
import Body from '../components/Projects';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QuemSouEu from '../components/QuemSouEu';
import About from '../components/About';
import './App.css';

 const App: React.FC = () => {
  return (
    <div className="App">
       <Header></Header>
       <QuemSouEu></QuemSouEu>
       <About></About>
       <Body></Body>
       <Footer></Footer>
    </div>
  );
}

export default App;
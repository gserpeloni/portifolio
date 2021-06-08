import React from 'react';
import Banner from '../components/Banner';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QuemSouEu from '../components/QuemSouEu';
import './App.css';

 const App: React.FC = () => {
  return (
    <div className="App">
       <Header></Header>
       <Banner></Banner>
       <QuemSouEu></QuemSouEu>
       <Body></Body>
       <Footer></Footer>
    </div>
  );
}

export default App;
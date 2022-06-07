import React from 'react';
import './App.css';
import Header from './components/Header';
import FeelMusic from './components/FeelMusic';
import Discover from './components/Discover';
import Join from './components/Join';
import Circle from './components/Circle';
import Footer from './components/Footer';
import "@fontsource/poppins";

function App() {
  return (
      <main>
          <Header/>
          <FeelMusic/>
          <Circle/>
          <Discover/>
          <Join/>
          <Footer/>
      </main>
  );
}

export default App;

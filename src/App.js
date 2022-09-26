import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
   <>
    <Header/>
    <Navbar/> 
    <img src={require('./Images/bodyBg.9ce722a3.jpg').default} alt=""/>
   </>
  );
}

export default App;

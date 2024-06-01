import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
 import Works from './components/Works'

function App() {
 
 
 
  return (
   <div className='App '>
    <Navbar></Navbar>
    <Header ></Header>
    <div className="h-[40px] m-4 bg-navlight rounded-md"></div>
     <Works name="My Photos:-"></Works>
     <Works name="My Works:-"></Works>
   </div >
  );
}

export default App;

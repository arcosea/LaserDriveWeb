

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, NavLink} from "react-router-dom";
import Navbar from './NavBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Implementation } from './pages/Implementation';

function App() {
  return (  
  <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/implementation" element={<Implementation />} />

      </Routes>
    </div>
  </>
  );

}

export default App;

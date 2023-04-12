

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, NavLink} from "react-router-dom";
import Navbar from './NavBar';
import Footer from './Footer';
import { About } from './pages/About';
import { Implementation } from './pages/Implementation';
import { ROS } from './pages/ros';
import { AEB } from './pages/aeb';


function App() {
  return (  
  <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/implementation" element={<Implementation />} />
        <Route path="/implementation/ros" element={<ROS />} />
        <Route path="/implementation/aeb" element={<AEB />} />
      </Routes>
    </div>
    <Footer />
  </>
  );

}

export default App;

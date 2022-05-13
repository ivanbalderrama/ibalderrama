import React from 'react'
import Home from './Home'
import Dtav from './Components/Dtav/Dtav'
import OGDetail from './Components/OGDetail/OGDetail'
import OneCountry from './Components/OneCountry/OneCountry'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
 
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dtav" element={<Dtav/>}/>
      <Route path="/ogdetail" element={<OGDetail/>}/>
      <Route path="/oneCountry" element={<OneCountry/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;

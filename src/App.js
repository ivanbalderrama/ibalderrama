import React from 'react'
import Home from './Home'
import Dtav from './Components/Dtav/Dtav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
 
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dtav" element={<Dtav/>}/>
    </Routes>
  </BrowserRouter>);
  </div>
  );
}

export default App;

import React from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import ScrollButton from './ScrollButton'
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
      <Main/>
      </main>
      <ScrollButton/>
    </div>
  );
}

export default App;

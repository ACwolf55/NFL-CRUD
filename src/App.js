import React from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Display from './components/Display'



function App() {
  return (
    <div className="App">
      <Header />
      <Display />
    </div>
  );
}

export default App;

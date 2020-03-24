import React from 'react';
import logo from './logo.svg';
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Footer } from './Footer';

const homepage = {title: 'Homepage'}

const App = () => (
  <div className="App">
    <h1>{homepage.title}</h1>
    <Footer copyright='C'/>
  </div>
)

export default App;

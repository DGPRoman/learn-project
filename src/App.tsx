import React, { useState } from 'react';
import './App.css';
import { Footer } from './page-parts/Footer';
import { Header } from './page-parts/Header';
import { Counter } from './page-parts/Counter'

const App = () => {
  const [state, setState] = useState({isAdmin: false, userName: 'Roman'})
  const { isAdmin } = state
  const assignAdmin = () => {
    setState({...state, isAdmin: true})
  }
  
  return (
    <>
    <Header/>
    <h1>Hello {isAdmin ? 'admin' : 'user'} </h1>
    <button onClick={assignAdmin}>Become admin</button>
    <br />
    <Counter/>
    <Footer copyright='C'/>
    </>
  )
}


export default App;

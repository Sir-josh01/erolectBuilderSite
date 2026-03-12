import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './pages/Portfolio';

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
  
    </>
  )
}

export default App

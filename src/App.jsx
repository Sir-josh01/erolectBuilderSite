import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css'


function App() {
  

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </div>
  
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './components/About component/About'
import './App.css'
import Navbar from './components/Navbarcomponent/Navbar'
import Footer from './components/Footercomponent/Footer'
function App() {
  const count = 4;
  let age=30;
 return(
  <>
  <Navbar count='5' age="30"/>
  <About/>
  <Footer/>
  </>
 );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'

function App() {

  return (
    <>
    <div className='h-screen bg-slate-400'>
      <Header/>
      <Navbar/>
    </div>
    </>
  )
}

export default App

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <>    
    <Home/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App

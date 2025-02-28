import React from 'react'
import Manage from './components/Manage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/landingpage/LandingPage'
import Registration from './components/landingpage/Registeration'
import Login from './components/landingpage/Login'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/todos' element={<Manage />}></Route>
      </Routes>
    </>
  )
}

export default App

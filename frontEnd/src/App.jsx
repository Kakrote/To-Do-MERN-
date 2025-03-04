import React from 'react'
import Manage from './components/Manage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/landingpage/LandingPage'
import Registration from './components/landingpage/Registeration'
import Login from './components/landingpage/Login'
import Navbar from './components/Navbar'
function App() {

  return (
  <div className='min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/todos' element={<Manage />}></Route>
      </Routes>
  </div>
  )
}

export default App

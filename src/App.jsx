import { useState } from 'react'
import Homepage from './pages/HOme.jsx'
import Aboutpage from './pages/About.jsx'
import Contactpage from './pages/Contact.jsx'
import { Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar.jsx'
import Userpage from './pages/User.jsx'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Homepage/> }/>
      <Route path='/about' element={<Aboutpage/> }/>
      <Route path='/contact' element={<Contactpage/> }/>
      <Route path='/contact' element={<Contactpage/> }/>
      <Route path='/User/:name' element={<Userpage/> }/>
      <Route path='*' element={<p>incrooct path</p> }/>
    </Routes>
    </>
    
  )
}
export default App

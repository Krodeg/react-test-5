import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Facilities from './facilities'
import Rooms from './rooms'
import Contact from './contact'
import Navbar from './navbar'
import Booking from './booking'

function RouterComponent() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/facilities' element={<Facilities/>} />
            <Route path='/rooms' element={<Rooms/>} />
            <Route path='/contact-us' element={<Contact/>} />
            <Route path='/booking' element={<Booking/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent

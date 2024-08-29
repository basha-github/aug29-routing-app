import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Sample from './components/Sample'
import Home from './components/Home'
import Catalog from './components/Catalog'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Login />}/>
  <Route path="/home" element={<Home />}/>
  <Route path="/cat" element={<Catalog />}/>
  <Route path="/cont" element={<Contact />}/>
  <Route path="/abt" element={<AboutUs />}/>
  
  
</Routes>
</BrowserRouter>



    </div>
  )
}

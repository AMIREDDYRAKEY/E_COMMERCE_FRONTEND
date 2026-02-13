import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Mobile view/Users'
import Cart from './pages/Mobile view/Cart'
import Menu from './pages/Mobile view/Menu'
import Register from './pages/Mobile view/Register'
import Login from './pages/Mobile view/Login'
import Notifications from './pages/Mobile view/Notifications'
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
         <Route path="/User register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/notifications" element={<Notifications />} />
         <Route path="/Buyorders" element={<Buyorders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

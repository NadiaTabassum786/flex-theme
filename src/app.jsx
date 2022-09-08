import React from 'react'
import Navbar from './components/nabvar'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
import Servises from './pages/servises'
import Team from './pages/team'
import Client from './pages/client'
// import Contact from './pages/contact'
// import {Route,Routes} from 'react-router-dom'
// import {Link} from "react-router-dom"
export default function App() {
  return (
     <>
     <Navbar/>
     <Home/>
     <Products/>
     <Servises/>
     <About/>
     <Team/>
     <Client/>
     {/* <Home/>
     <Home/> */}
 
     </>
  )
}

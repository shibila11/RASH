import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import About from './Pages/About'
import Admin from './Pages/Admin'
import Signup from './Pages/Signup'
import Footer from './Components/Footer'
import Login from './Pages/Login'


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/Collections'  element={<Collections/>}/>
        <Route path='/About'  element={<About/>}/>
        <Route path='/Signup'  element={<Signup/>}/>
        <Route path='/Admin'  element={<Admin/>}/>
        <Route path='/Login'  element={<Login/>}/>
        
        
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar';
import {Routes,Route}from'react-router-dom'
import Login from './Components/Login';
import About from './Components/About';
import Sign  from './Components/Sign';  


function App() {
  return (
      <>
        <BrowserRouter>
        <Navbar/>  
        <Routes>
           <Route  path={'/sign'} element={<Sign/>} exact/>
           <Route  path={'/login'} element={<Login/>} exact/>
           <Route  path={'/about'} element={<About/>} exact/>
        </Routes>
       </BrowserRouter>
      </>
  )
}

export default App; 

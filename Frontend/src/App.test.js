import logo from './logo.svg'
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Login from './components/Login'
import Users from './Users'
import Life from './Life'
import Home from './components/Home'
import About from './components/About'
import Navbar from '../Navbar'
import Page404 from '../Page404'
import SignIn from './components/SignIn'



function App() {
  return (
      <>
  
      <div className='App'>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                   <Route path='/' element={<Navbar/>} />
                  <Route path='/Home' element={<Home/>} />
                  <Route path='/About' element={<About/>} />
                  <Route path='/SignIn' element={<SignIn/>} />
                  <Route path='/Login' element={<Login/>} />
             
                  <Route path='/*' element={<Page404/>} />
              </Routes>
          </BrowserRouter>
      </div>
         </>
  );
}



export default App;

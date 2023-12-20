
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Login'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Page404 from './Page404'
import Service from './Service'
import SignIn from './SignIn'


function App() {
  return (
      <>
  
      <div className='App'>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                 
                  <Route path='/home' element={<Home/>} />
                  <Route path='/About' element={<About/>} />
                  <Route path='/Service' element={<Service/>} />
                  <Route path='/SignIn' element={<SignIn/>} />
                  <Route path='/Login' element={<Login/>} />
             
                  <Route path='/*' element={<Page404/>} />
              </Routes>
          </BrowserRouter>

     <Footer/>
      </div>
      
         </>
  );
}



export default App;

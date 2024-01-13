
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './component/Login'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import Page404 from './component/Page404'
import Service from './component/Service'
import SignIn from './component/SignIn'
import ServiceList from './component/ServiceList';


function App() {
  return (
      <>
  
      <div className='App'>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                 
                  <Route path='/home' element={<Home/>} />
                  <Route path='/About' element={<About/>} />
                  <Route path='/ServiceList' element={<ServiceList/>} />
                 
                
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

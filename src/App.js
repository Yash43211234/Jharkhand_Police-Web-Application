
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './components/Login'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Page404 from './components/Page404'
import Service from './components/Service'
import SignIn from './components/SignIn'
import ServiceList from './List/ServiceList';
import FooterAbove from './components/FooterAbove';
import Feedback from './utils/Feedback';
import Welfare from './components/Welfare';
import Link from './components/Link';



function App() {
  return (
      <>
  
      <div className='App'>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                 
                  <Route path='/home' element={<Home/>} />
                  <Route path='/about' element={<About/>}/>
                  <Route path='/ServiceList' element={<ServiceList/>} />
                  <Route path='/SignIn' element={<SignIn/>} />
                  <Route path='/Welfare' element={<Welfare/>} />
                  <Route path='/feedback' element={<Feedback/>} />
                  <Route path='/link' element={<Link/>} />
             
                  
                  <Route path='/*' element={<Page404/>} />
              </Routes>
          </BrowserRouter>
      
    <FooterAbove/>
    -..............................................
     <Footer/>
      </div>
      
         </>
  );
}



export default App;

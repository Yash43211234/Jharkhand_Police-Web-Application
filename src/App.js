
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
import History from './components/History';
import Appreciation from './components/Appreciation';
import News from './components/News';
import Recruitments from './components/Recruitments';
import Initiative from './components/Initiative';
import Charter from './components/Charter';
import StickySocialLinks from './components/StickySocialLinks';




function App() {
  return (
    <>

      <div className='App'>
        <div id="divLang" class="contact-info d-flex align-items-center">
          <div className='emergency-call-top'>
            <p>
              Emergency Response Support System [112]

            </p>
          </div>
          <div className='emergency-call-top'>
            <p>
              Email : example@gmail.com

            </p>
          </div>

          <div class="dropdown">
            <a onclick="btn1Click();" id="btnlanguage" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$btnlanguage&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">हिन्दी</a>

          </div>

        </div>
        <BrowserRouter>

          <Navbar />


          <Routes>

            <Route path='/home' element={<Home />} />

            <Route path='/History' element={<History />} />
            <Route path='/Appreciation' element={<Appreciation />} />
            <Route path='/News' element={<News />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/ServiceList' element={<ServiceList />} />
            <Route path='/Recruitments' element={<Recruitments />} />
            <Route path='/Initiative' element={<Initiative />} />
            <Route path='/Charter' element={<Charter />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Welfare' element={<Welfare />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/link' element={<Link />} />

            <Route path='/' element={<Home />} />
            <Route path='/*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <StickySocialLinks />
        <FooterAbove />
        -..............................................
        <Footer />
      </div>

    </>
  );
}



export default App;

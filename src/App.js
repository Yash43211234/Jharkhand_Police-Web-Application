import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import PrivateComponent from "./components/PrivateComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import Service from "./components/Service";
import FooterAbove from "./components/FooterAbove";
import Feedback from "./components/Feedback";
import Welfare from "./components/Welfare";
import History from "./About/History";
import Appreciation from "./About/Appreciation";
import News from "./About/News";
import Recruitments from "./Recruitment/Recruitments";
import Login from "./components/Login";
import Initiative from "./components/Initiative";
import Charter from "./About/Charter";
import StickySocialLinks from "./components/StickySocialLinks";
import Stickyright from "./components/Stickyright";
import Orders from "./UseFull_Links/Orders";
import AuthModal from "./components/AuthModal";
import Statistics from "./components/Statistics";


//forms 
import Signup from "./components/Signup";
import FormComponent from "./Services/FormComponent";
import MissingPerson from "./Services/MissingPerson";
import PCC from "./Services/PCC";
import MissingChildReport from "./form/MissingChildReport";
import JpGp from "./UseFull_Links/JpGp";
import Tff from "./Services/Tff";
import QuarterAllot from "./Services/QuarterAllot";
import JharkhandPoliceRetired from "./UseFull_Links/JharkhandPoliceRetired";
import MissingStolenMobiles from "./Services/MissingStolenMobiles";
import Involvement from "./Services/Involvement";
import NOC from "./Services/NOC";
import Act from "./UseFull_Links/Act";
import YogafunPages from "./UseFull_Links/YogafunPages";
import JharkhandWeeklyPractices from "./UseFull_Links/JharkhandWeeklyPractices";
import ZepNetForm from "./Services/ZepNetForm";
import Result from "./Recruitment/Result";
import Kissa from "./UseFull_Links/Kissa";
import Medal from "./About/Medal";
import CharacterCert from "./Services/CharacterCert";





function App() {
  return (
    <>
     

        <BrowserRouter>
     <Header />
          <Navbar />

          <Routes>

            <Route path='/' element={<Home />} />

            <Route path="/home" element={<Home />} />
            

            <Route element={<PrivateComponent/>}>
                <Route path="/Service" element={<Service />} />
                <Route path="/Result" element={<Result />} />
                <Route path="/Orders" element={<Orders />} />
                <Route path="/JpGp" element={<JpGp />} />
                <Route path="/feedback" element={<Feedback />} />
            </Route>


            {/* -------------About content is satrt here ------------------------- */}
            
            <Route path="/History" element={<History />} />
            <Route path="/Appreciation" element={<Appreciation />} />
            <Route path="/News" element={<News />} />
            <Route path="/Medal" element={<Medal />} />
            <Route path="/Initiative" element={<Initiative />} />
            <Route path="/Charter" element={<Charter />} />
            <Route path="/Login" element={<Login />} />

            {/* -------------About content is end here ------------------------- */}
            <Route path="/PCC" element={<PCC />} />
            <Route path="/" element={<Home />} />
            <Route path="/FormComponent" element={<FormComponent />} />
            <Route path="/MissingPerson" element={<MissingPerson />} />
            <Route path="/MissingChildReport" element={<MissingChildReport />} />
            <Route path="/Statistics" element={<Statistics />} />
            <Route path="/Tff" element={<Tff />} />
            <Route path="/QuarterAllot" element={<QuarterAllot />} />
            <Route path="/MissingStolenMobiles" element={<MissingStolenMobiles />} />
            <Route path="/JharkhandPoliceRetired" element={<JharkhandPoliceRetired />} />
            <Route path="/Involvement" element={<Involvement />} />
            <Route path="/NOC" element={<NOC />} />
            <Route path="/ZepNetForm" element={<ZepNetForm />} />
            <Route path="/CharacterCert" element={<CharacterCert />} />
            <Route path="/YogafunPages" element={<YogafunPages />} />
            <Route path="/JharkhandWeeklyPractices" element={<JharkhandWeeklyPractices />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Recruitments" element={<Recruitments />} />

            

            {/* -------------------Result------------------- */}


            {/* ----------------------Welfare content start--------------- */}

            <Route path="/Welfare" element={<Welfare />} />


            {/* ----------------------Welfare content End--------------- */}

            <Route path="/Act" element={<Act />} />
            <Route path="/Kissa" element={<Kissa />} />






         
            {/* ----------------------URL is Not present Page redirect--------------- */}

            <Route path="/*" element={<Page404 />} />

            {/* ----------------------URL is Not present Page redirect--------------- */}



          </Routes>
        </BrowserRouter>

        <Stickyright />
        <StickySocialLinks />

        <FooterAbove />

        <Footer />


      

    </>
  );
}

export default App;

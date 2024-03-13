import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

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
import LoginModal from "./components/LoginModal";
import Initiative from "./components/Initiative";
import Charter from "./About/Charter";
import StickySocialLinks from "./components/StickySocialLinks";
import Stickyright from "./components/Stickyright";
import Orders from "./UseFull_Links/Orders";
import AuthModal from "./components/AuthModal";
import Statistics from "./components/Statistics";

//forms
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
      <div className="App">
        <div id="divLang" class="contact-info d-flex align-items-center">
          <div className="emergency-call-top left-img">
            <img src="img/logo.png" />
          </div>
          <div className="emergency-call-top">
            <p>Emergency Response Support System [112]</p>
          </div>
          <div className="emergency-call-top">
            <p>Email : example@gmail.com</p>
          </div>

          <div class="dropdown">
            <a
              onclick="btn1Click();"
              id="btnlanguage"
              href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$btnlanguage", "", true, "", "", false, true))'
            >
              हिन्दी
            </a>
          </div>

          <div class="dropdown">
            <button className="App-button auth">
              <AuthModal />
            </button>
          </div>
          <div class="dropdown">
            <button className="App-button auth">
              {" "}
              <LoginModal />
            </button>
          </div>

          <div class="dropdown">
            <button className="App-button">Setting</button>
          </div>
        </div>

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            {/* -------------About content is satrt here ------------------------- */}

            <Route path="/History" element={<History />} />
            <Route path="/Appreciation" element={<Appreciation />} />
            <Route path="/News" element={<News />} />
            <Route path="/Medal" element={<Medal />} />
            <Route path="/Service" element={<Service />} />

            <Route path="/Recruitments" element={<Recruitments />} />
            <Route path="/Initiative" element={<Initiative />} />
            <Route path="/Charter" element={<Charter />} />

            {/* -------------About content is end here ------------------------- */}
            <Route path="/Orders" element={<Orders />} />
            <Route path="/PCC" element={<PCC />} />
            <Route path="/" element={<Home />} />
            <Route path="/FormComponent" element={<FormComponent />} />
            <Route path="/MissingPerson" element={<MissingPerson />} />
            <Route
              path="/MissingChildReport"
              element={<MissingChildReport />}
            />
            <Route path="/JpGp" element={<JpGp />} />
            <Route path="/Statistics" element={<Statistics />} />
            <Route path="/Tff" element={<Tff />} />
            <Route path="/QuarterAllot" element={<QuarterAllot />} />
            <Route
              path="/MissingStolenMobiles"
              element={<MissingStolenMobiles />}
            />
            <Route
              path="/JharkhandPoliceRetired"
              element={<JharkhandPoliceRetired />}
            />
            <Route path="/Involvement" element={<Involvement />} />
            <Route path="/NOC" element={<NOC />} />
            <Route path="/ZepNetForm" element={<ZepNetForm />} />
            <Route path="/CharacterCert" element={<CharacterCert />} />
            <Route path="/YogafunPages" element={<YogafunPages />} />
            <Route
              path="/JharkhandWeeklyPractices"
              element={<JharkhandWeeklyPractices />}
            />

            {/* -------------------Result------------------- */}
            <Route path="/Result" element={<Result />} />

            {/* ----------------------Welfare content start--------------- */}

            <Route path="/Welfare" element={<Welfare />} />
            <Route path="/feedback" element={<Feedback />} />

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
      </div>

      <style>
        {`
        .App {
          text-align: center;
          
        }
        h1{
          
          color: black;
        }
        body{
          color: black;
        }
        
        .foot{
          
          bottom: 0;
          width: 100%;
          text-align: center;
          background: #00123c;
          color: aliceblue;
          padding: 10px;
        
        }
        #divLang{
          margin-top:10px;
          margin-bottom:-10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        #divLang div{
          display: flex;
          display: inline-block;
          padding: 0 15px;
          margin-bottom:-12px ;
        }
        .emergency-call-top img{
          width:40px;
          height:40px;
          border-radius:50%;
          margin-bottom: -8px;
        }
        .emergency-call-top p {
          font-size: 16px;
          
        }
        button{
            border:0px;
        }
        .App-button{
          border:1px solid black;
          height:30px;
          width:70px;
          border-radius:4px;
        }
        
        .right-img{
          margin-right:-200px;
        }
        .right-img{
          margin-right:-200px;
        }
        `}
      </style>
    </>
  );
}

export default App;

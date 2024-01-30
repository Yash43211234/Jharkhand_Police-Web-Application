import React, { useState } from 'react'
import SettingsMenu from './SettingsMenu';
function Service() {

   
    const [activeService, setActiveService] = useState('citizen');

    const toggleService = (service) => {
        setActiveService(service);
    };


    return (
       
        <div className="service-container">

           <button>Login</button>
           <SettingsMenu/>
            <div className="service-buttons">
                <button className={activeService === 'citizen' ? 'active' : ''} onClick={() => toggleService('citizen')}>
                    <i className="fas fa-user"></i> Citizen Service
                </button>
                <button className={activeService === 'police' ? 'active' : ''} onClick={() => toggleService('police')}>
                    <i className="fas fa-shield-alt"></i> Police Service
                </button>
            </div>

            <div className="service-content">
                {activeService === 'citizen' && (
                    
                    <div class="service-icons">

                        

                  

                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/motor_vechile_theft_tp.png" class="mv"></img>
                                <h5 class="rajat"><span id="MainContent_SpanMVeT">MV Theft E FIR</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/edit.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Missing Person</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/missing_child.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Track The Missing Child </span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/un_identified_child_found.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Khoya Paya Child (GNCTD)</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/missing_person_tp.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Missing Person Search</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/teft_e_fir.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Theft FIR in city</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/view_fir.png " class="view fir"></img>
                                <h3 class="rajat"><span id="MainContent_SpanLostReport">View FIR in day</span></h3>
                           </a>
                    </div>


                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/pcc (1).png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Police Clearance Certificate</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/pak.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Character Verification Report</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/senior_citizen_tp.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Senior Citizens Registration</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/domestic_help.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Domestic Help/Tenant Registration</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/missing_stolen_vehicle.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Missing / Stolen Mobile Phones</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/View-Complaint-Status.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">View Complaint Status</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/pak.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Complaint Lodging FIR CITY</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/pcc.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">NOC / License 
                                FIR</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/rti.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">R T I</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/download.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Download Forms</span></h5>
                           </a>
                    </div>
            </div>
                )}

                {activeService === 'police' && (
                   

                        <div class="service-icons">
                            <div class="service-icon">
                    <a href="#" target="_blank">
                    <img src="img/zipnet.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">ZEP  NET</span></h5>
                           </a>
                    </div>


                             <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/2.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">DOSSIER</span></h5>
                           </a>
                    </div>

                    
                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/3.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">FSL</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/4.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Acci-claim</span></h5>
                           </a>
                    </div>

                            
                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/5.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">involvement</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/6.png " class="quater"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">quater allotoment</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/7.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">circulars notification</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/8.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">PMS/VMS</span></h5>
                           </a>
                    </div>

                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/9.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">Delhi police tretired talent</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/10.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">retaired DP personnel form</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/11.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">CGHS Empanealled</span></h5>
                           </a>
                    </div>


                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/12.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">court Rulling </span></h5>
                           </a>
                    </div>
                    <div class="service-icon">
                          <a href="#" target="_blank">
                              <img src="img/13.png " class="pp"></img>
                                <h5 class="rajat"><span id="MainContent_SpanLostReport">sexual Harassment</span></h5>
                           </a>
                    </div>
                            
                        

                    </div>
                )}
            </div>

                    <style>
                        {
                            `
                            .service-container {
                                max-width: 1200px;
                                justify-content: center;
                                
                              }
                              
                              .service-buttons {
                                display: flex;
                                justify-content: left;
                                margin-bottom: 20px;
                              }
                              
                              .service-buttons button {
                                background-color: #f0f0f0;
                                border: none;
                                padding: 10px 20px;
                                margin: 0 10px;
                                cursor: pointer;
                                border-radius: 5px;
                                font-size: 16px;
                              }
                              
                              .service-buttons button.active {
                                background-color: #3498db;
                                color: white;
                              }
                              
                              .service-content {
                                border: 1px solid #ddd;
                                padding: 20px;
                                border-radius: 5px;
                                font-size: 20px;
                                
                              }
                              .service-content div{
                                display: flex;
                                display: inline-block;
                                margin: 20px;
                              }
                              .service-content img{
                                border-radius: 50%;
                                height: 100px;
                                width: 100px;
                              }
                              
                              .service-content h2 {
                                color: #3498db;
                                
                              }
                              
                              .service-content p {
                                line-height: 1.6;
                               
                                
                              }
                              .service-icon{
                                height: 130px;
                                width: 130px;
                                color: white;
                                
                                border-radius: 50%;
                                text-align: justify;
                              }
                              .view fir img{
                                
                                margin-top: -10px;
                                
                              }
                              .service-icon a  img {
                                height: 80px;
                                width: 80px;
                              }
                            
                              .rajat{
                                text-align: center;
                              }

                              ..pp img:hover{
                                background-color: red;
                                margin-top: 10px;
                            
                              }
                              
                            `

                        }
                    </style>


        </div>
    );
}

export default Service;

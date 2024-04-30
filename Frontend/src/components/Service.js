import React, { useState } from 'react'

import Sign from './SettingIcon';
import { Link, NavLink } from "react-router-dom";



function Service() {

  const [activeService, setActiveService] = useState('citizen');

  const toggleService = (service) => {
    setActiveService(service);
  };


  return (


    <div className="service-container">

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
              <NavLink className="nav-link " to="/MissingPerson">
                <img src="img/edit.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Missing <br/> Person <br/> Report</span></h5>
              </NavLink>
            </div>

          <div class="service-icon">
              <NavLink className="nav-link " to="/PoliceSurveyForm">
                <img src="img/rep.jpg " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"> Miscell-<br/>aneous <br/> Report </span></h5>
              </NavLink>
            </div>

        
{/* 
            <div class="service-icon">
           <a href="/">
                <img src="img/un_identified_child_found.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Khoya<br/>  Paya <br/>Child</span></h5>
            </a>
            </div> */}

            <div class="service-icon">
             <NavLink className="nav-link " to="/MissingStolenMobiles">
                <img src="img/missing_stolen_vehicle.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Missing /  <br/>Stolen <br/>Phones</span></h5>
                </NavLink>
            </div>


            <div class="service-icon">
            <NavLink className="nav-link " to="/Tff">
            <img src="img/teft_e_fir.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Theft <br/> FIR in <br/>city</span></h5>
               </NavLink>
            </div>
{/* 
            <div class="service-icon">
            <NavLink className="nav-link " to="/PCC">
                <img src="img/pcc (1).png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Police <br/>Clearance <br/> Certificate</span></h5>
                </NavLink>
            </div> */}

            <div class="service-icon">
              <a href="#" target="_blank">
              <img src="img/missing_person_tp.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"><br/>Missing Person Search</span></h5>
              </a>
            </div>

{/* 
            <div class="service-icon">
            <a href="https://jhpolice.gov.in/crime-statement">
                <img src="img/view_fir.png " class="view fir"></img>
                <h3 class="rajat"><span id="MainContent_SpanLostReport">Crime <br/> Statement <br/> month</span></h3>
                </a>
            </div> 
 */}
{/* 

            <div class="service-icon">
              <NavLink className="nav-link " to="/CharacterCert">
                <img src="img/pak.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Character<br/> Verification <br/> Report</span></h5>
                </NavLink>
            </div>  */}
        
            <div class="service-icon">
              <a href="https://trackthemissingchild.gov.in/trackchild/">
              <img src="img/missing_child.png " class="pp"></img>
              <h5 class="rajat"><span id="MainContent_SpanLostReport">Track <br/>The Missing <br/> Child </span></h5>
           </a>
          </div>
          
            {/* <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/senior_citizen_tp.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Senior<br/> Citizens <br/> Registration</span></h5>
              </a>
            </div> */}
{/* 
            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/domestic_help.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Domestic Help/Tenant <br/> Registration</span></h5>
              </a>
            </div>
 */}


            <div class="service-icon">
            <NavLink className="nav-link " to="/Displaydata">
                <img src="img/View-Complaint-Status.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">View <br/> Complaint <br/> Status</span></h5>
                </NavLink>
            </div>

            {/* <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/pak.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Complaint <br/> Lodging <br/> FIR CITY</span></h5>
              </a>
            </div> */}
{/* 
            <div class="service-icon">
            <NavLink className="nav-link " to="/NOC">
                <img src="img/pcc.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">NOC <br/> License
                  FIR</span></h5>
                  </NavLink>
            </div> */}
{/* 
            <div class="service-icon">
              <a href="#" target="_blank">
                </a>
            </div> */}
{/* 
            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/download.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"><br/> Download <br/> Forms</span></h5>
              </a>
            </div> */}
            
            <div class="service-icon">
             <NavLink className="nav-link " to="/">
             <img src="img/rti.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Right <br/> to<br/> Information </span></h5>
             </NavLink>
            </div>
            
         
            <div class="service-icon">
              <NavLink className="nav-link " to="/FormComponent">
                <img src="img/motor_vechile_theft_tp.png" class="mv"></img>
                <h5 class="rajat"><span id="MainContent_SpanMVeT"> Theft <br/> Vehicles <br/> FIR</span></h5>
              </NavLink>
            </div>


          </div>
        )}

        {activeService === 'police' && (
          

          <div class="service-icons">
            
            <div class="service-icon">
            <NavLink className="nav-link " to="/JharkhandPoliceRetired">
                 <img src="img/9.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">Jharkhand police <br/> retired talent</span></h5>
                </NavLink>
            </div>
            
            <div class="service-icon">
            
            <NavLink className="nav-link " to="/ZepNetForm">
                <img src="img/zipnet.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"> <br/><br/>ZEP  NET</span></h5>
                </NavLink>
            </div>



            <div class="service-icon">
            <NavLink className="nav-link " to="/Involvement">
              <img src="img/5.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"><br/><br/>involvement</span></h5>
               
                </NavLink>
            </div>


            <div class="service-icon">
            <NavLink className="nav-link " to="/QuarterAllot">
                <img src="img/6.png " class="quater"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"><br/>quater<br/> allotoment</span></h5>
                </NavLink>
            </div>

            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/2.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"><br/><br/>DOSSIER</span></h5>
              </a>
            </div>


            <div class="service-icon">
              <a target="_blank">
                <img src="img/3.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"><br/><br/>FSL</span></h5>
              </a>
            </div>




            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/4.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"><br/>Acci- <br/><br/>claim</span></h5>
              </a>
            </div>
            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/7.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">circulars<br/> <br/>notification</span></h5>
              </a>
            </div>


            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/8.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">PMS/<br/><br/>VMS</span></h5>
              </a>
            </div>


            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/10.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport"> JH <br/>personnel <br/>form</span></h5>
              </a>
            </div>


            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/11.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">CGHS <br/>Empanealled</span></h5>
              </a>
            </div>


            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/12.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">court <br/> Rulling </span></h5>
              </a>
            </div>
            <div class="service-icon">
              <a href="#" target="_blank">
                <img src="img/13.png " class="pp"></img>
                <h5 class="rajat"><span id="MainContent_SpanLostReport">sexual<br/> Harassment</span></h5>
              </a>
            </div>



          </div>
        )}
      </div>

      <style>
        {
          `
        
                            .service-container {
                                max-width: 100%;
                                justify-content: center;
                                font-size: 16px;
                                  
                                
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
                                height: 130px;
                                width: 130px;
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
                                height: 100px;
                                width: 100px;
                                align-items: first baseline;
                                box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.3);
                                
                              }
                            
                              .rajat{
                                text-align: center;
                                font-size:15px;
                                color:black;
                                margin-top:20px;
                                
                                margin-left:-10px;
                              }

                              ..pp img:hover{
                                background-color: red;
                                margin-top: 10px;
                            
                              }

                              
                             .service-icon a {
                              background-image: linear-gradient(to right,
                                #c93721,
                                #bd2243c3 50%,
                                #000 50%);
                                
                            
                                background-size: 200% 100%;
                                background-position: -100%;
                                display: inline-block;
                                padding: 5px 0;
                                position: relative;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                transition: all 0.3s ease-in-out;
                            }
                    
                            .service-icon a:before {
                                content: '';
                                background: linear-gradient(to top, rgb(12, 52, 131) 0%, rgb(162, 182, 223) 100%, rgb(107, 140, 206) 100%, rgb(162, 182, 223) 100%);
                                display: block;
                                position: absolute;
                                bottom: -3px;
                                left: 0;
                                width: 0;
                                height: 3px;
                                transition: all 0.3s ease-in-out;
                            }
                    
                          .service-icon  a:hover {
                                background-position: 0;
                            }
                    
                            .service-icon a:hover::before {
                                width: 100%;
                            }
                            .pp:hover {
                              box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
                          }
                              
                            `

        }
      </style>




    </div>
  );
}

export default Service;

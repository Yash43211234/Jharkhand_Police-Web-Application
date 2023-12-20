import './Footer.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";

function Footer(){
    return(
        <>
        
           <div className="copyright">
              <p>
              Visitors Since 27th Nov 2021 : website hit counter
              </p>
              <p>© Copyright Jharkand Police 2021 All Right Reserved. Disclaimer | Privacy Policy Designed & Developed by NeGD</p>
               
            </div>
           
        </>
    );
}
export default Footer;
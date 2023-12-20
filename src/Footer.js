import './Footer.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";

function Footer(){
    return(
        <>
        <footer>
           <div className="copyright">
                <p>
                     Visitors Since 2nd Jan 2023 : 
                <span id="spantotalVisitors"><Link to href="#" title="website hit counter"><img src="https://counter9.stat.ovh/private/freecounterstat.php?c=cnnllw5lf5twd4eg5puk62a2suj3cmwd" border="0" title="website hit counter" alt="website hit counter"/></Link></span>
                </p>
                
                 
               
            </div>
           </footer>
        </>
    );
}
export default Footer;
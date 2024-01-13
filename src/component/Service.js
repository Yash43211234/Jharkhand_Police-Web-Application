import React from "react";
import { Link } from "react-router-dom";


const Service = () => {
    return (
        <>
            <div className="wrapper">
                <nav>
                    <input type="checkbox" id="show-search" />
                    <input type="checkbox" id="show-menu" />
                    <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
                    <div className="content">
                        <div className="logo"><Link to="/"><img src="logo.png" alt="Logo" /></Link></div>
                        <ul className="links">
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <Link to="#" className="desktop-link">About Us</Link>
                                <input type="checkbox" id="show-features" />
                                <label htmlFor="show-features">Features</label>
                                <ul>
                                    <li><Link to="#">History</Link></li>
                                    <li><Link to="#">Citizens Charter</Link></li>
                                    <li><Link to="#">Appreciation Letters</Link></li>
                                    <li><Link to="#">Medals</Link></li>
                                    <li><Link to="#">In News</Link></li>
                                    <li><Link to="#">Martyrs</Link></li>
                                    <li><Link to="#">Best Practices</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#">SERVICE</Link></li>
                            <li><Link to="#">INITIATIVES</Link></li>
                            <li><Link to="#">STATISTICS</Link></li>
                            <li>
                                <Link to="#" className="desktop-link">RECRUITMENT</Link>
                                <input type="checkbox" id="show-services" />
                                <label htmlFor="show-services">Services</label>
                                <ul>
                                    <li><Link to="#">Drop Menu 1</Link></li>
                                    <li><Link to="#">Drop Menu 2</Link></li>
                                    <li><Link to="#">Drop Menu 3</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#" className="desktop-link">WELFARE</Link>
                                <input type="checkbox" id="show-welfare" />
                                <label htmlFor="show-welfare">Services</label>
                                <ul>
                                    <li><Link to="#">Drop Menu 1</Link></li>
                                    <li><Link to="#">Drop Menu 2</Link></li>
                                    <li><Link to="#">Drop Menu 3</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#" className="desktop-link">USEFUL LINK</Link>
                                <input type="checkbox" id="show-useful-link" />
                                <label htmlFor="show-useful-link">Services</label>
                                <ul>
                                    <li><Link to="#">Drop Menu 1</Link></li>
                                    <li><Link to="#">Drop Menu 2</Link></li>
                                    <li><Link to="#">Drop Menu 3</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="dummy-text">
                {/* Add your dummy text content here */}
            </div>
        </>
    );
};

export default Service;

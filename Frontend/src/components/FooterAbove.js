function FooterAbove() {
    return (
<>
        <footer className='footerabove' id="footer">
            <div id="footer_En" className="footer-top background-opacity-bg">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-info">
                            <h3 className='h3-contact'>Contact Information</h3>
                            <div className="module-content">

                                <div className="custom">
                                    <div className="link-br"><a href="tel:1947"><i className="fa fa-phone pull-left mr-5 fs-20 icon-gradient-yellow"></i> Toll free: 112</a></div>
                                    <div className="link-br">
                                        <a href="mailto:cp.sanjayarora@Jharkhandpolice.gov.in">
                                            <i className="fa fa-envelope pull-left mr-5 fs-20 icon-gradient-yellow"></i> cp.sanjayarora@Jharkhandpolice.gov.in
                                        </a>
                                    </div>
                                    <div className="link-br">
                                        <a href="mailto:jharkhand.pol.service@Jharkhandpolice.gov.in">
                                            <i className="fa fa-envelope pull-left mr-5 fs-20 icon-gradient-yellow"></i> jharpol.service.Jharkhandpolice.gov.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                         
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links footer-info">
                            <h3>Jharkhand Police Headquarters</h3>
                            <p>
                                Address: Jharkhand POLICE HEADQUARTERS, <br /> <br />
                                Pincode: 778001<br />
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links footer-info">
                            <h3>Important Links</h3>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="telephonedirectory.aspx">Telephone Directory</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="pressrelease.aspx">Press Releases</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://tender.Jharkhandpolice.gov.in/user/viewallrecord.aspx" target="_blank">Tender</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://traffic.Jharkhandpolice.gov.in/" target="_blank">Jharkhand Traffic Police</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://licensing.Jharkhandpolice.gov.in" target="_blank">Licensing Unit</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://eow.Jharkhandpolice.gov.in" target="_blank">Economic Offence Wing </a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://ncrb.gov.in/crime-in-india.html" target="_blank">Annual Publication of Crime In India 2022 </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <style>
            {
                `
                /*--------------------------------------------------------------*/


#footer {
    background: #090909;
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 30px 0;
    margin-bottom: -20px;
}

    #footer h3 {
        font-size: 36px;
        font-weight: 700;
        color: #fff;
        font-family: "Poppins", sans-serif;
        padding: 0;
        margin: 0 0 15px 0;
    }

    #footer p {
        font-size: 16px;
        padding: 0;
        margin: 0 0 0px 0;
    }

    #footer .social-links {
        margin: 0 0 40px 0;
    }

        #footer .social-links a {
            font-size: 18px;
            display: inline-block;
            background: #00123c;
            color: #fff;
            line-height: 1;
            padding: 8px 0;
            margin-right: 4px;
            border-radius: 50%;
            text-align: center;
            width: 36px;
            height: 36px;
            transition: 0.3s;
        }

            #footer .social-links a:hover {
                background: #ec1425;
                color: #fff;
                text-decoration: none;
            }

    #footer .copyright {
        margin: 0 0 5px 0;
    }

        #footer .copyright a {
            color: #8edaff;
        }

    #footer .credits {
        font-size: 13px;
    }

        #footer .credits a {
            font-size: 13px;
            color: #ec1425;
            margin-right: 5px;
            margin-left: 5px;
        }


.footer-contrast-bg {
    background: #000046;
}

/*------------------------------yashwant // customized code------------------*/

.container{
    margin: 20px;
}
.row{
    display: flex;
}
.row div{
    margin: 10px;
}

.col-md-12 a{
    display:  flex;
}

.footer-info h3{
    
}

/*--------------------------------------------------------------*/

.background-image-style {
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    color: #fff;
}

.background-opacity-bg {
    background: linear-gradient(119.54deg, rgba(0, 0, 70, .8), rgba(28, 181, 224, .8));
    padding-top: 30px;
}

.uidai-copyright {
    background: linear-gradient(119.54deg, rgba(0, 0, 70, .6), rgba(0, 0, 70, .6));
    padding-top: 15px;
}

.fs-12 {
    font-size: 12px;
}

.text-white {
    color: #fff;
}

.footer-container .module-header {
    margin-bottom: 10px;
}

    .footer-container .module-header h3 {
        color: #fff;
    }

.footer-contact.text-white a {
    color: #fff;
}

.link-br a, .link-br span a {
    border: 1px solid;
    padding: 8px 8px;
    display: inline-block;
    line-height: 22px;
    font-size: 16px;
    margin-bottom: 10px;
    color: #FFF;
    border-color: #FFF;
}

    .link-br a i {
        font-weight: 700;
    }

.my-20 {
    margin-top: 20px;
    margin-bottom: 20px;
}

.footer-container .module-header {
    margin-bottom: 10px;
}

    .footer-container .module-header h3 {
        color: #fff;
        font-size: 18px;
    }

.link, a {
    cursor: pointer;
    color: #010178;
    font-weight: 500;
}

.line-height-24 {
    line-height: 24px;
}

.mb-15 {
    margin-bottom: 15px;
}

.font-600 {
    font-weight: 600;
}

.inline-items {
    margin: 0;
    padding: 0;
}

    .inline-items li:first-child a {
        padding-top: 0px !important;
    }

    .inline-items li a {
        padding: 7px 0px !important;
        color: #fff;
    }

#footer {
    background-color: rgba(0, 0, 70);
    padding: 0 0 10px 0;
    color: #fff;
    font-size: 14px;
}

    #footer .footer-top {
        padding: 60px 0 30px 0;
        text-align: left;
        
    }

        #footer .footer-top .footer-info {
            margin-bottom: 30px;
        }

            #footer .footer-top .footer-info h3 {
                font-size: 24px;
                margin: 0 0 20px 0;
                padding: 2px 0 2px 0;
                line-height: 1;
                font-weight: 700;
            }

            #footer .footer-top .footer-info p {
                font-size: 14px;
                line-height: 24px;
                margin-bottom: 0;
                font-family: "Montserrat", sans-serif;
                color: #fff;
                
            }

        #footer .footer-top .social-links a {
            font-size: 18px;
           
            background: #157ea3;
            color: #fff;
            line-height: 1;
            padding: 8px 0px;
            margin-left: 10px;
            border-radius: 50%;
            text-align: center;
            width: 36px;
            height: 36px;
            transition: 0.3s;
            
            
        }
        
        
        #footer .footer-top .social-links a:hover {
            background: #d7dadd;
            color: #fff;
            text-decoration: none;
            transform: scale(1.3);
            color: #f1f1f1;
        }
        
        
        #footer .footer-top h4 {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            position: relative;
            padding-bottom: 12px;
            .social-links{
                margin-left: 200px;
            }
        }

        #footer .footer-top .footer-links {
            margin-bottom: 30px;
        }


            #footer .footer-top .footer-links ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }

                #footer .footer-top .footer-links ul i {
                    padding-right: 2px;
                    color: #FFF;
                    font-size: 18px;
                    line-height: 1;
                }

                #footer .footer-top .footer-links ul li {
                    padding: 10px 0;
                    display: flex;
                    align-items: center;
                }

                    #footer .footer-top .footer-links ul li:first-child {
                        padding-top: 0;
                    }

                #footer .footer-top .footer-links ul a {
                    color: #fff;
                    transition: 0.3s;
                    display: inline-block;
                    line-height: 1;
                }

                    #footer .footer-top .footer-links ul a:hover {
                        color: #9eccf4;
                    }

        #footer .footer-top .footer-newsletter form {
            margin-top: 30px;
            background: #fff;
            padding: 6px 10px;
            position: relative;
            border-radius: 4;
        }

            #footer .footer-top .footer-newsletter form input[type=email] {
                border: 0;
                padding: 4px;
                width: calc(100% - 110px);
            }

            #footer .footer-top .footer-newsletter form input[type=submit] {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                border: 0;
                background: none;
                font-size: 16px;
                padding: 0 20px;
                background: #428bca;
                color: #fff;
                transition: 0.3s;
                border-radius: 4;
            }

                #footer .footer-top .footer-newsletter form input[type=submit]:hover {
                    background: #5295ce;
                }

    #footer .copyright {
        text-align: center;
        padding-top: 10px;
    }

    #footer .credits {
        padding-top: 10px;
        text-align: center;
        font-size: 13px;
        color: #fff;
    }

        #footer .credits a {
            color: #9eccf4;
        }

/* ------------------footer//////////// */
.foot{
    margin-top: -40px;
}


                `
            }
        </style>
        </>
    );
}

export default FooterAbove;

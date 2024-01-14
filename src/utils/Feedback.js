import React from 'react';
import './feedback.css';

function Feedback() {
    return (
        <>
            
            <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Jharkhand Police Feedback System/Jharkand पुलिस प्रतिक्रिया प्रणाली</title>
                    <link rel="stylesheet" type="text/css" href="css_deepak/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="css_deepak/style.css" />
                   
                    <link href="Select/select2.css" rel="stylesheet" />
                    <script src="Select/select2.js"></script>
                </head>
                <body>
                    <form method="post" action="#" id="form1">
                        <div className="aspNetHidden">
                            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="Z3vE/67sDlQMbdMCYl2fy8BduWiP4tUuS2uHeJvQJum8ucc6e8b13tpSkhIW+i+3oImGKe6c6foJgVKt2cqcMFQNqa80b9B+/K7r8JSd5dJCgl9VDKEPkOS6Py5k03YWZKV1MG73kg5/bjUUgrPbz/fJ/u633Z99ZUrnlWv1F1G0X03KAmrVK3PbWatZp1kGvVBEGnVHwuydGRLUoW1wpJ9fxFjWBgnu4V/aEvY+VQBWy2Ep" />
                        </div>

                        <div className="aspNetHidden">
                            <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="90059987" />
                            <input type="hidden" name="__VIEWSTATEENCRYPTED" id="__VIEWSTATEENCRYPTED" value="" />
                            <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="iqKn7JNEdXWhp9yn8XM5jn8Cs9RWizNxaMpoWwCqyvLUOn9Xtiy7SxavZTNRufBsBigmhgd9PvpaBb9sNhZohqp6TbdxkA6r9u1GLhxoBEr0lj9u6XmBhaKS+DKvDZ2n0cVOiY6YPcBr0dsXW42UQCPbSn4=" />
                        </div>

                        <div>
                            <div className="container maincontent pt-4">
                                <div className="col-md-12">
                                    <div className="logo text-center">
                                        <img src="https://images.news18.com/ibnlive/uploads/2017/11/Jharkhand3.jpg" alt="Logo" />
                                    </div>
                                    <h1 className="firsth">
                                        Welcome to official Portal <br />Jharkhand Police Feedback Management System
                                    </h1>
                                    <div id="div_psunit_button" className="form-group text-center">
                                        <div className="col-md-6 float-left mb-2">
                                            <button type="submit" name="btnPSFeedback" className="btn primebtn btn-info">
                                                Police Station
                                            </button>
                                        </div>
                                        <div className="col-md-6 float-left mb-2">
                                            <button type="submit" name="btnUnitFeedback" className="btn primebtn btn-info">
                                                Unit
                                            </button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group float-left col-md-6 btn_feed float-left">
                                            <div className="col-md-6 float-left mb-2"></div>
                                            <div className="col-md-6 float-left mb-2"></div>
                                        </div>
                                    </div>
                                    <b>
                                        <span id="lblMsg" style={{ color: 'Red' }}></span>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </form>
                </body>
            </html>
        </>
    );
}

export default Feedback;

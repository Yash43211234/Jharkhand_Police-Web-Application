import './FooterAbove.css';

function FooterAbove() {
    return (
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
                            <div className="social-links mt-3">
                                <a href="" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="" className="twitter" target="_blank"><i className="bx bxl-twitter"></i></a>
                                <a href="" target="_blank" className="google-plus"><i className="bx bxl-youtube"></i></a>
                                <a href="" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
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
    );
}

export default FooterAbove;

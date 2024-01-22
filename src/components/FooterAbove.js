
import './FooterAbove.css';
function FooterAbove() {
    return (
        <footer className=' footerabove' id="footer">
            <div id="footer_En" className="footer-top background-opacity-bg">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-info">
                            <h3>Contact</h3>
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
                                <a href="https://www.facebook.com/JharkhandPoliceOfficial/" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="https://twitter.com/JharkhandPolice" className="twitter" target="_blank"><i className="bx bxl-twitter"></i></a>
                                <a href="https://www.youtube.com/channel/UCigG-Q9tD4u-BRMFVgGdFkw" target="_blank" className="google-plus"><i className="bx bxl-youtube"></i></a>
                                <a href="https://www.instagram.com/Jharkhand.police_official/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links footer-info">
                            <h3>Jharkhand Police HQ</h3>
                            <p>
                                Jharkhand POLICE HEADQUARTERS, <br /> <br />
                                <strong>Pincode:</strong> 110001<br />
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

                    {/* <div className="col-md-12 text-center">
                        <a href="https://play.google.com/store/apps/details?id=com.tatpar.tatparJharkhandpolice&hl=en_IN&gl=US" target="_blank"><img src="assets/img/tattparapp.png" className="mb-2" alt="Tatpar App" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.dtp.trafficsentinel" target="_blank"><img src="assets/img/trafficapp.png" className="mb-2" alt="Traffic App" /></a>
                        <a href="https://apps.apple.com/in/app/traffic-sentinel/id1071515704" target="_blank"><img src="assets/img/appstore.png" className="mb-2" alt="App Store" /></a>
                        <a href="https://play.google.com/store/apps/details?id=in.cdac.ners.psa.mobile.android.national" target="_blank"><img src="assets/img/dial112.png" className="mb-2" alt="Dial 112 App" /></a>
                    </div> */}

                </div>
            </div>
        </footer>
    );
}
export default FooterAbove;
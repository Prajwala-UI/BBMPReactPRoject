import React, { useState } from 'react';
import '../Styles/CSS/BBMPLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import nicLogo from '../assets/NIC_Logo1-01.png';
import digital_logo from '../assets/digital_india.png';
import bbmpLogo from '../assets/bbmp.png'
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";

const BBMPLogin = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const isEnglish = i18n.language === 'kn';


    const [language, setLanguage] = useState('kn');
    const handleLanguageChange = (event) => {
        const newLang = event.target.value;
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        localStorage.setItem("selectedLanguage", newLang);
    };
    return (
        <div className="container-fluid">
            <header id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <h1>
                            <a href="#intro" className="scrollto">
                                
                            </a>
                        </h1>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
                            <li className="menu-active">
                                <a href="/">Home Page</a>
                            </li>
                            <li className="menu-has-children">
                                <a href="#" onClick={() => setMenuOpen(!menuOpen)}>
                                    {t('translation.citizenServices.title')} <i className="fa fa-chevron-down"></i>
                                </a>
                                <ul>
                                    <li><a href="/">{t('translation.citizenServices.subdropdown.dropdown1')}</a></li>
                                    <li><a href="/">{t('translation.citizenServices.subdropdown.dropdown2')}</a></li>
                                    <li><a href="/">{t('translation.citizenServices.subdropdown.dropdown3')}</a></li>
                                    <li><a href="/">{t('translation.citizenServices.subdropdown.dropdown4')}</a></li>
                                    <li><a href="/">{t('translation.citizenServices.subdropdown.dropdown5')}</a></li>
                                    <li><a href="/">{t('translation.citizenServices.subdropdown.dropdown6')}</a></li>
                                    <li><a href="/">{t('translation.citizenServices.subdropdown.dropdown7')}</a></li>
                                    <li><a href="/">{t('translation.citizenServices.subdropdown.dropdown8')}</a></li>
                                    <li><a href="/">{t('translation.citizenServices.subdropdown.dropdown9')}</a></li>
                                </ul>
                            </li>
                            <li className="menu-has-children">
                                <a href="#" onClick={() => setMenuOpen(!menuOpen)}>
                                    {t('translation.citizenServices.title')} <i className="fa fa-chevron-down"></i>
                                </a>
                                <ul>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown1')}</a></li>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown2')}</a></li>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown3')}</a></li>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown4')}</a></li>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown5')}</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Property Tax</a></li>
                            <li><a href="#">Things to Know</a></li>
                            <li><button className='btn btn-sm' style={{ backgroundColor: '#fff', color: '#023e8a' }}>Department Login</button></li>
                            <li>
                                <select
                                    className="language-dropdown bg-blue-600  px-4 py-2 rounded-lg border border-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none cursor-pointer"
                                    defaultValue="kannada"
                                    onChange={handleLanguageChange}
                                >
                                    <option value="kn" className="text-black">ಕನ್ನಡ</option>
                                    <option value="en" className="text-black">English</option>
                                </select>

                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
            <section id="intro">
            </section>
            <br />
            <main id="main">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src={bbmpLogo} alt="" width="100" height="90" />
                    </div>
                    <div className="col-md-6 text-center">
                        <h3 className="font_color">Bruhat Bengaluru Mahanagara Palike<br /> EAasthi</h3>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={nicLogo} alt="" width="100" height="80" />
                    </div>
                </div>
                <section id="about" className="section-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 content" data-aos="fade-right">
                                <h3 className="text-center">IMPORTANT INSTRUCTIONS / ಪ್ರಮುಖ ಸೂಚನೆಗಳು</h3>
                                <p>📌 How to get Final eKhata - <strong>English & Kannada</strong>
                                </p>
                                <p>📌 <a href="#" className="text-decoration-none font_color">FAQs on
                                    eKhata - Click Here</a></p>
                                <p>📌 eKhata - Pendency Reports & Pending Mutations</p>
                                <p>📌 Final eKhatha status based on ePID</p>
                                <p>📌 Login using mobile & OTP to see & download Draft eKhata of
                                    any/your property.</p>
                                <p>📌 Draft eKhata has been issued as per existing BBMP Property
                                    Tax Register.</p>
                                <h5 className="text-success fw-bold">Citizen should upload additional information for getting Final
                                    eKhata Online:</h5>
                                <p>📌 Registered Deed</p>
                                <p>📌 eKYC based on Aadhar</p>
                                <p>📌 SAS Property Tax Application Number</p>
                                <p>📌 Property Photo</p>
                                <p>📌 Documents to prove A-Khata</p>
                                <p>📌 Encumbrance Certificate (needed only when immediate
                                    sale/transfer is planned)</p>
                                <p className="mt-2"><strong>📢 Citizen can file an objection not to issue Final eKhata as well on
                                    any property.</strong></p>

                                <p className="text-danger">
                                    <strong>📞 Any Queries?</strong> Call <a href="tel:9480683695" className="text-dark fw-bold">9480683695</a> or
                                    email:
                                    <a href="mailto:bbmpekhata@gmail.com" className="text-dark fw-bold">bbmpekhata@gmail.com</a>
                                </p>

                                <div className="d-grid gap-2">
                                    <a href="#" className="btn font_color">📄 Click Here for draft eKhata if you know your ward</a>
                                    <a href="#" className="btn btn-secondary">🏠 Click Here to know your ward & see draft
                                        eKhatha</a>
                                </div>
                            </div>
                            <div className="col-lg-5 content" data-aos="fade-left">
                                <h4 className=" fw-bold text-center mb-3">Login</h4>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Username:</label>
                                        <input type="text" id="username" name="username" className="form-control" placeholder="Enter Username"
                                            required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password:</label>
                                        <input type="password" id="password" name="password" className="form-control" placeholder="Enter Password"
                                            required />
                                    </div>
                                    <button type="submit" className="btn btn_color w-100">SEND OTP</button>
                                </form>
                                <br />
                                <br />
                                <div className="content">
                                    Notification:
                                    Citizens before trying to enter the properties details for existing records, please ensure that tax
                                </div>
                                <div className="container mt-5 d-flex justify-content-center">
                                    <div className="card  shadow-lg" style={{ maxWidth: '400px', borderRadius: '10px' }}
                                    >
                                        <div className="card-header btn_color text-white fw-bold text-center">
                                            Latest News
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled">
                                                <li>📌 News</li>
                                                <li>📌 eKYC based on Aadhar</li>
                                                <li>📌 SAS Property Tax Application Number</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="container">
                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="contact-about">
                                    <h6 className='line_style'>EAasthi</h6>
                                    <div className="footer-title-line"></div>
                                    <div className="social-links">
                                        <img src={nicLogo} alt="" width="130" height="90" /><br /><br />
                                        <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
                                        <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="#" className="google-plus"><i className="fab fa-google-plus"></i></a>
                                        <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="info">
                                    <h6 className='line_style'>Head Office</h6>
                                    <div className="footer-title-line"></div>
                                    <div>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>Joint Commissioner of Revenue, NR Square, BBMP, Bengaluru.</p>
                                    </div>
                                    <div className="icon_size">
                                        <i className="fa fa-envelope"></i>
                                        <p>dcrev@bbmp.gov.in</p>
                                    </div>
                                    <div>
                                        <i className="fa fa-phone"></i>
                                        <p>(080) 2297 5555</p>
                                    </div>
                                    <div>
                                        <i className="fa fa-phone"></i>
                                        <p>(080) 2266 0000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <h6 className='line_style'>Business Hours</h6>
                                <div className="footer-title-line"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        Monday - Saturday
                                    </div>
                                    <div className="col-md-6">
                                        10am to 5.30pm
                                    </div>
                                    <div className="col-md-12">
                                        (Except 2nd & 4th Saturday)
                                    </div>
                                    <div className="col-md-12">
                                        Sunday & Govt Holidays - Closed
                                    </div>
                                    <br />
                                    <img src={digital_logo} alt="" width="60" height="90" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-lg-left text-center">
                            <div className="copyright">
                                &copy; Copyright <strong>EAasthi</strong>. All Rights Reserved
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BBMPLogin;

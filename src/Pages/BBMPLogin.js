import React, { useState, useEffect } from 'react';
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
    const [zoomLevel] = useState(0.9);

    const [showOTPFields, setShowOTPFields] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(60);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
    //captcha input
    const [captcha, setCaptcha] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");

    useEffect(() => {
        document.body.style.zoom = zoomLevel; // Apply zoom
        generateCaptcha();// Generate a new CAPTCHA when OTP screen appears
    }, [zoomLevel]);
    useEffect(() => {
        let interval;
        if (showOTPFields && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsResendEnabled(true);
        }
        return () => clearInterval(interval);
    }, [showOTPFields, timer]);

    const handleLanguageChange = (event) => {
        const newLang = event.target.value;
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        localStorage.setItem("selectedLanguage", newLang);
    };


    //generate Captcha
    const generateCaptcha = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(result);
    };
    //SEND OTP function starts 
    const handleSendOTP = () => {
        if (phoneNumber.trim() === "") {
            alert("Please enter a valid phone number");
            return;
        }
        if (captchaInput !== captcha) {
            alert("Incorrect CAPTCHA!");
            return;
        }
        setShowOTPFields(true);
        setTimer(60);
        setIsResendEnabled(false);
    };
    //resend OTP btn
    const handleResendOTP = () => {
        setTimer(60);
        setIsResendEnabled(false);
    };
    //change phone number link function
    const handleChangePhoneNumber = () => {
        setShowOTPFields(false);
        setPhoneNumber("");
        setOtp("");
        setCaptchaInput("");
        generateCaptcha();
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove any non-numeric characters
        setPhoneNumber(value);
    };


    return (
        <div className="container-fluid">
            <header id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <h1>
                            <a href="#intro" className="scrollto">
                                {t('translation.eaasthi.heading')}
                            </a>
                        </h1>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
                            <li className="menu-active">
                                <a href="/">{t('translation.homepage.title')}</a>
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
                                    {t('translation.reports.title')} <i className="fa fa-chevron-down"></i>
                                </a>
                                <ul>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown1')}</a></li>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown2')}</a></li>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown3')}</a></li>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown4')}</a></li>
                                    <li><a href="/">{t('translation.reports.subdropdown.dropdown5')}</a></li>
                                </ul>
                            </li>
                            <li><a href="#">{t('translation.propertyTax.title')}</a></li>
                            <li className="menu-has-children">
                                <a href="#" onClick={() => setMenuOpen(!menuOpen)}>
                                    {t('translation.thingstoknow.title')} <i className="fa fa-chevron-down"></i>
                                </a>
                                <ul>
                                    <li className="menu-has-children">
                                        <a href="#">{t('translation.thingstoknow.subdropdown.dropdown1')}  <i className="fa fa-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="#">{t('translation.thingstoknow.subdropdown.east')}</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-has-children">
                                        <a href="#">{t('translation.thingstoknow.subdropdown.dropdown2')}  <i className="fa fa-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="#">{t('translation.thingstoknow.subdropdown.east')}</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">{t('translation.thingstoknow.subdropdown.dropdown3')} </a></li>
                                </ul>
                            </li>
                            <li><button className='btn btn-sm' style={{ backgroundColor: '#fff', color: '#023e8a' }}>{t('translation.buttons.departmentLogin')}</button></li>
                            <li>
                                <select
                                    className="language-dropdown"
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

            <div className="container">
                <section id="intro">
                </section>
                <br />
                <main id="main">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <img src={bbmpLogo} alt="" width="100" height="90" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h3 className="font_color">{t('translation.eaasthi.bbmpHeading')}<br /> {t('translation.eaasthi.heading')}</h3>
                        </div>
                        <div className="col-md-3 text-center">
                            <img src={nicLogo} alt="" width="100" height="80" />
                        </div>
                    </div>
                    <hr />
                    <section id="about" className="section-bg">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-7 content" data-aos="fade-right">
                                    <h2 className="text-center instruction" style={{ textTransform: 'uppercase' }}>{t('translation.instructions.title')}</h2>
                                    <p>📝 {t('translation.instructions.statments.get')}
                                        <a className='link_style' href="https://youtu.be/GL8CWsdn3wo?si=Zu_EMs3SCw5-wQwT" target="_blank">
                                            <span>{t('translation.instructions.links.english')}</span></a>
                                        &nbsp; {t('translation.instructions.statments.and')}

                                        <a className='link_style'
                                            href="https://youtu.be/JR3BxET46po?si=jDoSKqy2V1IFUpf6"
                                            target="_blank"><span> {t('translation.instructions.links.kannada')}</span></a>
                                    </p>
                                    <p>📝 {t('translation.instructions.statments.FQA')} <a className='link_style' href="https://youtu.be/x_163krr8E4"
                                        target="_blank"><span>{t('translation.instructions.links.clickHere')} </span></a></p>
                                    <p>📝 {t('translation.instructions.statments.ekatha')}
                                        <a className='link_style' href="https://bbmpeaasthi.karnataka.gov.in/citizen_core/PendanceReport"
                                            target="_blank"><span>{t('translation.instructions.links.pendencyReports')}</span></a> {t('translation.instructions.statments.and')}
                                        &nbsp;
                                        <a className='link_style' href="https://bbmpeaasthi.karnataka.gov.in/citizen_core/PendingMutationReport"
                                            target="_blank"><span>{t('translation.instructions.links.pendingMutations')}</span></a></p>
                                    <p>📝 <a className='link_style' href="https://bbmpeaasthi.karnataka.gov.in/citizen_core/Final_eKhatha_Status_based_on_ePID"
                                        target="_blank"><span>{t('translation.instructions.links.finalEPID')}</span></a></p>
                                    <p>📝 {t('translation.instructions.statments.login')}  </p>
                                    <p>📝 {t('translation.instructions.statments.draft')}</p>
                                    <p>📝 {t('translation.instructions.statments.citizen.title')}</p>
                                    <div className='row'>
                                        <div className='col-md-1 col-0'></div>
                                        <div className='col-md-11 col-12'>
                                            <ul>
                                                <li>&#8226; {t('translation.instructions.statments.citizen.deed')}</li>
                                                <li>&#8226; {t('translation.instructions.statments.citizen.ekyc')}</li>
                                                <li>&#8226; {t('translation.instructions.statments.citizen.sas')}</li>
                                                <li>&#8226; {t('translation.instructions.statments.citizen.propertyphoto')}</li>
                                                <li>&#8226; {t('translation.instructions.statments.citizen.document')}</li>
                                                <li>&#8226; {t('translation.instructions.statments.citizen.encumbrance')}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-2">📢 {t('translation.instructions.statments.citizenFile')}</p>
                                    <p className="text-danger">
                                        <strong>📞 {t('translation.instructions.statments.queries')}</strong> {t('translation.instructions.statments.call')} <a href="tel:9480683695" className="text-dark fw-bold">9480683695</a> {t('translation.instructions.statments.or')}
                                        {t('translation.instructions.statments.email')}:
                                        <a href="mailto:bbmpekhata@gmail.com" className="text-dark fw-bold">bbmpekhata@gmail.com</a>
                                    </p>
                                    <p>📝 <a className='link_style' href="https://bbmpeaasthi.karnataka.gov.in/citizen_core/"
                                        target="_blank"><span>{t('translation.instructions.links.clickHere')}</span></a> {t('translation.instructions.statments.draft_ward')}
                                    </p>
                                    <p>📝 <a className='link_style' href="https://bbmpeaasthi.karnataka.gov.in/citizen_core/GoogleMapsWardCoordinates"
                                        target="_blank"><span>{t('translation.instructions.links.clickHere')}</span></a>
                                        {t('translation.instructions.statments.draft_Ekatha')}
                                    </p>
                                </div>
                                <div className="col-lg-5 " data-aos="fade-left">
                                    <section className="loginContent">
                                        <div className="container">
                                        <h4 className=" fw-bold text-center mb-3">{t('translation.LoginForm.title')}</h4>
                                        <h3 className=" fw-bold text-center mb-3">{t('translation.LoginForm.subTitle')}</h3>
                                        <hr/>
                                        <form>
                                            {!showOTPFields ? (
                                                <>
                                                    {/* Phone Number Input */}<span>{t('translation.LoginForm.placeholder')}</span>
                                                    <div className="input-group mb-4">
                                                        
                                                        <span className="input-group-text">📞</span>
                                                        <input
                                                            type="tel"
                                                            id="phoneNumber"
                                                            name="phone"
                                                            className="form-control"
                                                            placeholder={t('translation.LoginForm.phoneNumber')}
                                                            value={phoneNumber}
                                                            onChange={handlePhoneNumberChange}
                                                            maxLength={10}
                                                        />
                                                    </div>
                                                    {/* CAPTCHA Input */}
                                                    <span>{t('translation.LoginForm.captcha.placeholder')}</span>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text">✍️</span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder={t('translation.LoginForm.captcha.placeholder')}
                                                            value={captchaInput}
                                                            onChange={(e) => setCaptchaInput(e.target.value)}
                                                        />
                                                    </div>
                                                    {/* CAPTCHA Display */}
                                                    
                                                    <div className="input-group mb-2">
                                                        <span className="input-group-text" style={{  
                                                                background: "linear-gradient(45deg,#0077b6,#023e8a)",
                                                                color: "#fff"
                                                            }} onClick={generateCaptcha} title="Refresh CAPTCHA"><i class="fa fa-refresh"></i></span>
                                                        <input style={{backgroundColor:'lightgray',color:'#fff'}}
                                                            className="form-control captcha-box   text-dark fw-bold text-center"
                                                            value={captcha}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <br />
                                                    {/* Send OTP Button */}
                                                    <div className="input-group">
                                                        <button
                                                            type="button"
                                                            className="btn w-100"
                                                            style={{
                                                                background: "linear-gradient(45deg,#0077b6,#023e8a)",
                                                                color: "#fff",
                                                            }}
                                                            onClick={handleSendOTP}
                                                        >
                                                            {t('translation.buttons.sendOTP')}
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="input-group mb-3">
                                                        <span>
                                                            OTP sent to *******{phoneNumber.slice(-4)}{" "}
                                                            <a href="#" onClick={handleChangePhoneNumber} style={{ color: 'linear-gradient(45deg, #023e8a, #0077b6)', textDecoration: "underline" }}>
                                                                {t('translation.buttons.changePhone')}
                                                            </a>
                                                        </span>
                                                    </div>
                                                    {/* OTP Input */}
                                                    <span>{t('translation.LoginForm.otp.placeholder')}</span>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text">🔑</span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder={t('translation.LoginForm.otp.OTP')}
                                                            value={otp}
                                                            onChange={(e) => setOtp(e.target.value)} // Correctly handle OTP input
                                                        />
                                                    </div>

                                                    {isResendEnabled ? (
                                                        <div className="input-group mb-3">
                                                            <button
                                                                type="button"
                                                                className="btn w-100"
                                                                style={{ background: "linear-gradient(45deg,#0077b6,#023e8a)", color: "#fff" }}
                                                                onClick={handleResendOTP}
                                                            >
                                                                {t('translation.buttons.resendOTP')}
                                                            </button></div>
                                                    ) : (
                                                        <div className="input-group mb-3">
                                                            <span>
                                                                {t('translation.LoginForm.otp.otpTimer')} {timer} {t('translation.LoginForm.otp.seconds')}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                className="btn w-100"
                                                                style={{ background: "linear-gradient(45deg,#0077b6,#023e8a)", color: "#fff" }}
                                                                disabled
                                                            >
                                                                {t('translation.buttons.verifyOTP')}
                                                            </button></div>
                                                    )}
                                                </>
                                            )}
                                            <br />
                                        </form>
                                    </div>
                                    </section>
                                    <br />
                                    <br />
                                    <div className="content">
                                        Notification:
                                        Citizens before trying to enter the properties details for existing records, please ensure that tax
                                    </div>
                                    <section className="loginContent">
                                        <div className="container">
                                        <h4 className=" fw-bold text-center mb-3">Latest News</h4><hr/>
                                        <p>📝 {t('translation.instructions.statments.login')}  </p>
                                    <p>📝 {t('translation.instructions.statments.draft')}</p>
                                    <p>📝 {t('translation.instructions.statments.citizen.title')}</p>         
                                    <p>📝 {t('translation.instructions.statments.login')}  </p>
                                    <p>📝 {t('translation.instructions.statments.draft')}</p>
                                    <p>📝 {t('translation.instructions.statments.citizen.title')}</p>
                                    </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
            <section id="contact">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="contact-about">
                                <h6 className='line_style'>{t('translation.footer.heading')}</h6>
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
                                <h6 className='line_style'>{t('translation.footer.headOffice.heading')}</h6>
                                <div className="footer-title-line"></div>
                                <div>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p>{t('translation.footer.headOffice.address')}</p>
                                </div>
                                <div className="icon_size">
                                    <i className="fa fa-envelope"></i>
                                    <p>{t('translation.footer.headOffice.email')}</p>
                                </div>
                                <div>
                                    <i className="fa fa-phone"></i>
                                    <p>{t('translation.footer.headOffice.phone')}</p>
                                </div>
                                <div>
                                    <i className="fa fa-phone"></i>
                                    <p>{t('translation.footer.headOffice.phone1')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <h6 className='line_style'>{t('translation.footer.bussinessHours.heading')}</h6>
                            <div className="footer-title-line"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    {t('translation.footer.bussinessHours.days')}
                                </div>
                                <div className="col-md-6">
                                    {t('translation.footer.bussinessHours.hours')}
                                </div>
                                <div className="col-md-12">
                                    {t('translation.footer.bussinessHours.timings')}
                                </div>
                                <div className="col-md-12">
                                    {t('translation.footer.bussinessHours.closing')}
                                </div>
                                <br />
                                <img src={digital_logo} alt="" width="60" height="90" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-lg-left text-center">
                            <div className="copyright">
                                &copy; {t('translation.footer.copyrights')} <strong>{t('translation.footer.heading')}</strong>. {t('translation.footer.reserved')}
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BBMPLogin;

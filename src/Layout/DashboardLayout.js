import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardLayout.css';
import niclogo from '../assets/NIC_Logo1-01.png';
import bbmplogo from '../assets/bbmp.png';
import digital_logo from '../assets/digital_india.png';
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'kn';
  const [language, setLanguage] = useState('kn');
  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("selectedLanguage", newLang);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("click", function () {
      document.querySelectorAll(".dropdown-menu.show").forEach((submenu) => {
        submenu.classList.remove("show");
      });
    });
  });

  useEffect(() => {
    const dropdownSubmenus = document.querySelectorAll(".dropdown-submenu > a");
    dropdownSubmenus.forEach((submenu) => {
      submenu.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        let nextMenu = submenu.nextElementSibling;
        if (nextMenu) {
          nextMenu.classList.toggle("show");
        }
      });
    });

    return () => {
      dropdownSubmenus.forEach((submenu) => {
        submenu.removeEventListener("click", () => { });
      });
    };
  }, []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Function to toggle the dropdown
  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevents page jump
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Attach event listener when menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [menuOpen]);

  const handleClick = () => {
    navigate('/homePage');
  };
  return (
    <div className="App">

      <div className="page">
        <div className="page-main">
          <div className="header py-1">
            <div className="container">
              <div className='row '>
                <div className='col-md-2 col-12'>
                  <center><img src={bbmplogo} width={60} height={50} /></center>
                </div>
                <div className='col-md-8 col-12 py-1'>
                  <center><h3>{t('translation.eaasthi.bbmpHeading')}<br />{t('translation.eaasthi.heading')}</h3></center>
                </div>
                <div className='col-md-2 col-12'>
                  <center>
                    <span ><img src={niclogo} width={80} height={50} style={{ backgroundColor: '#fff' }} /></span>
                  </center>
                </div>
              </div>
            </div>
          </div>

          <nav className=" navbar navbar-expand-lg navbar-light bg-light" ref={navbarRef}>
            <div className="container">
              {/* Navbar Toggle Button for Mobile */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="navbar-toggler-icon"></span>&nbsp;&nbsp;BBMP - EAasthi
                <img src={bbmplogo} width={40} height={40} style={{ marginLeft: '60px' }} />
              </button>

              <div
                className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                id="navbarMenu"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" id="citizenServicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-home"></i>&nbsp; e-Khata Services
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Entry Form
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">Get e-Khatha</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Pending Applications</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ಸಲ್ಲಿಸಿದ ಆಸ್ತಿ ಸ್ಥಿತಿ</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">File Objections On Final eKhata</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Amalgamation</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Do not find my Property Draft eKhata</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Reports
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">Scanned Property Tax Registers of BBMP</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" id="citizenServicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-box"></i>&nbsp; {t('translation.citizenServices.title')}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="citizenServicesDropdown">
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.citizenServices.subdropdown.dropdown1')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.citizenServices.subdropdown.dropdown2')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.citizenServices.subdropdown.dropdown3')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.citizenServices.subdropdown.dropdown4')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.citizenServices.subdropdown.dropdown5')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.citizenServices.subdropdown.dropdown6')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.citizenServices.subdropdown.dropdown7')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.citizenServices.subdropdown.dropdown8')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.citizenServices.subdropdown.dropdown9')}</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-calendar"></i>&nbsp; {t('translation.reports.title')}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="citizenServicesDropdown">
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.reports.subdropdown.dropdown1')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.reports.subdropdown.dropdown2')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.reports.subdropdown.dropdown3')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.reports.subdropdown.dropdown4')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">{t('translation.reports.subdropdown.dropdown5')}</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link" >
                      <i className="fa fa-file"></i>&nbsp; {t('translation.propertyTax.title')}
                    </a>
                  </li>

                  <li className="nav-item dropdown">
      <a
        href="#"
        className={`nav-link dropdown-toggle ${isDropdownOpen ? "show" : ""}`}
        role="button"
        onClick={toggleDropdown} // Toggle on click
        aria-expanded={isDropdownOpen}
      >
        <i className="fa fa-box"></i>&nbsp; {t("translation.thingstoknow.title")}
      </a>
      <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            {t("translation.thingstoknow.subdropdown.dropdown1")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                {t("translation.thingstoknow.subdropdown.east")}
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item dropdown-toggle" href="#">
            {t("translation.thingstoknow.subdropdown.dropdown2")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                {t("translation.thingstoknow.subdropdown.east")}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            {t("translation.thingstoknow.subdropdown.dropdown3")}
          </a>
        </li>
      </ul>
    </li>



                </ul>

                {/* Right Side Buttons */}
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-sm"
                    style={{ backgroundColor: "#fff", color: "#023e8a" }}
                  >
                    {t('translation.buttons.deptLogin')}
                  </button>
                  &nbsp;
                  <select className="language-dropdown"
                    defaultValue="kannada" onChange={handleLanguageChange}>
                    <option value="kn" className="text-black">
                      ಕನ್ನಡ
                    </option>
                    <option value="en" className="text-black">
                      English
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </nav>



          <main>{children}</main>

          <FloatingButton onClick={handleClick} />
          <section id="contact">
            <div className="container">
              <div className="row" data-aos="fade-up">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="contact-about">
                    <h6 className='line_style'>{t('translation.footer.heading1')}</h6>
                    <div className="footer-title-line"></div>
                    <div className="social-links">
                      <img src={niclogo} alt="" width="130" height="90" /><br /><br />
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
      </div>
    </div>

  );
}
const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      <i className="fa fa-home"></i>
    </button>
  );
};
export default DashboardLayout;
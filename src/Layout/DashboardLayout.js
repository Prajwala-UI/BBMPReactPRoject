import React, { useEffect, useState } from 'react';
import './DashboardLayout.css';
import niclogo from '../assets/NIC_Logo1-01.png';
import bbmplogo from '../assets/bbmp.png';
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const DashboardLayout = ({ children }) => {

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
  return (
    <div classNameName="App">

      <div className="page">
        <div className="page-main">
          <div className="header py-1">
            <div className="container">
              <div className='row text-center'>
                <div className='col-md-2 col-12 text-right'>
                  <img src={bbmplogo} width={60} height={50} />
                </div>
                <div className='col-md-8 col-12 py-1'>
                  <h3>{t('translation.eaasthi.bbmpHeading')}<br />{t('translation.eaasthi.heading')}</h3>
                </div>
                <div className='col-md-2 col-12'>
                  <div className="d-flex">
                    <div style={{ backgroundColor: '#fff' }}><img src={niclogo} width={80} height={50} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="header navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              {/* Navbar Toggle Button for Mobile */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Collapsible Navbar */}
              <div
                className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                id="navbarMenu"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a href="./index.html" className="nav-link active">
                      <i className="fa fa-home"></i>&nbsp; {t('translation.homepage.title')}
                    </a>
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
                    <a href="#" className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    <a href="#" className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-box"></i>&nbsp; {t('translation.thingstoknow.title')}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="citizenServicesDropdown">
                      <li>
                        <a className="dropdown-item" href="#">Sub Item 1</a>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">Sub Menu</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Sub Item 2.1</a></li>
                          <li><a className="dropdown-item" href="#">Sub Item 2.2</a></li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Sub Item 3</a>
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
                    Department Login
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


          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-6 col-md-3">
                      <ul className="list-unstyled mb-0">
                        <li><a href="#">First link</a></li>
                        <li><a href="#">Second link</a></li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3">
                      <ul className="list-unstyled mb-0">
                        <li><a href="#">Third link</a></li>
                        <li><a href="#">Fourth link</a></li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3">
                      <ul className="list-unstyled mb-0">
                        <li><a href="#">Fifth link</a></li>
                        <li><a href="#">Sixth link</a></li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3">
                      <ul className="list-unstyled mb-0">
                        <li><a href="#">Other link</a></li>
                        <li><a href="#">Last link</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  Premium and Open Source dashboard template with responsive and high quality UI. For Free!
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="row align-items-center flex-row-reverse">
                <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
                  Copyright © 2018 <a href=".">Tabler</a>. Theme by <a href="https://codecalm.net" target="_blank">codecalm.net</a> All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>

  );
}

export default DashboardLayout;
import React, { useEffect, useState } from 'react';
import './DashboardLayout.css';
import niclogo from '../assets/NIC_Logo1-01.png';
import bbmplogo from '../assets/bbmp.png';
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";



const DashboardLayout = ({ children })=>  {
    
        const isEnglish = i18n.language === 'kn';
        const [language, setLanguage] = useState('kn');
    const handleLanguageChange = (event) => {
        const newLang = event.target.value;
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        localStorage.setItem("selectedLanguage", newLang);
    };
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
                  <h3>Bruhat Bengaluru Mahanagara Palike<br/>e-Aasthi</h3>
                </div>
                <div className='col-md-2 col-12'>
                  <div className="d-flex">
                    <div style={{ backgroundColor: '#fff' }}><img src={niclogo} width={80} height={50} /></div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
            <div className="container">
              <div className="row align-items-center">
                <div class="col-lg-3 ml-auto">
                  <button className='btn btn-sm' style={{ backgroundColor: '#fff', color: '#023e8a' }}>Department Login</button>
                 &nbsp;
                  <select
                    className="language-dropdown"
                    defaultValue="kannada"
                    onChange={handleLanguageChange}
                  >
                    <option value="kn" className="text-black">ಕನ್ನಡ</option>
                    <option value="en" className="text-black">English</option>
                  </select>
              </div>
                <div className="col-lg order-lg-first">
                  <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                    <li className="nav-item">
                      <a href="./index.html" className="nav-link active"><i className="fa fa-home"></i>Homepage</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link" data-toggle="dropdown"><i className="fa fa-box"></i> Citizen Services</a>
                      
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#" className="nav-link" data-toggle="dropdown"><i className="fa fa-calendar"></i> Reports</a>
                    
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#" className="nav-link" data-toggle="dropdown"><i className="fa fa-file"></i> Property Tax</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="./form-elements.html" className="nav-link "><i className="fa fa-check-square"></i> Things to Know</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

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
import React, { useEffect, useState, useRef } from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';


const BBMP_Homepage = () => {

    return (
        <DashboardLayout>
            <div className="container mt-4">
                <div className="card shadow-sm">
                    <div className="card-header btn_color text-white">
                        <h5 className="mb-0">IMPORTANT INSTRUCTIONS</h5>
                    </div>
                    <div className="card-body">
                        <p>📝 This is the citizen module to submit mandatory information and documents to get the final e-Khatha. A draft e-Khatha has been issued as per the existing BBMP property tax register.</p>
                        <p>📝 A citizen can also file objections to any draft e-Khatha and the information shown therein. All objections to issuing the final e-Khatha will be suitably decided by BBMP.</p>
                        <p>📝 A citizen, in order to get the final e-Khatha, should be ready with the following information and details.</p>
                        <div className='row'>
                            <div className='col-md-1 col-0'></div>
                            <div className='col-md-11 col-12'>
                                <ul>
                                    <li>Ownership proof (registered deed, EC, etc.).</li>
                                    <li>eKYC based on Aadhaar.</li>
                                    <li>Documents to prove e-Khatha.</li>
                                    <li>Property tax updated payment and SAS application number.</li>
                                    <li>Owner photo.</li>
                                    <li>Property photo.</li>
                                </ul>
                            </div>
                        </div>
                        <p>📝 For updating e-Khatha details, please click here</p>
                        <p>📝 Any Queries call 9480683695 or email: bbmpekhata@gmail.com</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default BBMP_Homepage;




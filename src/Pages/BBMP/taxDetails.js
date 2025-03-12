import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";


const BBMP_TaxDetails = () => {

    const [zoomLevel] = useState(0.9);
    useEffect(() => {
        document.body.style.zoom = zoomLevel; // Apply zoom
    }, [zoomLevel]);
    const [isOpen_section1, setIsOpen_section1] = useState(true);
    const [isOpen_section2, setIsOpen_section2] = useState(false);

    const { t, i18n } = useTranslation();
    const isEnglish = i18n.language === 'kn';
    const [language, setLanguage] = useState('kn');

    return (
        <DashboardLayout>
            <div>
                <div className="my-3 my-md-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Section 1 starts */}
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed btn_color"
                                                type="button"
                                                onClick={() => setIsOpen_section1(!isOpen_section1)}
                                            >
                                                {t('translation.DataAvailableInBBMPBooks')}
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section1 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.propertyEID')}</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.propertyEID')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.district')}</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.district')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.city')}</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.city')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.wardNumber')}</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.wardNumber')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.oldWardNo')}</label>
                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.oldWardNo')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.oldPropertyNo')}</label>
                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.oldPropertyNo')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.SASBaseApplicationNo')}</label>
                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.SASBaseApplicationNo')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.PropertyAddress')}</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.PropertyAddress')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.PropertyType')}</label>
                                                            <select className="form-control" name="propertyAddress">
                                                                <option value="1">Vacant Site</option>
                                                                <option value="2">Site with Building</option>
                                                                <option value="3">Multistorey Flats</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.Property Category(A/B)')}</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.Property Category(A/B)')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.streetName')}</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.streetName')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-12 w-full">
                                                        {/* Table starts */}
                                                        <div className="overflow-x-auto w-full">
                                                            <table className="w-full min-w-full border-collapse border border-gray-300">
                                                                <thead>
                                                                    <tr className="bg-gray-200 text-center">
                                                                        <th className="border border-gray-300 px-3 py-3"></th>
                                                                        <th className="border border-gray-300 px-3 py-3">Book Value</th>
                                                                        <th className="border border-gray-300 px-3 py-3">Selected New Value</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="text-center">
                                                                        <th className="border border-gray-300 px-3 py-3">Zone Name</th>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                    </tr>
                                                                    <tr className="bg-gray-200 text-center">
                                                                        <th className="border border-gray-300 px-3 py-3">Ward Name</th>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                    </tr>
                                                                    <tr className="bg-gray-200 text-center">
                                                                        <th className="border border-gray-300 px-3 py-3">Street Name</th>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                    </tr>
                                                                    <tr className="bg-gray-200 text-center">
                                                                        <th className="border border-gray-300 px-3 py-3">Property Old Number</th>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div><br />
                                                        {/* Table ends */}
                                                    </div>


                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.PropertyType')}</label>
                                                            <select className="form-control" name="propertyAddress">
                                                                <option value="1">Vacant Site</option>
                                                                <option value="2">Site with Building</option>
                                                                <option value="3">Multistorey Flats</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.SASBaseApplicationNo')}</label>
                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder={t('translation.SASBaseApplicationNo')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4 mt-5">
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn_color btn-block ml-auto">{t('translation.VerifySASApplicationNumber')}</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4 mt-5">
                                                        <div className="form-group">
                                                            <button color="primary">{t("translation.View Sample")}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 ">
                                                        {/* Table starts */}
                                                        <div className="overflow-x-auto">
                                                            <table className="w-full border-collapse border border-gray-300">
                                                                <thead>
                                                                    <tr className="bg-gray-200 text-center">
                                                                        <th className="border border-gray-300 px-6 py-3">Application Number</th>
                                                                        <th className="border border-gray-300 px-6 py-3">PID</th>
                                                                        <th className="border border-gray-300 px-6 py-3">Khatha Survey No</th>
                                                                        <th className="border border-gray-300 px-6 py-3">Owner Name</th>
                                                                        <th className="border border-gray-300 px-6 py-3">Property Address</th>
                                                                        <th className="border border-gray-300 px-6 py-3">Property Nature</th>
                                                                        <th className="border border-gray-300 px-6 py-3">Site Area</th>
                                                                        <th className="border border-gray-300 px-6 py-3">Built-Up Area</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="text-center">
                                                                        <td className="border border-gray-300 px-6 py-3">ApplicationNumber</td>
                                                                        <td className="border border-gray-300 px-6 py-3">PID</td>
                                                                        <td className="border border-gray-300 px-6 py-3">KHATHASURVEYNO</td>
                                                                        <td className="border border-gray-300 px-6 py-3">OwnerName</td>
                                                                        <td className="border border-gray-300 px-6 py-3">PropertyAddress</td>
                                                                        <td className="border border-gray-300 px-6 py-3">PropertyNature</td>
                                                                        <td className="border border-gray-300 px-6 py-3">SiteArea</td>
                                                                        <td className="border border-gray-300 px-6 py-3">BuiltUpArea</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        {/* Table ends */}
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 mt-5"></div>
                                                    <div className="col-md-3 col-lg-3 mt-5">
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn_color btn-block ml-auto">Edit</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 mt-5">
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn_color btn-block ml-auto">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 1 ends */}
                                {/* Section 2 starts */}
                                <br />
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed btn_color"
                                                type="button"
                                                onClick={() => setIsOpen_section2(!isOpen_section2)}
                                            >
                                                {t('translation.KAVERISERVICESDATA')}
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section2 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-12">
                                                            <div className="form-group">
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option1" checked />
                                                                        <span className="custom-control-label">If Registration happend after 01-04-2004, then enter Registration Number</span>
                                                                    </label>
                                                                </div>
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option2" />
                                                                        <span className="custom-control-label">If the registration happend prior to 01-04-2004, then upload title documents (Case will be referred to ARO) </span>
                                                                    </label>
                                                                </div>
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option3" />
                                                                        <span className="custom-control-label">Do not have a registered title document (Case will be referred to ARO)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-6">
                                                            <span>If Registation happend after 01-04-2004, then enter Registation Number <span style={{color:'red'}}>*</span></span>
                                                        </div>
                                                        <div className="col-md-4 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">EC Document Number</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="example-text-input"
                                                                placeholder='EC Document Number'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 col-lg-2">
                                                        <div className="form-group">
                                                        <a href="/" color="primary">View Sample</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 2 ends */}
                                <br />
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                onClick={() => setIsOpen_section2(!isOpen_section2)}
                                            >
                                                {t('translation.KAVERISERVICESDATA')}
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section2 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Text</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder="Text.."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                onClick={() => setIsOpen_section2(!isOpen_section2)}
                                            >
                                                {t('translation.KAVERISERVICESDATA')}
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section2 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Text</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder="Text.."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                onClick={() => setIsOpen_section2(!isOpen_section2)}
                                            >
                                                {t('translation.KAVERISERVICESDATA')}
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section2 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Text</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder="Text.."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                onClick={() => setIsOpen_section2(!isOpen_section2)}
                                            >
                                                {t('translation.KAVERISERVICESDATA')}
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section2 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Text</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder="Text.."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                onClick={() => setIsOpen_section2(!isOpen_section2)}
                                            >
                                                {t('translation.KAVERISERVICESDATA')}
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section2 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Text</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder="Text.."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                onClick={() => setIsOpen_section2(!isOpen_section2)}
                                            >
                                                {t('translation.KAVERISERVICESDATA')}
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section2 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Text</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder="Text.."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                onClick={() => setIsOpen_section2(!isOpen_section2)}
                                            >
                                                {t('translation.KAVERISERVICESDATA')}
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section2 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Text</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder="Text.."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default BBMP_TaxDetails;




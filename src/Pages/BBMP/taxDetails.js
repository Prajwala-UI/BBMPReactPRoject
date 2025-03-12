import React, { useEffect, useState, useRef } from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";


const BBMP_TaxDetails = () => {

    const [zoomLevel] = useState(0.9);
    useEffect(() => {
        document.body.style.zoom = zoomLevel; // Apply zoom
    }, [zoomLevel]);
    //accordion style variables
    const [isOpen_section1, setIsOpen_section1] = useState(true);
    const [isOpen_section2, setIsOpen_section2] = useState(true);
    const [isOpen_section3, setIsOpen_section3] = useState(true);
    const [isOpen_section4, setIsOpen_section4] = useState(true);
    const [isOpen_section5, setIsOpen_section5] = useState(true);
    const [isOpen_section6, setIsOpen_section6] = useState(true);
    const [isOpen_section7, setIsOpen_section7] = useState(true);
    const [isOpen_section8, setIsOpen_section8] = useState(true);
    const [isOpen_section9, setIsOpen_section9] = useState(true);

    //fields variables
    const [ePID, setEPID] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [wardNo, setWardNo] = useState('');
    const [wardName, setWardName] = useState('');
    const [oldwardNo, setOldWardNo] = useState('');
    const [oldpropertyNo, setOldPropertyNo] = useState('');
    const [sasNo, setSASNo] = useState('');
    const [propertyAddress, setPropertyAddress] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [propertyCategory, setPropertyCategory] = useState('');
    const [streetName, setStreetName] = useState('');

//Kaveri radio btn variables
const [iskaveriRadioSelected, setIsKaveriRadioSelected] = useState(false);
  const [kaverisqMeters, setKaveriSqMeters] = useState("");
  const [kaverisqFeet, setKaveriSqFeet] = useState("");
  
  const handleKaveriRadioChange = () => {
    setIsKaveriRadioSelected(true);
  };

  const handleSqMetersChange = (e) => {
    const value = e.target.value;
    setKaveriSqMeters(value);
    if (value) {
        setKaveriSqFeet((value * 10.764).toFixed(2)); // Convert Sq.M to Sq.Ft
    } else {
        setKaveriSqFeet("");
    }
  };

  const handleSqFeetChange = (e) => {
    const value = e.target.value;
    setKaveriSqFeet(value);
    if (value) {
      setKaveriSqMeters((value / 10.764).toFixed(2)); // Convert Sq.Ft to Sq.M
    } else {
      setKaveriSqMeters("");
    }
  };


  //Map
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);
  const [latitude, setLatitude] = useState("N/A");
  const [longitude, setLongitude] = useState("N/A");
  const [resultType, setResultType] = useState("Please select a property on Google Maps:");
  const markerRef = useRef(null);
  let map, autocomplete, geocoder;

  useEffect(() => {
    const initMap = () => {
      const center = { lat: 13.0074, lng: 77.5688 };
      map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 17,
        mapTypeId: "hybrid",
      });

      markerRef.current = new window.google.maps.Marker({
        map,
        draggable: true,
      });

      autocomplete = new window.google.maps.places.Autocomplete(searchInputRef.current, {
        componentRestrictions: { country: "in" },
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) return;

        map.setCenter(place.geometry.location);
        markerRef.current.setPosition(place.geometry.location);
        updateCoordinates(place.geometry.location, "Search Result", place.formatted_address);
      });

      geocoder = new window.google.maps.Geocoder();
      
      map.addListener("click", (event) => {
        placeMarker(event.latLng);
        geocodeLocation(event.latLng);
      });

      markerRef.current.addListener("dragend", (event) => {
        geocodeLocation(event.latLng);
      });
    };

    const placeMarker = (location) => {
      markerRef.current.setPosition(location);
    };

    const geocodeLocation = (location) => {
      geocoder.geocode({ location }, (results, status) => {
        if (status === "OK" && results[0]) {
          updateCoordinates(location, "Selected property on Google Map:", results[0].formatted_address);
        }
      });
    };

    const updateCoordinates = (location, resultType, address = "") => {
      setResultType(`${resultType} ${address}`);
      setLatitude(location.lat());
      setLongitude(location.lng());
    };

    initMap();
  }, []);

const { t, i18n } = useTranslation();


    //validation for EPID
    const handleEPIDChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove any non-numeric characters
        setEPID(value);
    };
    //validation for ward no
    const handlewardNoChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove any non-numeric characters
        setWardNo(value);
    }
     //validation for old ward no
     const handleoldwardNoChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove any non-numeric characters
        setOldWardNo(value);
    }
    //validation for Old property no
    const handleoldpropertyNoChange = (e) =>{
        const value = e.target.value.replace(/\D/g, ''); // Remove any non-numeric characters
        setOldPropertyNo(value);
    }
 
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
                                                    {/* EPID starts */}
                                                    <div className="col-md-6 col-lg-4 col-12">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.propertyEID')}</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.propertyEID')}
                                                                    onChange={handleEPIDChange}
                                                                    value={ePID}
                                                                    maxLength={10}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* EPID ends */}

                                                    {/* District starts */}
                                                    <div className="col-md-6 col-lg-4 col-12">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.district')}</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.district')}
                                                                    value={district}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* District ends */}

                                                    {/* city starts */}
                                                    <div className="col-md-6 col-lg-4 col-12">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.city')}</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.city')}
                                                                    value={city}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* city ends */}

                                                    {/* ward no starts */}
                                                    <div className="col-md-6 col-lg-4 col-12">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.wardNumber')}</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="tel"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.wardNumber')}
                                                                    value={wardNo}
                                                                    onChange={handlewardNoChange}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* ward no end */}

                                                    {/* ward name starts */}
                                                    <div className="col-md-6 col-lg-4 col-12">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.wardName')}</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.wardName')}
                                                                    value={wardName}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* ward name ends */}

                                                    {/* Old ward no starts */}  
                                                    <div className="col-md-6 col-lg-4 col-12">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.oldWardNo')}</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="tel"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.oldWardNo')}
                                                                    value={oldwardNo}
                                                                    onChange={handleoldwardNoChange}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Old ward no ends */}

                                                    {/* Old property no starts */}
                                                    <div className="col-md-6 col-lg-4 col-12">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.oldPropertyNo')} <span style={{color:'red'}}>*</span></label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="tel"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.oldPropertyNo')}
                                                                    value={oldpropertyNo}
                                                                    maxLength={10}
                                                                    onchange={handleoldpropertyNoChange}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    {/* Old property no ends */}

                                                    {/* SAS application no starts */}
                                                    <div className="col-md-6 col-lg-4 col-12">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.SASBaseApplicationNo')} </label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="tel" 
                                                                    maxLength={10}
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.SASBaseApplicationNo')}
                                                                    value={sasNo}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                     {/* SAS application no ends */}

                                                    {/* Property address starts */}
                                                    <div className="col-md-6 col-lg-4 col-12">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.PropertyAddress')}</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.PropertyAddress')}
                                                                    value={propertyAddress}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                     {/* Property address ends */}

                                                      {/* Property type starts */}
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.PropertyType')}</label>
                                                            <select className="form-control" name="propertyAddress" value={propertyType}>
                                                                <option value="1">{t('translation.data_as_per_bbmp_Register.propertyType.option1')}</option>
                                                                <option value="2">{t('translation.data_as_per_bbmp_Register.propertyType.option2')}</option>
                                                                <option value="3">{t('translation.data_as_per_bbmp_Register.propertyType.option3')}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                     {/* Property type ends */}

                                                      {/* Property category starts */}
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.Property Category(A/B)')}</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.Property Category(A/B)')}
                                                                    value={propertyCategory}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                     {/* Property category ends */}

                                                     {/* street starts */}
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.streetName')}</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.streetName')}
                                                                    value={streetName}
                                                                />
                                                                <span
                                                                    className="input-group-text"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Enter the property ID as per records."
                                                                >
                                                                    <i className="fas fa-info-circle text-secondary"></i>
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    {/* Table starts */}
                                                    <div className="col-md-12 col-lg-12 w-full" >

                                                        <div className="overflow-x-auto w-full">
                                                            <table className="w-full min-w-full border-collapse border border-gray-300" width={890}>
                                                                <thead>
                                                                    <tr className="bg-gray-200 ">
                                                                        <th className="border border-gray-300 px-3 py-3"></th>
                                                                        <th className="border border-gray-300 px-3 py-3">Book Value</th>
                                                                        <th className="border border-gray-300 px-3 py-3">Selected New Value</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="">
                                                                        <th className="border border-gray-300 px-3 py-3">Zone Name</th>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                    </tr>
                                                                    <tr className="bg-gray-200 ">
                                                                        <th className="border border-gray-300 px-3 py-3">Ward Name</th>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                    </tr>
                                                                    <tr className="bg-gray-200 ">
                                                                        <th className="border border-gray-300 px-3 py-3">Street Name</th>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                    </tr>
                                                                    <tr className="bg-gray-200 ">
                                                                        <th className="border border-gray-300 px-3 py-3">Property Old Number</th>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                        <td className="border border-gray-300 px-3 py-3">PID</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div><br />

                                                    </div>
                                                    {/* Table ends */}
                                                </div>
                                                <hr style={{ border: '1px dashed black' }} />

                                                <div className="row">
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.PropertyType')} <span style={{color:'red'}}>*</span></label>
                                                            <select className="form-control" name="propertyAddress">
                                                                <option value="1">{t('translation.data_as_per_bbmp_Register.propertyType.option1')}</option>
                                                                <option value="2">{t('translation.data_as_per_bbmp_Register.propertyType.option2')}</option>
                                                                <option value="3">{t('translation.data_as_per_bbmp_Register.propertyType.option3')}</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-label">{t('translation.data_as_per_bbmp_Register.input.sasapplicationno1')} <span style={{color:'red'}}>*</span>
                                                            &nbsp;
                                                            <a href="/" color="primary">{t("translation.View Sample")}</a></label>
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
                                                                        <span className="custom-control-label">{t('translation.kaveriData.radio.option1')}</span>
                                                                    </label>
                                                                </div>
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option2" />
                                                                        <span className="custom-control-label">{t('translation.kaveriData.radio.option2')}</span>
                                                                    </label>
                                                                </div>
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option3" />
                                                                        <span className="custom-control-label">{t('translation.kaveriData.radio.option3')}</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 col-lg-12">
                                                            <span>{t('translation.kaveriData.registrationNo')} <span style={{ color: 'red' }}>*</span>&nbsp;&nbsp; <a href="/" color="primary">View Sample</a></span>
                                                        </div>
                                                        <div className="col-md-8 col-lg-8 mt-2">
                                                            <div className="form-group">
                                                                {/* <span className="form-label">{t('translation.kaveriData.registerNo')} </span> */}
                                                                   
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                    placeholder={t('translation.kaveriData.placeholder')} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-4 mt-2">
                                                            <div className="form-group">
                                                            
                                                                <button type="submit" className="btn btn_color btn-block ">{t('translation.buttons.getKaveriData')}</button>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 col-lg-12 ">
                                                            {/* Table starts */}
                                                            <div className="overflow-x-auto">
                                                                <table className="w-full border-collapse border border-gray-300">
                                                                    <thead>
                                                                        <tr className="bg-gray-200 text-center">
                                                                            <th className="border border-gray-300 px-6 py-3">Registation Number</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Nature Deed</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Article type</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Registation Date Timer</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Area(Sq.mt)</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Area(Sq.ft)</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Measurement</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className="text-center">
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                            {/* Table ends */}
                                                        </div>
                                                    </div><br />
                                                    <div className='row '>
                                                        {/* I accept kaveri system block starts */}
                                                 

                                                        <div className="col-md-6 col-lg-6">
                                                            <div className="form-group">
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option1" />
                                                                        <span className="custom-control-label">I Accept the area in Kaveri System</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">Area in Sq.Mtrs : <span><input type="text" /></span></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">Area in Sq.Fts : <span><input type="text" /></span></span>
                                                            </div>
                                                        </div>
                                                        {/* I accept kaveri system block ends */}

                                                        {/* I accept property tax system block starts */}
                                                        <div className="col-md-6 col-lg-6">
                                                            <div className="form-group">
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option2" />
                                                                        <span className="custom-control-label">I Accept the area in Property Tax System</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">Area in Sq.Mtrs : <span>15.3</span></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">Area in Sq.Fts : <span>15.3</span></span>
                                                            </div>
                                                        </div>
                                                        {/* I accept property tax system block ends */}

                                                        {/* I accept property tax system block starts */}
                                                        {/* <div className="col-md-6 col-lg-6">
                                                            <div className="form-group">
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option3" />
                                                                        <span className="custom-control-label">I Object to the area in kaveri & Property Tax</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">Area in Sq.Mtrs : <span><input type="text" /></span></span></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">Area in Sq.Fts : <span><input type="text" /></span></span></span>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-md-6 col-lg-6">
        <div className="form-group">
          <div className="custom-controls-stacked">
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="example-inline-radios"
                value="option3"
                onChange={handleKaveriRadioChange}
              />
              <span className="custom-control-label">
                I Object to the area in Kaveri & Property Tax
              </span>
            </label>
          </div>
        </div>
      </div>

      {iskaveriRadioSelected && (
        <>
          <div className="col-md-3 col-lg-3">
            <div className="form-group">
              <label className="form-label">Area in Sq.Mtrs:</label>
              <input
                type="text"
                className="form-control"
                value={kaverisqMeters}
                onChange={handleSqMetersChange}
              />
            </div>
          </div>

          <div className="col-md-3 col-lg-3">
            <div className="form-group">
              <label className="form-label">Area in Sq.Fts:</label>
              <input
                type="text"
                className="form-control"
                value={kaverisqFeet}
                onChange={handleSqFeetChange}
              />
            </div>
          </div>
        </>
      )}
                                                        {/* I accept property tax system block ends */}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 2 ends */}
                                <br />
                                {/* Section 3 starts */}
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed btn_color"
                                                type="button"
                                                onClick={() => setIsOpen_section3(!isOpen_section3)}
                                            >
                                                Khatadar Details
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section3 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-12">
                                                            <div className="form-group">
                                                                <span>Please do AADHAR eKYC of every owner in sale/registration deed or those who inherit the property. If any owner name is missing, add it and do eKYC. Case will goto ARO for approval</span>
                                                            </div>
                                                            <div className="form-group">
                                                                <h5>Khatadar as per register</h5>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 col-lg-12 ">
                                                            {/* Table starts */}
                                                            <div className="overflow-x-auto">
                                                                <table className="w-full border-collapse border border-gray-300">
                                                                    <thead>
                                                                        <tr className="bg-gray-200 text-center">
                                                                            <th className="border border-gray-300 px-6 py-3">Sl No</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Khatadar Name</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Name Confirmation/Edit</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Relation Name</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Address</th>
                                                                            <th className="border border-gray-300 px-6 py-3">E-KYC Status</th>
                                                                            <th className="border border-gray-300 px-6 py-3">Khatadar Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className="text-center">
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                            <td className="border border-gray-300 px-6 py-3"></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                            {/* Table ends */}
                                                        </div>
                                                        <div className="col-md-12 col-lg-12">
                                                            <div className="form-group">
                                                                <span>Note : Do you want to add new owner which is not in BBMP Books Data?</span>
                                                                <span> If new owners are added by using below options, the application will be considered as Mutation and final e-Katha will be given only after 7 days of objection period followed by Mutation approval and fee payment</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-6">
                                                            <div className="form-group">
                                                                <h5>Add New Owner(s)</h5>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-3 col-lg-3'>
                                                            <div className="form-group">
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option1" checked />
                                                                        <span className="custom-control-label">Yes</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-3 col-lg-3'>
                                                            <div className="form-group">
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option2" />
                                                                        <span className="custom-control-label">No</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 3 ends */}
                                <br />
                                {/* Section 4 starts */}
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed btn_color"
                                                type="button"
                                                onClick={() => setIsOpen_section4(!isOpen_section4)}
                                            >
                                                Location of Property
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section4 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                    <div className="col-md-12">
          <b>Search using nearest landmark near your property- once you zoom there then locate your individual property & tap on top middle of your property</b>
          <br /><br />
        </div>
        <div className="col-md-12 col-lg-12 col-sm-12 mb-3">
          <input ref={searchInputRef} className="form-control" type="text" placeholder="Search nearest landmark near your property" />
          
        </div>
        <div className="col-md-12 col-lg-12 col-sm-12 mb-3">
          <div id="map" ref={mapRef} style={{ height: "500px" }}></div>
        </div>
        <div className="col-md-12 col-lg-12 col-sm-12">
  <div className="row p-3 bg-light rounded shadow-sm">
    {/* Result Type */}
    <div className="col-12 mb-2 text-center">
      <span id="resultType" className="fw-bold text-primary fs-5">{resultType}</span>
    </div>

    {/* Latitude */}
    <div className="col-md-6 col-lg-6 col-sm-12 text-center mb-2">
      <span className="fw-semibold text-dark">
        Latitude: <label className="text-success">{latitude}</label>
      </span>
    </div>

    {/* Longitude */}
    <div className="col-md-6 col-lg-6 col-sm-12 text-center">
      <span className="fw-semibold text-dark">
        Longitude: <label className="text-success">{longitude}</label>
      </span>
    </div>
  </div>
</div>
                                                    </div>
                                     
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 4 ends */}
                                <br />
                                {/* Section 5 starts */}
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed btn_color"
                                                type="button"
                                                onClick={() => setIsOpen_section5(!isOpen_section5)}
                                            >
                                                Postal Address of Property
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section5 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        {/* Door/Plot no starts */}
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Door / Plot No. <span style={{ color: 'red' }}>*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* Door/Plot no ends */}
                                                        {/* building / land name starts */}
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Building / Land Name</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* building / land name ends */}
                                                        {/*  Street/Nearst Street starts */}
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Select Street/Nearst Street from List of Ward Streets <span style={{ color: 'red' }}>*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*  Street/Nearst Street ends */}
                                                        {/*  Street/Nearst Street starts */}
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Street/Nearst Street <span style={{ color: 'red' }}>*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*  Street/Nearst Street ends */}
                                                        {/*  nearest landmark starts */}
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Nearst Landmark <span style={{ color: 'red' }}>*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*  nearest landmark ends */}
                                                        {/*  Area/Locality starts */}
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Area Locality <span style={{ color: 'red' }}>*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*   Area/Locality ends */}
                                                        {/*  pincode starts */}
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Pincode <span style={{ color: 'red' }}>*</span></label>
                                                                <input
                                                                    type="tel"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*   pincode ends */}
                                                        {/*  Latitude & Longitude starts */}
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Latitude & Longitude <span style={{ color: 'red' }}>*</span></label>
                                                                <input
                                                                    type="tel"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*   Latitude & Longitude ends */}
                                                        {/*  Property Image starts */}
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="form-group">
                                                                <label className="form-label">Property Image <span style={{ color: 'red' }}>*</span><br />
                                                                    <span style={{ color: 'gray' }}> Note: (Click Property Photo from outside with its front elevation visible)</span>
                                                                    <input
                                                                    type="file"
                                                                    className="form-control"
                                                                    name="example-text-input"
                                                                />
                                                                <span style={{ color: 'gray' }}>Only JPG, JPEG allowed with a max size of 500KB</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/*   Latitude & Longitude ends */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 5 ends */}
                                <br />
                                {/* Section 6 starts */}
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed btn_color"
                                                type="button"
                                                onClick={() => setIsOpen_section6(!isOpen_section6)}
                                            >
                                                Property Use Details
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section6 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <h5>Schedule of the Property</h5>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">East : <span style={{ color: 'red' }}>*</span></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">Wast : <span style={{ color: 'red' }}>*</span></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">North : <span style={{ color: 'red' }}>*</span></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <span className="form-label">South : <span style={{ color: 'red' }}>*</span></span>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="example-text-input" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="example-text-input" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="example-text-input" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="example-text-input" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 6 ends */}
                                <br />
                                {/* Section 7 starts */}
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed btn_color"
                                                type="button"
                                                onClick={() => setIsOpen_section7(!isOpen_section7)}
                                            >
                                                Names Mismatch reason Details
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section7 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-4">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 7 ends */}
                                <br />
                                {/* Section 8 starts */}
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed btn_color"
                                                type="button"
                                                onClick={() => setIsOpen_section8(!isOpen_section8)}
                                            >

                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section8 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-12">
                                                            <div className="form-group">
                                                                <p>I want to go for immediate sale/transfer of property, which I understand requires me to go to the jurisdictional ARO for in-person verification:</p>
                                                                <p>Note: If anytime when you want to sell/transfer you will need to undergo in-person verification by jurisdictional ARO.</p>
                                                                <p>If you select No, you will get final eKhata immediately.</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-3 col-lg-3'>
                                                            <div className="form-group">
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option1" />
                                                                        <span className="custom-control-label">Yes</span>
                                                                    </label>
                                                                    <label className="custom-control custom-radio custom-control-inline">
                                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" value="option2" />
                                                                        <span className="custom-control-label">No</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 8 ends */}
                                <br />
                                {/* Section 9 starts */}
                                <div className="accordion" id="formAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed btn_color"
                                                type="button"
                                                onClick={() => setIsOpen_section9(!isOpen_section9)}
                                            >
                                                Declaration
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isOpen_section9 ? "show" : ""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#formAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-12">
                                                            <div className="form-group">
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" />
                                                                        <span className="custom-control-label">I understand </span><br />
                                                                        <p>1. 'A' & 'B' Khatha is being issued as per existing BBMP property Tax records & subject to final verification as per my submitted documents.</p>
                                                                        <p>2. In case of any discrepancy between existing BBMP records & my submitted infomration or missing information, my case will be referred to the jurisdictional ARo for decision on merit.</p>
                                                                        <p>3. Any eKhatha on government or government organization land is liable to be rejected or cancelled.</p>
                                                                        <p>4. Any wrongful or incorrect eKhatha issued is liable to be cancelled.</p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="custom-controls-stacked">
                                                                    <label className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option2" />
                                                                        <span className="custom-control-label">I certify that information submitted is true & correct to the best of my knowledge & belief and any false or wrong information makes eKhatha liable to be cancelled & make me liable for criminal/suitable action as per law </span><br />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3">
                                                            <div className="form-group">
                                                                <button type="submit" className="btn btn_color btn-block ">Verify Your Data</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Section 9 ends */}
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




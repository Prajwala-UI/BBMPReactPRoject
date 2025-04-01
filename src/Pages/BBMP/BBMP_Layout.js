import React, { useEffect, useState, useRef } from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";
import SAS_Sample from '../../assets/Sample_SAS_APPLICATIONNO.jpeg';
import SampleDeep_no from '../../assets/deedNo.jpg';
import Swal from "sweetalert2";
import Loader from "../../Layout/Loader";


export const useLoader = () => {
    const [loading, setLoading] = useState(false);

    const start_loader = () => setLoading(true);
    const stop_loader = () => setLoading(false);

    return { loading, start_loader, stop_loader };
};


const BBMP_LayoutForm = () => {

    const { loading, start_loader, stop_loader } = useLoader(); // Use loader context
    const [zoomLevel] = useState(0.9);
    useEffect(() => {
        document.body.style.zoom = zoomLevel; // Apply zoom
    }, [zoomLevel]);

    const [selectedLandType, setSelectedLandType] = useState("");



    return (
        <DashboardLayout>
            {loading && <Loader />}
            <div>
                <div className="my-3 my-md-5">
                    <div className="container mt-4">
                        <div className="card">
                            <div className="card-header btn_color" >
                                <h5 className="card-title" style={{ textAlign: 'center' }}>Bulk eKhata for layout to owner / developer</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6>What is the type of Land on which layout is formed-select</h6>
                                    </div>

                                    {/* First Radio Button */}
                                    <div className="col-md-6">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input radioStyle"
                                                type="radio"
                                                name="landType"
                                                value="bbmpKhata"
                                                onChange={() => setSelectedLandType("bbmpKhata")}
                                                checked={selectedLandType === "bbmpKhata"}
                                            />
                                            <label>BBMP A-Khata</label>
                                        </div>
                                    </div>
                                    {/* Second Radio Button */}
                                    <div className="col-md-6">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input radioStyle"
                                                type="radio"
                                                name="landType"
                                                value="convertedRevenue"
                                                onChange={() => setSelectedLandType("convertedRevenue")}
                                                checked={selectedLandType === "convertedRevenue"}
                                            />
                                            <label>Converted Revenue Survey No (No BBMP Khata)</label>
                                        </div>
                                    </div>

                                    {/* Section for First Radio Button */}
                                    {selectedLandType === "convertedRevenue" && (
                                        <NoBBMPKhata />
                                    )}

                                    {/* Section for Second Radio Button */}
                                    {/* Section for BBMP A-Khata Selection */}
                                    {selectedLandType === "bbmpKhata" && (
                                        <BBMPKhata />
                                    )}



                                </div>
                            </div>
                        </div>

                        <BDA />
                        <IndividualSites />
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}

const NoBBMPKhata = () => {
    const { loading, start_loader, stop_loader } = useLoader(); // Use loader context
    const [district, setDistrict] = useState("");
    const [taluk, setTaluk] = useState("");
    const [hobli, setHobli] = useState("");
    const [village, setVillage] = useState("");
    const [surveyNumber, setSurveyNumber] = useState("");
    const [hissaNo, setHissaNo] = useState("");
    const [surnoc, setSurnoc] = useState("");

    // Sample data - in a real app, you would fetch this from an API
    const districts = ["Bangalore Urban", "Bangalore Rural", "Mysore", "Tumkur"];
    const taluks = ["Taluk 1", "Taluk 2", "Taluk 3"];
    const hoblis = ["Hobli 1", "Hobli 2", "Hobli 3"];
    const villages = ["Village 1", "Village 2", "Village 3"];

    return (
        <div className="row g-3">
            {/* District */}
            <div className="col-md-2 mb-3">
                <label htmlFor="district" className="form-label text-primary fw-medium">District</label>
                <select
                    id="district"
                    className="form-select"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                >
                    <option value="" disabled selected>Select District</option>
                    {districts.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            {/* Taluk */}
            <div className="col-md-2 mb-3">
                <label htmlFor="taluk" className="form-label text-primary fw-medium">Taluk</label>
                <select
                    id="taluk"
                    className="form-select"
                    value={taluk}
                    onChange={(e) => setTaluk(e.target.value)}
                >
                    <option value="" disabled selected>Select Taluk</option>
                    {taluks.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            {/* Hobli */}
            <div className="col-md-2 mb-3">
                <label htmlFor="hobli" className="form-label text-primary fw-medium">Hobli</label>
                <select
                    id="hobli"
                    className="form-select"
                    value={hobli}
                    onChange={(e) => setHobli(e.target.value)}
                >
                    <option value="" disabled selected>Select Hobli</option>
                    {hoblis.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            {/* Village */}
            <div className="col-md-2 mb-3">
                <label htmlFor="village" className="form-label text-primary fw-medium">Village</label>
                <select
                    id="village"
                    className="form-select"
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                >
                    <option value="" disabled selected>Select Village</option>
                    {villages.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            {/* Survey Number */}
            <div className="col-md-2 mb-3">
                <label htmlFor="surveyNumber" className="form-label text-primary fw-medium">Survey Number</label>
                <input
                    type="text"
                    className="form-control"
                    id="surveyNumber"
                    placeholder="Enter Survey Number"
                    value={surveyNumber}
                    onChange={(e) => setSurveyNumber(e.target.value)}
                />
            </div>

            {/* Go button  */}
            <div className="col-md-2 mb-3">
                <label></label>
                <button className='btn btn-primary btn-block'>Go</button>
            </div>

            {/* Surnoc */}
            <div className="col-md-3 mb-3">
                <label htmlFor="Surnoc" className="form-label text-primary fw-medium">Hissa No</label>
                <select
                    id="Surnoc"
                    className="form-select"
                    value={surnoc}
                // onChange={(e) => setHissaNo(e.target.value)}
                >
                    <option value="" disabled selected>Select Surnoc</option>
                    <option value="*">*</option>
                </select>
            </div>
            {/* Hissa No */}
            <div className="col-md-3 mb-3">
                <label htmlFor="hissaNo" className="form-label text-primary fw-medium">Hissa No</label>
                <select
                    id="hissaNo"
                    className="form-select"
                    value={hissaNo}
                    onChange={(e) => setHissaNo(e.target.value)}
                >
                    <option value="" disabled selected>Select Hissa No</option>
                    {["1", "2", "3", "4", "5"].map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            {/* Fetch button  */}
            <div className="col-md-2 mb-3">
                <label></label>
                <button className='btn btn-primary btn-block'>Fetch</button>
            </div>
        </div>
    );
};

const BBMPKhata = () => {
    const { loading, start_loader, stop_loader } = useLoader(); // Use loader context
    const [epidNumber, setEpidNumber] = useState("");
    const [epidshowTable, setEPIDShowTable] = useState(false);
    const [epid_fetchedData, setEPID_FetchedData] = useState(null);


    const [phoneError, setPhoneError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(120);
    const [resendEnabled, setResendEnabled] = useState(false);

    useEffect(() => {
        let interval;
        if (otpSent && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setResendEnabled(true);
        }
        return () => clearInterval(interval);
    }, [otpSent, timer]);

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setPhoneNumber(value);
            setPhoneError("");
        } else {
            setPhoneError("Enter a valid 10-digit number");
        }
    };

    const handleSendOtp = () => {
        if (phoneNumber.length !== 10) {
            setPhoneError("Phone number must be 10 digits");
            return;
        }
        setOtpSent(true);
        setTimer(30);
        setResendEnabled(false);
    };

    const handleResendOtp = () => {
        setOtp("");
        setTimer(30);
        setResendEnabled(false);
    };


    const handleFetchDetails = () => {
        start_loader();
        if (!epidNumber.trim()) {
            stop_loader();
            Swal.fire("Error", "Please enter EPID Number!", "error");
            return;
        }

        // Simulating API Call (Replace this with actual API call)
        setTimeout(() => {
            stop_loader();
            setEPID_FetchedData({
                name: "John Doe",
                address: "123, Main Street",
                status: "Verified",
                relationshipType: "Owner",
                relationName: "N/A"
            });

            Swal.fire({
                title: "Success",
                text: "EPID Details fetched successfully!",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                setEPIDShowTable(true);
            });
        }, 1000);
    };
    // const handlePhoneNumberChange = (e) => {
    //     const value = e.target.value.replace(/\D/g, ''); // Remove any non-numeric characters
    //     setPhoneNumber(value);
    // };
    return (
        <div className="row g-3">
            {loading && <Loader />}
            <div className="col-md-4 mt-3">
                <div className="form-group mt-2">
                    <label className='text-primary fw-medium'>Enter EPID of e-Khata of A-property:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={epidNumber}
                        onChange={(e) => setEpidNumber(e.target.value)}
                        placeholder="Enter EPID of e-Khata of A-property"
                    />

                </div>
            </div>
            <div className="col-md-4 mt-4">
                <div className="form-group mt-5">
                    <label></label>
                    <button className="btn btn-primary mt-2" onClick={handleFetchDetails}>
                        Fetch Details
                    </button>
                </div>
            </div>


            {/* Table Section */}
            {epidshowTable && epid_fetchedData && (
                <div>
                    <div className="col-md-12 mt-3">
                        <h5>Property Owner details as per BBMP e-Khata</h5>
                        <h6>Note: Plot-wise New Khata will be issued in owner's name. hence, If owner has changed then first get Mutation done in eKhata.</h6>
                        {/* <h6>If there has been a change in ownership, the Mutation process in eKhata must be completed first, as the New Khata will be issued in the owner's name.</h6> */}

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Sl.No</th>
                                    <th>Owner Name</th>
                                    <th>Relationship Type</th>
                                    <th>Relation Name</th>
                                    <th>Relationship Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{epid_fetchedData.name}</td>
                                    <td>{epid_fetchedData.address}</td>
                                    <td>{epid_fetchedData.status}</td>
                                    <td>{epid_fetchedData.relationshipType}</td>
                                    <td>{epid_fetchedData.relationName}</td>
                                    <td><button className='btn btn-primary'>View eKhata</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className='col-md-4'>
                            <div className=" input-group mb-4">
                                <span className="input-group-text">📞</span>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Enter phone number"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    maxLength={10}
                                    disabled={otpSent}
                                />

                            </div>
                            {phoneError && <label className="text-danger">{phoneError}</label>}
                        </div>

                        {!otpSent ? (
                            <div className="col-md-4 input-group mb-4">
                                <button className="btn btn-primary" onClick={handleSendOtp}>
                                    Send OTP
                                </button>
                            </div>
                        ) : (
                            <div className="col-md-4 input-group mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    maxLength={6}
                                />
                                <button className="btn btn-success">Verify OTP</button>
                            </div>
                        )}

                        {otpSent && (
                            <div className="col-md-4">
                                {timer > 0 ? (
                                    <p className="text-danger">Time left: {timer}s</p>
                                ) : (
                                    <button className="btn btn-warning" onClick={handleResendOtp}>
                                        Resend OTP
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>


            )}

        </div>
    );
};

const BDA = () => {
    const [formFields, setFormFields] = useState([
        {
            id: 1, // First block is always present
            layoutApprovalOrder: null,
            layoutApprovedMap: null,
            approvalNumber: '',
            approvalDate: '',
            approvalAuthority: ''
        }
    ]);

    const handleAddMore = () => {
        setFormFields([
            ...formFields,
            {
                id: Date.now(), // Unique ID for each new field
                layoutApprovalOrder: null,
                layoutApprovedMap: null,
                approvalNumber: '',
                approvalDate: '',
                approvalAuthority: ''
            }
        ]);
    };

    const handleRemove = (id) => {
        if (id !== 1) { // Prevents removal of the first block
            setFormFields(formFields.filter(field => field.id !== id));
        }
    };




    return (
        <div className="card">
            <div className="card-header " >
                <h5 className="card-title" style={{ textAlign: 'center' }}>BDA/Planning Authority Layout Approval Details</h5>
            </div>
            <div className="card-body">
                <h6 className='fw-normal fs-5'>Layout approval Details</h6>
                <hr className='mt-1' style={{ border: '1px dashed #0077b6' }} />
                <div className="row mt-5 " >
                    <div className='col-md-4'>
                        <div className="form-group ">
                            <label className='text-primary fw-medium'>Scan & Upload Layout Approval order:</label>
                            <input type="file" className="form-control" />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group ">
                            <label className='text-primary fw-medium'>Scan & Upload Layout Approved map:</label>
                            <input type="file" className="form-control" />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group ">
                            <label className='text-primary fw-medium'>Layout Approval Number:</label>
                            <input type="tel" className="form-control" placeholder='Enter Layout Approval No' />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group ">
                            <label className='text-primary fw-medium'>Date of Approval:</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group mt-2">
                            <label className='text-primary fw-medium'>Enter the Designation of Approval Authority:</label>
                            <input type="text" className="form-control" placeholder='Enter Designation' />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="form-group mt-6">
                            <button className='btn btn-primary btn-block'>Save</button>
                        </div>
                    </div>
                </div>
                <hr className='mt-1' />
                <h6 className='fw-normal fs-5'>Layout Release order Details</h6>
                <hr className='mt-1' style={{ border: '1px dashed #0077b6' }} />
                {formFields.map((field, index) => (
                    <div className="row" key={field.id}>
                        <div className='col-md-4'>
                            <div className="form-group mt-2">
                                <label className='text-primary fw-medium'>Scan & Upload order of site release:</label>
                                <input type="file" className="form-control" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mt-2">
                                <label className='text-primary fw-medium'>Site release Order Number:</label>
                                <input type="tel" className="form-control" placeholder='Enter site release order No' />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mt-2">
                                <label className='text-primary fw-medium'>Date of release order:</label>
                                <input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mt-2">
                                <label className='text-primary fw-medium'>Enter the Designation of Authority issued site release order:</label>
                                <input type="text" className="form-control" placeholder='Enter Designation' />
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="form-group mt-8">
                                <button className='btn btn-primary btn-block'>Save</button>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="form-group mt-8">
                                {field.id !== 1 && ( // Remove button only for non-first blocks
                                    <button className='btn btn-danger' onClick={() => handleRemove(field.id)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                )}
                                &nbsp;
                                <button className='btn btn-success' onClick={handleAddMore}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
const IndividualSites = () => {
    const [shape, setShape] = useState(""); // Track selected shape
    const [sideLengths, setSideLengths] = useState({
        side1: "",
        side2: "",
        side3: "",
        side4: "",
    });
    const [roadFacing, setRoadFacing] = useState({
        side1: false,
        side2: false,
        side3: false,
        side4: false,
    });
    return (
        <div className="card">
            <div className="card-header " >
                <h5 className="card-title" style={{ textAlign: 'center' }}>Layout & Individual sites Details</h5>
            </div>
            <div className="card-body">
                <div className='row'>
                    <div className='col-md-12'>
                        <label>Total Area of the layout = </label>

                        <input type='tel' />&nbsp;in SqM <span className='text-danger'>[Must be lesser than equal to site area]</span>
                        <br />
                        <label className='fw-bold fs-7'>Site / Plot wise Details</label>
                    </div>
                </div>
                <hr className='mt-1' style={{ border: '1px dashed #0077b6' }} />
                <div className='row'>
                    <label className='text-danger'>Note: Please enter Correctly as e-Khata will be issued as per this</label>
                    <div className='col-md-4'>
                        <div className="form-group text-center">
                            <label>
                                <input
                                    type="radio"
                                    value="regular"
                                    checked={shape === "regular"}
                                    onChange={() => setShape("regular")}
                                />
                                Regular Shape
                            </label>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group text-center">
                            <label>
                                <input
                                    type="radio"
                                    value="irregular"
                                    checked={shape === "irregular"}
                                    onChange={() => setShape("irregular")}
                                />
                                Irregular Shape
                            </label>
                        </div>
                    </div>
                </div>


                {shape === "regular" && (
                    <div className='row'>
                        <div className='col-md-2'>
                            <div className="form-group text-right">
                                <label>Site Number :</label>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="form-group">
                                <input type="text" />
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="form-group text-right">
                                <label>Block/Area :</label>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="form-group">
                                <input type="text" />
                            </div>
                        </div>
                        <div className='col-md-4'></div>

                        <div className='col-md-4'>
                            
                        </div>
                        {[1, 2, 3, 4].map((side) => (
                            <div key={side}>
                                <div className='col-md-4'>
                                <label>
                                    Side {side} length:{" "}
                                    <input
                                        type="number"
                                        value={sideLengths[`side${side}`]}
                                        onChange={(e) =>
                                            setSideLengths({ ...sideLengths, [`side${side}`]: e.target.value })
                                        }
                                    />{" "}
                                    feet
                                </label>
                                </div>
                                <div className='col-md-4'>
                                <label>
                                    Road facing:
                                    <input
                                        type="radio"
                                        name={`roadFacing${side}`}
                                        checked={roadFacing[`side${side}`] === true}
                                        onChange={() =>
                                            setRoadFacing({ ...roadFacing, [`side${side}`]: true })
                                        }
                                    />
                                    Yes
                                    <input
                                        type="radio"
                                        name={`roadFacing${side}`}
                                        checked={roadFacing[`side${side}`] === false}
                                        onChange={() =>
                                            setRoadFacing({ ...roadFacing, [`side${side}`]: false })
                                        }
                                    />
                                    No
                                </label>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default BBMP_LayoutForm;




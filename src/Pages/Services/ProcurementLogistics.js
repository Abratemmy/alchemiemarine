import React from 'react';
import OtherPages from '../../Components/OtherPages/OtherPages'
import serviceIcon1 from "../../Assets/ship1.png";

function ProcurementLogistics() {
  return (
    <div className="">
        <OtherPages
            pageName="Our Services"
            serviceList
            serviceTitle="Vessel Charter & Marine Procurement"
        />

        <div className="serviceContainer">
            <div className='ServicePageListContainer'>
                <div className='container'>
                    <div className="topSession">
                        <div className="sub-heading">Vessel Charter & Marine Procurement</div>
                        {/* <div className='main-heading'>Delivering Excellence Across <span> Marine Operations</span></div> */}
                    </div>
                    <div className='row g-4'>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='serviceImage'>
                                <img src={serviceIcon1} alt="our service" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="servicesContent">
                                <div className='main-heading'>Vessel Charter & Marine <span>Procurement Services</span></div>
                                <div className="page-text">
                                    From vessel provision to port discharge supervision, Alchemie Marine delivers comprehensive chartering and logistics solutions across West Africa. Leveraging strong relationships with partners and industry stakeholders, we ensure seamless operations that meet the highest standards, including strict compliance with OGP guidelines.From vessel provision to port discharge supervision, Alchemie Marine delivers comprehensive chartering and logistics solutions across West Africa. Leveraging strong relationships with partners and industry stakeholders, we ensure seamless operations that meet the highest standards, including strict compliance with OGP guidelines.
                                </div>

                                <div className='page-text'>
                                    <strong> Vessel Charter Services</strong>
                                </div>
                                <div className='page-text'>
                                    We offer a versatile fleet tailored to offshore and onshore project needs:
                                </div>

                                <ul>
                                    <li>Offshore Support Vessels (OSVs) </li>
                                    <li>Fast Support Vessels (FSVs) </li>
                                    <li>Construction & Accommodation Vessels, Barges and Dredgers</li>
                                    <li>Platform Support Vessels (PSVs) with DP1&2 capabilities </li>
                                    <li>Anchor Handling Tug Supply Vessels (AHTSVs)</li>
                                    <li>Utility Vessels </li>
                                    <li>Lifeboats</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProcurementLogistics
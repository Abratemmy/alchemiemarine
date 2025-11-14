import React from 'react';
import serviceIcon3 from "../../Assets/ship3.webp";
import OtherPages from '../../Components/OtherPages/OtherPages'

function AlternativeCrude() {
  return (
    <div className="">
        <OtherPages
            pageName="Our Services"
            serviceList
            serviceTitle="Alternative Crude Evacuation"
        />

        <div className="serviceContainer">
            <div className='ServicePageListContainer'>
                <div className='container'>
                    <div className="topSession">
                        <div className="sub-heading">Alternative Crude Evacuation</div>
                        {/* <div className='main-heading'>Delivering Excellence Across <span> Marine Operations</span></div> */}
                    </div>
                    <div className='row g-4'>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='serviceImage'>
                                <img src={serviceIcon3} alt="our service" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="servicesContent">
                              <div className="main-heading">Alchemie Marine: Redefining <span>Crude Oil Evacuation </span> in Nigeria</div>
                                <div className="page-text">
                                   Over the past three years, Alchemie Marine has successfully evacuated more than 10,000,000 barrels of crude oil—an achievement that speaks volumes about our capability, reliability, and innovation.
                                </div>

                                <div className="page-text">
                                  We specialize in Alternative Crude Evacuation (ACE) services, offering a robust logistics-driven solution to the challenges posed by compromised pipeline infrastructure in Nigeria. Our modified evacuation strategies enable the safe loading, storage, and transportation of both wet and dry crude to operators’ preferred destinations using marine vessels.
                                </div>

                                <div className='page-text'>
                                  <strong>
                                    Why Alchemie Marine?
                                  </strong>
                                </div>
                                <ul>
                                    <li>We partner with leading oil & gas stakeholders to facilitate <strong>efficient crude evacuation via barging. </strong></li>
                                    <li>Our <strong>turnkey liquids transfer solutions </strong> are designed to eliminate losses due to vandalism and ensure seamless operations.</li>
                                    <li>We provide <strong>end-to-end marine logistics </strong>, including vessel security, mooring assets, and mooring solutions.</li>
                                  
                                </ul>

                                <div className='page-text'>
                                  <strong>
                                    🔧 Our ACE Service Suite Includes:
                                  </strong>
                                </div>
                                <ul>
                                    <li> <strong> Bathymetric Studies </strong>– for accurate seabed mapping and safe navigation</li>
                                    <li> <strong> Regulatory Compliance </strong>– ensuring all operations meet Nigerian and international standards</li>
                                    <li> <strong> Mooring & Marine Assets </strong>– provision and management of critical infrastructure</li>
                                    <li> <strong> QHSE </strong>– prioritizing Quality, Health, Safety, and Environment in every operation</li>
                                    <li> <strong>Community Relations </strong>– fostering trust and collaboration with host communities</li>
                                    <li> <strong>Journey Management </strong>– optimizing routes and timelines for marine logistics</li>
                                    <li> <strong>Logistics Planning </strong>– strategic coordination of assets and personnel</li>
                                    <li> <strong>Security </strong>– safeguarding cargo, vessels, and crew throughout the supply chain</li>
                                  
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

export default AlternativeCrude
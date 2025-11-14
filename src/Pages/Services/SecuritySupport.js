import React from 'react'
import serviceIcon4 from "../../Assets/ship4.webp";
import OtherPages from '../../Components/OtherPages/OtherPages'

function SecuritySupport() {
  return (
    
    <div className="">
        <OtherPages
            pageName="Our Services"
            serviceList
            serviceTitle="Security and Support"
        />

        <div className="serviceContainer">
            <div className='ServicePageListContainer'>
                <div className='container'>
                    <div className="topSession">
                        <div className="sub-heading">Marine Security and Support</div>
                        {/* <div className='main-heading'>Delivering Excellence Across <span> Marine Operations</span></div> */}
                    </div>
                    <div className='row g-4'>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='serviceImage'>
                                <img src={serviceIcon4} alt="our service" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="servicesContent">
                                <div className='main-heading'>Marine Security and <span>Support Services</span></div>
                                <div className="page-text">
                                  We proudly collaborate with Nigerian Navy personnel to drive innovation, ensure maritime security, and achieve excellence across the marine industry.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecuritySupport
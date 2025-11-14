import React from 'react';
import serviceIcon2 from "../../Assets/ship2.jpg";
import OtherPages from '../../Components/OtherPages/OtherPages'

function MarineLogistic() {
  return (
    <div className="">
        <OtherPages
            pageName="Our Services"
            serviceList
            serviceTitle="Marine Logistics"
        />

        <div className="serviceContainer">
            <div className='ServicePageListContainer'>
                <div className='container'>
                    <div className="topSession">
                        <div className="sub-heading">Marine Logistics</div>
                       
                    </div>
                    <div className='row g-4'>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='serviceImage'>
                                <img src={serviceIcon2} alt="our service" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="servicesContent">
                               <div className='main-heading'>Marine Logistics <span> Services</span></div>
                                <div className="page-text">
                                    Our logistics operations are powered by deep operational expertise and cutting-edge technology, delivering secure, efficient, and cost-effective solutions:
                                </div>

                                <ul>
                                    <li> Salvage & Vessel Towing Operations </li>
                                    <li> Barge Transportation </li>
                                    <li> Procurement of Marine Equipment</li>
                                  
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

export default MarineLogistic
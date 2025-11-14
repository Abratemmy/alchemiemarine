import React from 'react'
import serviceIcon6 from "../../Assets/ship6.jpg";
import OtherPages from '../../Components/OtherPages/OtherPages'
import { FaStarOfLife } from "react-icons/fa";

function Consultancy() {
  return (
    <div className="">
        <OtherPages
            pageName="Our Services"
            serviceList
            serviceTitle="Marine Consultancy"
        />

        <div className="serviceContainer">
            <div className='ServicePageListContainer'>
                <div className='container'>
                    <div className="topSession">
                        <div className="sub-heading">Marine Consultancy</div>
                        {/* <div className='main-heading'>Delivering Excellence Across <span> Marine Operations</span></div> */}
                    </div>
                    <div className='row g-4'>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='serviceImage'>
                                <img src={serviceIcon6} alt="our service" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="servicesContent">
                              <div className="main-heading">Marine Consultancy <span>Services</span> </div>
                                <div className="page-text">
                                  With over a decade of expertise, Alchemie Marine delivers specialized consultancy 
                                  across the marine sector—offering project advisory, quality assurance and control, project management and monitoring, agency representation, and technical inspection services.
                                </div>

                                <div className='page-text'>
                                  <strong>Our Consultancy Services</strong>
                                </div>
                                <div className='page-text'>
                                  We deliver expert guidance and hands-on support across every phase of your project lifecycle. Our core services include:
                                </div>

                                <div className="page-text page-text-title">
                                  <div className='icon12'><FaStarOfLife className='icon' /> </div>
                                  Project Advisory
                                </div>

                                <ul>
                                    <li>Technical and Commercial Evaluation of Project</li>
                                    <li>Bid Strategy management, Planning, and Support</li>
                                    <li>Technical review and Procurement strategy support</li>
                                  
                                </ul>

                                <div className="page-text page-text-title">
                                  <div className='icon12'><FaStarOfLife className='icon' /> </div>
                                  Quality Assurance & Quality Control
                                </div>

                                <ul>
                                    <li>Technical Assets Inspections</li>
                                    <li>Health and Safety Audits</li>
                                    <li>Operational Process Audits</li>
                                  
                                </ul>

                                <div className="page-text page-text-title">
                                  <div className='icon12'><FaStarOfLife className='icon' /> </div>
                                    Project Management & Monitoring
                                </div>

                                <ul>
                                    <li>Operational planning, reporting, and planning  </li>
                                    <li>Equipment provision and maintenance support</li>
                                </ul>

                                <div className="page-text page-text-title">
                                  <div className='icon12'><FaStarOfLife className='icon' /> </div>
                                    Agency Services
                                </div>

                                <ul>
                                    <li>Regulatory permits and licenses</li>
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

export default Consultancy
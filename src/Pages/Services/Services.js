import React from 'react';
import './Services.scss';
import OtherPages from '../../Components/OtherPages/OtherPages'
import ServiceData from '../../Components/ServiceData'
import Button from '../../Components/Button/Button'

function Services() {
 
  return (
    <div>
        <OtherPages
            pageName="Our Services"
        />

        <div className="serviceContainer">
          <div className="container">
            <div className="topSession">
                    <div className="sub-heading">Our Services</div>
                    <div className='main-heading'>Delivering Excellence Across <span> Marine Operations</span></div>
                </div>
            <div className="row g-4">
              
                {ServiceData.map((srv, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="service-card" key={index}>
                        <img src={srv.image} alt={srv.title} />
                        <div className="service-info">
                            <h3>{srv.title}</h3>
                            <p>{srv.description}</p>
                            <Button 
                              text='Learn More'
                              buttonLink={srv.href}
                            />
                        </div>
                    </div>
                    </div>
                ))}
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services
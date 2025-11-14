import React from 'react'
import OtherPages from '../../Components/OtherPages/OtherPages'


function OurTeam() {
  return (
    <div>
        <OtherPages
            pageName="Our Team"
        />

        <div className='ourTeamSession'>
            <div className='container'>
                <div className='subTitle'>
                    At Alchemie Marine Services (AMS), we leverage our expertise to deliver innovation, safety, and excellence in every operation.
                </div>

                <div className="page-text">
                    At AMS, we harness deep expertise to deliver innovation, safety, and excellence consistently. Backed by over 50 years of combined experience, our leadership team comprises seasoned marine consultants with extensive sea-going backgrounds across a wide range of vessel types—including oil, chemical, and gas tankers, bulk carriers, and general cargo ships.
                </div>

                <div className="page-text">
                    Our marine pilotage capabilities span a comprehensive suite of services, including Harbor Pilotage, Single Point Mooring (SPM), Conventional Buoy Mooring (CBM), Tandem Mooring, and Ship-to-Ship (STS) transfer operations—both underway and at anchor.
                </div>

                <div className="page-text">
                    Together, our team ensures that every project is executed with precision, integrity, and an unwavering commitment to client satisfaction.
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam
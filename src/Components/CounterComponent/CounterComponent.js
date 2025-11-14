import React from 'react';
import './CounterComponent.scss';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaShip } from "react-icons/fa6";
import { FaOilCan, FaShippingFast } from "react-icons/fa";
import { MdGeneratingTokens } from "react-icons/md";

function CounterComponent() {
    const { ref, inView } = useInView({
        triggerOnce: true,   // only animate once
        threshold: 0.5,      // 50% of section visible triggers it
    });

    return (
        <div className="homeCounterContainer" ref={ref}>
            <div className="container">
                <div className='top'>
                    <div className='sub-heading'>Maritime Milestones Achieved</div>
                    <div className='main-heading'>Proven Performance. Trusted Result</div>
                    <div className='page-text'>A testament to our years of reliable service in marine logistics and offshore operations.</div>
                </div>
                <div className='counterWrapper'>
                    <div className='counterItem'>
                        <div className='image'><FaShip className='icon' /></div>
                        <div className='title'>1billion+ litres</div>
                        <p className='first'>Liquids (PMS) Transhipped</p>
                    </div>

                    <div className='counterItem counterItem2'>
                        <div className='image'><FaOilCan className='icon' /></div>
                        <div className='title'>5billion+ bbls</div>
                        <p>Crude Oil Evacuation</p>
                    </div>

                    <div className='counterItem'>
                        <div className='image'><FaShippingFast className='icon' /></div>
                        <div className='title'>
                            {inView ? <CountUp end={3000} duration={2} /> : 0}+
                        </div>
                        <p>Ship to Ship Transfer</p>
                    </div>

                    <div className='counterItem counterItem2'>
                        <div className='image'><MdGeneratingTokens className='icon' /></div>
                        <div className='title'>
                            {inView ? <CountUp end={98} duration={2} /> : 0}%
                        </div>
                        <p>STS Rating</p>
                    </div>
                    {/* <div className="counterContainer">

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CounterComponent
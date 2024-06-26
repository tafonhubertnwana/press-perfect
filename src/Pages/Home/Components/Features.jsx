import React from 'react';
import Slider from 'react-slick';

import homeIcon4 from '../../../Assets/images/HomeImage/home-icons04.png';

const Features = () => {
  

  return (
    <div className='row'>
      <div className=" col d-flex justify-content-between my-5">
          <div className="d-flex  bg-white p-4 ">
            <div className='pe-4'>
              <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h6>Save Time & Money</h6>
              <p>
                No more wasted time driving to the laundromats, we pickup and deliver for free!
              </p>
            </div>
          </div>
          <div className="d-flex bg-white p-4 mx-2">
            <div className='pe-4'>
              <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h6>Pay Online in Seconds</h6>
              <p>
                Manage your Press account and billing online from your smartphone or computer
              </p>
            </div>
          </div>
          <div className="d-flex bg-white p-4">
            <div className='pe-4'>
              <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h6> Eco-Friendly</h6>
              <p>
                We use safe and clean perc-free solvents, so you, and the Earth, can look good.
              </p>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Features;
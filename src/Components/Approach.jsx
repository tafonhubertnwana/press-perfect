import React from 'react'
import washIron from '../Assets/images/HomeImage/bg.png';
import homeIcon4 from '../Assets/images/HomeImage/home-icons04.png';


const Approach = () => {
  return (
    <div>
      <div className="container">
        <div className='d-flex justify-content-between'>
          <div>
            <h4>Our Approach</h4>
            <div>
              <p>We approach workforce accommodations with a property development mindset. Our “Develop. Own. Operate.” business model produces integrated solutions that enable clients to focus on their core business.</p>
            </div>
          </div>
          <div>
            <img src={washIron} alt="" style={{width: '550px', height:'300px'}}/>
          </div>
        </div>
        <div className='row'>
      <div className=" col d-flex justify-content-between my-5">
          <div className="d-flex  p-4 ">
            <div className='pe-4'>
              <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h6>High Quality</h6>
              <p>
We work hard to make sure that the clothes you get back are spotless and ready for action              </p>
            </div>
          </div>
          <div className="d-flex  p-4 mx-2">
            <div className='pe-4'>
              <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h6>Cleaner & Greener</h6>
              <p>
We work with the environment in mind. No harsh chemicals.              </p>
            </div>
          </div>
          <div className="d-flex p-4">
            <div className='pe-4'>
              <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h6>Happiness Guarantee</h6>
              <p>
If you're not completely satisfied with the wash or dry cleaning, we will re-process your clothes for free!              </p>
            </div>
          </div>
        
      </div>
    </div>

      </div>
    </div>
  )
}

export default Approach
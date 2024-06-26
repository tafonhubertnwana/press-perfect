import React from 'react'
import homeIcon4 from '../Assets/images/HomeImage/home-icons04.png';


const ChooseUs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex ">

            <div className="">
              <div>
                <h5>Why Choose Us</h5>
                <p>
                We know that a strong, client-focused business is a smart business. We have a 20,000-square-foot, state-of-the-art workshop where all cleaning, specialized spot removal, pressing, inspection and packaging of your items take place.
                </p>
                <h6>Values & Experience</h6>
                <p>
                We know that a strong, client-focused business is a smart business. We have a 20,000-square-foot, state-of-the-art workshop where all cleaning, specialized spot removal, pressing, inspection and packaging of your items take place.
                </p>
              </div>
              <button type='button' className='btn btn-primary'>Order Now</button>
            </div>
            <div>
            <div className="  ">
            <div className="d-flex   ">
              <div className='pe-4'>
                <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
              </div>
              <div>
                <h6>Persionalized Experience</h6>
                <p>
                We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.             </p>
              </div>
            </div>
            <div className="d-flex  ">
              <div className='pe-4'>
                <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
              </div>
              <div>
                <h6>Convenience</h6>
                <p>
                With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.            </p>
              </div>
            </div>
            <div className="d-flex ">
              <div className='pe-4'>
                <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
              </div>
              <div>
                <h6>express Delivery</h6>
                <p>
                With our super express delivery, we would get your laundry done in less than 8 hours.           </p>
              </div>
            </div>
          
              </div>
            </div>
            <div className="  ">
          <div className="d-flex   ">
            <div className='pe-4'>
              <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h6>Affordable Pricing</h6>
              <p>
              Prices that suits your pocket is one of our USP. An option of choosing between 2 types of pricing is available.            </p>
            </div>
          </div>
          <div className="d-flex  ">
            <div className='pe-4'>
              <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h6>quality</h6>
              <p>
              We use the best in class products, to assure that your favorite clothes are always there for you to wear.           </p>
            </div>
          </div>
          <div className="d-flex ">
            <div className='pe-4'>
              <img src={homeIcon4} alt="" style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h6>Instant Order Update</h6>
              <p>
              Regular updates of your order, to help you keep a track of your laundry and plan accordingly         </p>
            </div>
          </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
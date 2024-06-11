import React from 'react';
import { Link } from 'react-router-dom'
import homeIcon1 from '../../../Assets/images/HomeImage/bedsheets.webp';
import homeIcon2 from '../../../Assets/images/HomeImage/dry-cleaning.webp';
import homeIcon3 from '../../../Assets/images/HomeImage/wash-iron.webp';
import homeIcon4 from '../../../Assets/images/HomeImage/steam-iron.webp';

const HomeService = () => {
  return (
  <div className="d-flex flex-wrap justify-content-evenly ">
  <div className="col-6 col-md-6 col-lg-3 mb-4 ">
    <div className="w-100 text-center p-4">
      <img src={homeIcon2} alt="" className="w-100 h-100 img-radius" />
      <div className="w-75 mx-auto pt-3">
        <h5 className='fw-bold'>Dry Cleaning</h5>
        <p>
          We offer specialist dry cleaning services for your special garments at
          very affordable prices.
        </p>
        <button className="border-0 bg-white text-black">
          <Link className="read-more" to="more">
            READ MORE
          </Link>
        </button>
      </div>
    </div>
  </div>
  <div className="col-6 col-md-6 col-lg-3 mb-4 ">
    <div className="w-100 text-center p-4 ">
      <img src={homeIcon3} alt="" className="w-100 h-100 img-radius" />
      <div className="w-75 mx-auto pt-3">
        <h5 className='fw-bold'>Wash & Iron</h5>
        <p>
          We will wash your cloths and deliver them to your doorstep, surely you
          will like our services
        </p>
        <button className="border-0 bg-white text-black">
          <Link className="read-more" to="more">
            READ MORE
          </Link>
        </button>
      </div>
    </div>
  </div>
  <div className="col-6 col-md-6 col-lg-3 mb-4 ">
    <div className="w-100 text-center p-4">
      <img src={homeIcon3} alt="" className="w-100 h-100 img-radius" />
      <div className="w-75 mx-auto pt-3">
        <h5 className='fw-bold'>Steam Iron</h5>
        <p>
          Look crisp with steam ironed clothes, make lasting impression on
          others, Use our services today.
        </p>
        <button className="border-0 bg-white text-black">
          <Link className="read-more" to="more">
            READ MORE
          </Link>
        </button>
      </div>
    </div>
  </div>
  <div className="col-6 col-md-6 col-lg-3 mb-4 ">
    <div className="w-100 p-4 text-center">
      <img src={homeIcon1} alt="" className="w-100 h-100 img-radius"  />
      <div className="w-75 mx-auto pt-3">
        <h5 className='fw-bold'>Besdheets Cleaning</h5>
        <p>
          For you bedsheets we do multiple wah cycles with high quality
          datergent, conditioner and softener.
        </p>
        <button className="border-0 bg-white">
          <Link className="read-more" to="more">
            READ MORE
          </Link>
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default HomeService;
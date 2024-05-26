import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon1 from '../../../Assets/images/HomeImage/home-icons01.png';
import homeIcon2 from '../../../Assets/images/HomeImage/home-icons02.png'
import bannerContent from '../../../Assets/images/HomeImage/home_laundry_services.png';

const Home = () => {
  return (
    <>
      <div>
          <div className='contact-bg'>
            <div className='container '>
              <div className='text-white'>
                <h1>WE OFFER THE BEST <br/>LAUNDRY SERVICES</h1>
                <p className=''>
                  The Laundry Company provides a premium laundry, ironing,dry <br/> cleaning and alteration service for domestic and small businesses <br/> in the SouthWest.
                </p>
                <button className='btn btn-primary'>ORDER NOW</button>
              </div>
              <div>
              </div>
            </div>
          </div>
      </div>
      <div>
        <div className='container'>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-6 mb-4">
            <div className=" w-100 text-center p-4">
              <img src={homeIcon1} alt="" />
              <div className="w-50 mx-auto">
                <h5>Laundry Services</h5>
                <p>Let us pick up your dirty laundry, sort it, stains, dry, fold and deliver back to you in one neat, easy package</p>
                <button><Link>READ MORE</Link></button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <div className="w-100 p-4 text-center">
              <img src={homeIcon2} alt="" />
              <div className="w-50 mx-auto">
                <h5>Dry Cleaning Services</h5>
                <p>Students and local residents love on our reliable dry cleaning services for the fast, accurate, top quality results.</p>
                <button ><Link>READ MORE</Link></button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col'> 
              <div className=''>
                <div>
                  <p>Services you will love</p>
                  <h2>
                    WE ARE PASSIONATE ABOUT LAUNDRY
                  </h2>
                  <p>
                  We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics.
                  <p>

                    Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about changing the way you think about laundry!
                  </p>
                  </p>
                </div>

              </div>
            </div>
            <div className='col'> 
              <div>
                <img src={bannerContent} alt="" />
              </div>
            </div>
             
          </div>

        </div>
      </section>
    </>
  )
}

export default Home
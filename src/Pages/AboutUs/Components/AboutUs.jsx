import React from 'react'
import bannerContent from '../../../Assets/images/HomeImage/home_laundry_services.png';
import HomeProcedures from '../../Home/Components/HomeProcedures';
import HomeFeatures from '../../Home/Components/HomeFeatures';
import OurTeam from '../../Team/Component/OurTeam';
import { TiTick } from "react-icons/ti";
import NavBar from '../../../Components/Header/NavBar';
import sectionImage from '../../../Assets/images/HomeImage/about_img.jpg'


const AboutUs = () => {
  return (
    <div className='position-relative'>
      
      <div >
        <div className='bar'>
          <NavBar />
        </div>
        <div className='contact-bg'>
          <div className='container '>
            <div className='text-center text-sm-start'>
              <h1>ABOUT US</h1>
              <p>&nbsp;</p>
              <p>
              We are a modern innovative Textile Services Company, equipped to support <br />the hospitality, commercial, education and industrial communities of our <br /> areas.  </p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container ">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className="">
                <div>
                  <div className=' discount icon-title'>More than 5+ Years of Experience</div>
                  <h4 className='title-head pt-2'>WE ARE PASSIONATE ABOUT LAUNDRY</h4>
                  <p>
                  We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about the way you think about laundry!
                  </p>
                </div>
                <div className="d-flex">

                <div className='pe-4  p'>
                  <ul>
                    <li> <TiTick className='discount' /> 100% Customer Satisfaction</li>
                    <li> <TiTick className='discount'/> Free Collection & Delivery</li>
                    <li> <TiTick className='discount'/> Affordable Price</li>
                    <li> <TiTick className='discount'/> Best Quality</li>
                  </ul>
                </div>
                
                </div>
              </div>

            </div>
            <div className="col-md-6">
              <div>
                <img src={bannerContent} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <HomeFeatures />
        </div>
      </section>
      <section className='section-history'>
        <div className='d-flex'>
          <div className='section-image'>
            <img src={sectionImage} alt="" style={{height: '600px'}}/>
          </div>
          <div className='left-section'>
            <div className='bg-white p-5'>
              <div className='icon-title discount'>
                [ Our History ]
              </div>
              <h4 className='title-head pt-2'>
                Laundry & Dry Cleaning Foundation
              </h4>
              <div>
                <p>
                Founded in 2019, we follow a dream and an We aim to serve our customers in a way that far exceeds expectation. Being one of the leading laundry service providers, we know our customers’ mindset. It is not easy to come home from a hectic day at the office and rush to the nearest laundry service with your clothes. So, we have an array of services to make things easy for you.
                </p>

                <p>
                You need not tolerate late deliveries, low standard of work merged with high prices. Our services cater to all your laundering and ironing, dry cleaning, shoe repairs, upholstery cleaning, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div > 
          <OurTeam />
        </div>
      </section>
        
    </div>
  )
}

export default AboutUs
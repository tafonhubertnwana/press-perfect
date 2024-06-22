import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import bannerContent from '../../../Assets/images/HomeImage/home_laundry_services.png';
import laundryMachine from '../../../Assets/images/HomeImage/laundry_washing_machine.png'
import PriceTable from './PriceTable';
import HomeService from './HomeService';
import TestimonialSection from './TestimonialSection';
import HomeFeatures from './HomeFeatures';
import HomeProcedures from './HomeProcedures';
import Modal from './Modal';
import { TiTick } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => {

  return (
    <>
      <div>
          <div className='contact-bg'>
            <div className='container '>
              <div className='text-center text-sm-start'>
                <h1>WE OFFER THE BEST <br/>LAUNDRY SERVICES</h1>
                <p className=''>
                  The Laundry Company provides a premium laundry, ironing,dry <br/> cleaning and alteration service for domestic and small businesses <br/> in the SouthWest.
                </p>
                <div>

                  <button type="button" className='px-4 py-3 border-0 mt-2 order-now' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ORDER NOW</button>
                  <div>
                    <Modal /> 
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
      </div>
      <div  className=''> 
        
        <section className='mt-5'>
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

                <div className='pe-4 border-end'>
                  <ul>
                    <li> <TiTick className='discount' /> 100% Customer Satisfaction</li>
                    <li> <TiTick className='discount'/> Free Collection & Delivery</li>
                    <li> <TiTick className='discount'/> Affordable Price</li>
                    <li> <TiTick className='discount'/> Best Quality</li>
                  </ul>
                </div>
                <div>
                  <div className='ps-4'>
                    <div className='fa  contact-icon mt-4 fw-bolder p-3 text-center'>

                      <FaPhoneAlt />
                    </div>
                    <address> Call for Quality Services</address>
                    <h5>(+237) 679-048-674</h5>
                  </div>
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

        <div className="container">
          <div className="row my-5">
              <div>
                <div className='d-flex justify-content-between'>
                  <div className="d-flex p-4 bg-black my-3 me-1">
                    <FaPhoneAlt />
                    <div>
                      <h4>Save Time & Money</h4>
                      <p>
                        No more wasted time driving to the laundromats, we pickup and deliver for free!
                      </p>
                    </div>                 
                  </div>
                  <div className="d-flex p-5 bg-white">
                    <FaPhoneAlt />
                    <div>
                      <h4>Pay Online in Seconds</h4>
                      <p>
                       Manage your Press account and billing online from your smartphone or computer                          
                      </p>
                    </div>
                  </div>
                  <div className="d-flex p-5 bg-white">
                    <FaPhoneAlt />
                    <div>
                      <h4> Eco-Friendly</h4>
                      <p>
                        We use safe and clean perc-free solvents, so you, and the Earth, can look good.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </div>
        </section>
        {/* our procedures */}
        <section>
          <HomeProcedures />
        </section>
        
        {/* our features */}
        <section>
          <div>
            <HomeFeatures />
          </div>
        </section>

        {/* testimonial */}
        <section>
          <div className='container'>
            <div className='my-5 text-center'>
            <h5 className=' discount icon-title'>[ Out Testimonials ]</h5>
            <h3>WHAT OUR CLIENTS SAY</h3>
            </div>
            <div>
              <TestimonialSection />
            </div>

          </div>
        </section>

        {/* price table */}
        <div>
        <section>
          <div >
            <div className='home-body'>
            <div>
              <PriceTable />
              </div> 

        
            </div>
          </div>
        </section>
        </div>

        {/* special order */}
        <section>
          <div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center mt-5">
                <img src={laundryMachine} alt="washing Machine" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12 pt-5 text-center">
                <h3>Special Order</h3>
                <p>
                  We are offering a special order for our customers.
                  <br />
                </p>
                  <button type="button" className='px-4 py-3 border-0 mt-2 order-now' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ORDER NOW</button>
                  <div>
                    <Modal /> 
                  </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>


    </>
  )
}

export default Home
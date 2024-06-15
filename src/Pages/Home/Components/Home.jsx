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

const Home = () => {

  return (
    <>
      <div>
          <div className='contact-bg'>
            <div className='container '>
              <div className=''>
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
        <div>
          <div className=''>
            <div className='container'>
            <div className='my-5 text-center'>
                <h3 className='fw-bold'>OUR SERVICES</h3>
              </div>
            <HomeService />
            </div>
          </div>
        </div>  
        <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="w-75">
                <div>
                  <p className='text-head'>Services you will love</p>
                  <h2>WE ARE PASSIONATE ABOUT LAUNDRY</h2>
                  <p>
                    We are professionals in the laundry and dry cleaning business, which
                    means we always stay up to date on the latest technologies, cleaning
                    methods, and solutions for dealing with stains or delicate fabrics.
                  </p>
                  <p>
                    Plus, we maintain the highest standards of business integrity by
                    following local and national regulations and environmental safety
                    rules. We are passionate about changing the way you think about
                    laundry!
                  </p>
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
              <p className='text-head'>Testimonials</p>
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
                  <Link to="order" className="btn btn-primary mt-3 order-now">Order Now</Link>
                </p>
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
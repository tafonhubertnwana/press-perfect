import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import bannerContent from '../../../Assets/images/HomeImage/home_laundry_services.png';
import laundryMachine from '../../../Assets/images/HomeImage/laundry_washing_machine.png';
import laundry from '../../../Assets/images/HomeImage/laundry.webp';
import PriceTable from './PriceTable';
import HomeService from './HomeService';
import TestimonialSection from './TestimonialSection';
import HomeFeatures from './HomeFeatures';
import HomeProcedures from './HomeProcedures';
import Modal from './Modal';
import { TiTick } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import Features from './Features';
import NavBar from '../../../Components/Header/NavBar';
import Approach from '../../../Components/Approach';
import ChooseUs from '../../../Components/ChooseUs';


const Home = () => {

  return (
    <>
    
      <div className='position-relative'>
        <div>
        <div className='bar'>
          <NavBar />
        </div>
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
                    <div className='fa  contact-icon mt-4 fw-bolder p-3 text-center mb-4'>

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
          <div>
            <Features />
          </div>
        </div>
        </section>
        {/* our procedures */}
        <section>
          <HomeProcedures />
        </section>
        <section className='section-history pt-5'>
          <div className='d-flex'>
            <div className='section-image'>
              <img src={laundry} alt="" style={{height: '600px'}}/>
            </div>
            <div className='left-sect'>
              <div className='bg-white p-5'>
                <div className='icon-title discount'>
                  [ laundry service for your business! ]
                </div>
                <h4 className='title-head pt-2'>
                  Commercial Laundry Service
                </h4>
                <div>
                  <p>
                  Large corporations have determined that there is a financial benefit to outsourcing back office work because it saves money. Allowing us to do your laundry is cost effective and will allow you and your employees to focus on your core business. We offer smart solutions to meet your commercial laundry needs. Our Commercial Laundry Clients include:                  </p>

                 <div className="d-flex justify-content-center">
                  <div className=''>
                    <ul>
                      <li> <TiTick className='discount' /> Salons & Spas</li>
                      <li> <TiTick className='discount'/> Restaurants and Gaterers</li>
                      <li> <TiTick className='discount'/> Religious Organizations</li>
                      <li> <TiTick className='discount'/> Daycare centers</li>
                    </ul>
                  </div>
                  <div className=''>
                    <ul>
                      <li> <TiTick className='discount' /> Assisted Living / Nursing Homes</li>
                      <li> <TiTick className='discount'/> Hotels & Motels</li>
                      <li> <TiTick className='discount'/>Nail Salons</li>
                      <li> <TiTick className='discount'/> Althletic Facilities / Gyms</li>
                    </ul>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* our features */}
        <section className='container pt-5'>
          <div>
            <div >
              <div className="text-center">
                <div className='discount icon-title'>[ important Information ]</div>
                <h4 className="title-head py-2">Trusted Laundry Service</h4>
              </div>
              <div className='d-flex justify-content-around'>
                  <div>
                    <button type='button' className='px-5 py-3 bg-white'>Our Approach</button>
                  </div>
                  <div>
                    <button type='button'  className='px-5 py-3 bg-white'>Ouestion / Answers</button>
                  </div>
                  <div>
                    <button type='button'  className='px-5 py-3 bg-white'>Why Choose Us</button>
                  </div>
              </div>
              <Approach />
              <ChooseUs />
            </div>
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
      <div className='mt-5'>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.649151446558!2d9.275848674490856!3d4.173113219901949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613259651819a3%3A0x754210aa92e62bff!2sBuea!5e0!3m2!1sen!2scm!4v1716235049726!5m2!1sen!2scm" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </div>
    </>
  )
}

export default Home
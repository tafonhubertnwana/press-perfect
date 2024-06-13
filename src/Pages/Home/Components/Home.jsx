import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

import bannerContent from '../../../Assets/images/HomeImage/home_laundry_services.png';
import hw1 from '../../../Assets/images/HomeImage/hw-1.png';
import hw2 from '../../../Assets/images/HomeImage/hw-2.png';
import laundryWash from '../../../Assets/images/HomeImage/laundry-wash.png';
import deliveryGuy from '../../../Assets/images/HomeImage/delivery-guy.png';
import homeIcon7 from '../../../Assets/images/HomeImage/home-icons07.png';
import homeIcon4 from '../../../Assets/images/HomeImage/home-icons04.png';
import homeIcon5 from '../../../Assets/images/HomeImage/home-icons05.png';
import homeIcon6 from '../../../Assets/images/HomeImage/home-icons06.png';
import homeIcon8 from '../../../Assets/images/HomeImage/home-icons08.png';
import homeIcon9 from '../../../Assets/images/HomeImage/home-icons09.png';
import cardImg from '../../../Assets/images/HomeImage/home-img02.jpg';

import laundryMachine from '../../../Assets/images/HomeImage/laundry_washing_machine.png'
import PriceTable from './PriceTable';
import HomeService from './HomeService';
import TestimonialSection from './TestimonialSection';

const Home = () => {

  const WorkSteps = [
    {
      title: "You Order",
      image: hw1,
      number: '01',
      description: "Bag up all your dirty clothes",
    },
    {
      title: "We Collect",
      image: hw2,
      number: '02',
      description: "Collection from your doorStep",
    },
    {
      title: "We Clean",
      image: laundryWash,
      number: '03',
      description: "Wash, dry and fold your items",
    },
    {
      title: "We Return",
      image: deliveryGuy,
      number: '04',
      description: "Order will be delivered in 24hrs",
    },
  ]

  const Features = [
    {
      icon: homeIcon4,
      title: "Personalized Experience",
      description:
        "We take utmost care of your clothes, the laundry is done according to the cloth type and the nature of stains."
    },
    {
      icon: homeIcon5,
      title: "Affordable Pricing",
      description:
        "Prices that suit your pocket is one of our priority. You can choose one of our 4 pricing plans according to your needs."
    },
    {
      icon: homeIcon6,
      title: "Convenience",
      description:
        "With just a tap of a button your laundry gets done. giving your leisure time to spend with family and friends."
    },
    {
      icon: homeIcon7,
      title: "Quality",
      description:
        "we use the best in class products, to assur that your favorite clothes are always there for you to wear."
    },
    {
      icon: homeIcon8,
      title: "Express Delivery",
      description:
        "Forget to wash your clothes for interview/business meeting, never mind. With our super express delivery, we would get your laundry done in less than 8 hours.",
    },
    {
      icon: homeIcon9,
      title: "Instant Order Update",
      description:
        "Regular updates of your order. to help you keep a track f your laundry and plan accordingly."
    }

  ]

  




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
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog  modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">
                             Request Callback
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">
                                  Recipient:
                                </label>
                                <input type="text" className="form-control" id="recipient-name" />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">
                                  Message:
                                </label>
                                <textarea
                                  className="form-control"
                                  id="message-text"
                                  defaultValue={""}
                                />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer justify-content-center">
                            <button type="button" className='px-5 py-3 request-btn bg-white mt-2'>
                              REQUEST
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
                <h3 className='fw-bold'>SERVICES</h3>
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
          <div className="container">
            <div className='my-5 text-center'>
              <p className='text-head'>In 4 easy steps</p>
              <h3>How PressPerfect works</h3>
            </div>
            <div className='row justify-content-center'>
              {WorkSteps.map((step, index) => (
                  <div
                  key={index}
                  className="col-12 col-sm-6 col-md-3  text-center"
                >
                  <div>
                    <p>{step.title}</p>
                  </div>
                  <div className='rounded-50 img img-border mx-auto d-flex align-items-center justify-content-center '>
                    <img src={step.image} alt=""  />
                  </div>
                  <span className='img-span fw-bold'>{step.number}</span>
                  <div className='mt-4'>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
              </div>
          </div>
        </section>
        
        {/* our features */}
        <section>
          <div>
            <div className="home-body my-5">
              <div className="container my-5">
                <div className="py-5 lh-1">
                  <p className='text-head'>Our features</p>
                  <h3>WHY CHOOSE US</h3>
                </div>
                <div className="row g-4">
                {Features.map((feature, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                      <div className="d-flex justify-content-between p-4">
                        <div className='pe-4'>
                          <img src={feature.icon} alt="" />
                        </div>
                        <div>
                          <p>{feature.title}</p>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
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
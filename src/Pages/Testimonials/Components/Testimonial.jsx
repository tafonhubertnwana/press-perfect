import React from 'react';
import imgTest from '../../../Assets/images/HomeImage/testimonials-img03.jpg';
import './testimonial.css'

const Testimonial = () => {
  return (
    <>
      <div>

        <div className='contact-bg'>
          <div className='container '>
            <div className='text-white'>
              <h1>TESTIMONIALS</h1>
              <p>&nbsp;</p>
              <p>
              We are proud and humbled by the clients that take the time to let us know <br></br>when we have done something good for their business and personal laundry <br></br>needs. We are honored to share their stories with future clients.
              </p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row mt-5'>

            <div className='d-flex justify-content-between '>
              <div className='testimonial-body  col me-1 p-4'>
                <div className='d-flex pb-2'>
                  <img src={imgTest} alt="" className='img-testimonial me-3'/>
                  <div className='lh-1'>
                    <h4>Olivia Jones</h4>
                    <span>Client</span>
                  </div>
                </div>
                <div>
                  <p >Having known and done business with Press Perfect over the past 2 years, I am pleased to recommend Press Perfect Laundry Services to the entire multi-family community for their first-class services.</p>
                </div>
              </div>
              <div className='testimonial-body  col mx-3 p-4'>
                <div className='d-flex pb-2 '>
                  <img src={imgTest} alt="" className='img-testimonial me-3'/>
                  <div className='lh-1'>
                    <h4>Olivia Jones</h4>
                    <span>Client</span>
                  </div>
                </div>
                <div>
                  <p>The new machines have had very few problems and their services are always done in a timely fashion. Our residents have been thrilled with the Press Perfect team and we look forward to a long relationship with this first-class organization.</p>
                </div>
              </div>
              <div className='testimonial-body  col ms-1 p-4'>
                <div className='d-flex pb-2'>
                  <img src={imgTest} alt="" className='img-testimonial me-3'/>
                  <div className='lh-1'>
                    <h4>Olivia Jones</h4>
                    <span>Client</span>
                  </div>
                </div>
                <div>
                  <p>Over the last Two years they have proven, on several occasions that they are knowledgeable, prompt, and concerned about my immediate situation. I personally encourage any business associated with their laundry services.</p>
                </div>
              </div>
              
              
              
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row mt-5'>

            <div className='d-flex justify-content-between '>
              <div className='testimonial-body  col me-1 p-4'>
                <div className='d-flex pb-2'>
                  <img src={imgTest} alt="" className='img-testimonial me-3'/>
                  <div className='lh-1'>
                    <h4>Olivia Jones</h4>
                    <span>Client</span>
                  </div>
                </div>
                <div>
                  <p>Having known and done business with Press Perfect over the past 3 years, I am pleased to recommend PRess Perfect Laundry Services to the entire multi-family community for their first-class services</p>
                </div>
              </div>
              <div className='testimonial-body  col mx-3 p-4'>
                <div className='d-flex pb-2 '>
                  <img src={imgTest} alt="" className='img-testimonial me-3'/>
                  <div className='lh-1'>
                    <h4>Olivia Jones</h4>
                    <span>Client</span>
                  </div>
                </div>
                <div>
                  <p>I have yet to come across a company as professional, hardworking & service oriented as Press Perfect. It has been a pleasure working with a company that works hard to keep their flawless standard.</p>
                </div>
              </div>
              <div className='testimonial-body  col ms-1 p-4'>
                <div className='d-flex pb-2'>
                  <img src={imgTest} alt="" className='img-testimonial me-3'/>
                  <div className='lh-1'>
                    <h4>Olivia Jones</h4>
                    <span>Client</span>
                  </div>
                </div>
                <div>
                  <p>Hey guys! Thanks for coordinating all of the shipments and deliveries. Everything arrived on schedule and is in good shape. you guys do a fantastic job staying on top of everything for us. Thank you!</p>
                </div>
              </div>
              
              
              
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row mt-5'>

            <div className='d-flex justify-content-between '>
              <div className='testimonial-body  col me-1 p-4'>
                <div className='d-flex pb-2'>
                  <img src={imgTest} alt="" className='img-testimonial me-3'/>
                  <div className='lh-1'>
                    <h4>Olivia Jones</h4>
                    <span>Client</span>
                  </div>
                </div>
                <div>
                  <p>Second to none for convenience, quality & turnaround time. Great prices and services. Amazing support team behind the service, if you ever need it. No more having to save up piles of dry cleaning to make it worth taking out.</p>
                </div>
              </div>
              <div className='testimonial-body  col mx-3 p-4'>
                <div className='d-flex pb-2 '>
                  <img src={imgTest} alt="" className='img-testimonial me-3'/>
                  <div className='lh-1'>
                    <h4>Olivia Jones</h4>
                    <span>Client</span>
                  </div>
                </div>
                <div>
                  <p>I absolutely love Press Perfect. The lockers are 24/7, making dropping off and picking up dry cleaning quick and easy. The quality of the dry cleaning is great. Overall, a great service that I’d highly recommend to anyone!</p>
                </div>
              </div>
              <div className='testimonial-body  col ms-1 p-4'>
                <div className='d-flex pb-2'>
                  <img src={imgTest} alt="" className='img-testimonial me-3'/>
                  <div className='lh-1'>
                    <h4>Olivia Jones</h4>
                    <span>Client</span>
                  </div>
                </div>
                <div>
                  <p>Our residents love their high-quality services and eco-friendly garment bags, there’s absolutely no cost to the building, and they manage our guest suite linens too! They even provide 24/7 live customer support.</p>
                </div>
              </div>
              
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
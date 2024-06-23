import React from 'react';
import imgTest from '../../../Assets/images/HomeImage/testimonials-img03.jpg';
import './testimonial.css'

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "Having known and done business with Press Perfect over the past 2 years, I am pleased to recommend Press Perfect Laundry Services to the entire multi-family community for their first-class services."
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "The new machines have had very few problems and their services are always done in a timely fashion. Our residents have been thrilled with the Press Perfect team and we look forward to a long relationship with this first-class organization."
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "Over the last Two years they have proven, on several occasions that they are knowledgeable, prompt, and concerned about my immediate situation. I personally encourage any business associated with their laundry services."
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "Having known and done business with Press Perfect over the past 3 years, I am pleased to recommend PRess Perfect Laundry Services to the entire multi-family community for their first-class services"
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "I have yet to come across a company as professional, hardworking & service oriented as Press Perfect. It has been a pleasure working with a company that works hard to keep their flawless standard."
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "Hey guys! Thanks for coordinating all of the shipments and deliveries. Everything arrived on schedule and is in good shape. you guys do a fantastic job staying on top of everything for us. Thank you!"
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "Second to none for convenience, quality & turnaround time. Great prices and services. Amazing support team behind the service, if you ever need it. No more having to save up piles of dry cleaning to make it worth taking out."
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "I absolutely love Press Perfect. The lockers are 24/7, making dropping off and picking up dry cleaning quick and easy. The quality of the dry cleaning is great. Overall, a great service that I'd highly recommend to anyone!"
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "Our residents love their high-quality services and eco-friendly garment bags, there's absolutely no cost to the building, and they manage our guest suite linens too! They even provide 24/7 live customer support."
    }
  ];

  return (
    <>
      <div>
        <div className='contact-bg '>
          <div className='container'>
            <div className='text-center text-sm-start'>
              <h1>TESTIMONIALS</h1>
              <p>&nbsp;</p>
              <p>
                We are proud and humbled by the clients that take the time to let us know <br />
                when we have done something good for their business and personal laundry <br />
                needs. We are honored to share their stories with future clients.
              </p>
            </div>
          </div>
        </div>

        <div className='testimonial-bg'>

          <div className='container'>
            <div className='row py-5 g-4'>
              {testimonials.map((testimonial, index) => (
                <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
                  <div className='testimonial-body p-4'>
                    <div className='d-flex pb-2'>
                      <img src={imgTest} alt="" className='img-testimonial me-3' />
                      <div className='lh-1'>
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.title}</span>
                      </div>
                    </div>
                    <div>
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import homeIcon1 from '../../../Assets/images/HomeImage/home-icons01.png';
import homeIcon2 from '../../../Assets/images/HomeImage/home-icons02.png'
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
import imgTest from '../../../Assets/images/HomeImage/testimonials-img03.jpg';



const Home = () => {

  const WorkSteps = [
    {
      title: "You Order",
      image: hw1,
      description: "Bag up all your dirty clothes",
    },
    {
      title: "We Collect",
      image: hw2,
      description: "Collection from your doorStep",
    },
    {
      title: "We Clean",
      image: laundryWash,
      description: "Wash, dry and fold your items",
    },
    {
      title: "We Return",
      image: deliveryGuy,
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

  const testimonials = [
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
      text: "I absolutely love Press Perfect. The lockers are 24/7, making dropping off and picking up dry cleaning quick and easy. The quality of the dry cleaning is great. Overall, a great service that I'd highly recommend to anyone!"
    },
  ]





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
                <button><Link to='more'>READ MORE</Link></button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <div className="w-100 p-4 text-center">
              <img src={homeIcon2} alt="" />
              <div className="w-50 mx-auto">
                <h5>Dry Cleaning Services</h5>
                <p>Students and local residents love on our reliable dry cleaning services for the fast, accurate, top quality results.</p>
                <button ><Link to='more'>READ MORE</Link></button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
       
      <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="w-75">
              <div>
                <p>Services you will love</p>
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
            <p>In 4 easy steps</p>
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
                <div>
                  <img src={step.image} alt="" className='rounded-50 border p-3' />
                </div>
                <div>
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
                <p>Our features</p>
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
            <p>Testimonials</p>
            <h3>WHAT OUR CLIENTS SAY</h3>
          </div>
          <div className='row mt-5 g-4'>
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
      </section>

      {/* price table */}
      <section>
        <div >
          <div className='home-body'>
            <div className='container'>
              <div className='my-5 text-center'>
                <p>Our Pricing Table</p>
                <h3>AFFORDABLE PRICES</h3>
              </div>
              <div>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
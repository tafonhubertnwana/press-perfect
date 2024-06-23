import React from 'react'
import HomeService from '../../Home/Components/HomeService'
import bannerContent from '../../../Assets/images/HomeImage/home_laundry_services.png';
import washAndFold from '../../../Assets/images/HomeImage/wash-and-fold-2.jpg';
import homeDelivery from '../../../Assets/images/HomeImage/home-delivery.png';
import { SlArrowRight } from "react-icons/sl";


const Services = () => {


  return (
    <div>
      <div className='contact-bg'>
          <div className='container'>
            <div className='text-center text-sm-start text-white'>
              <h1>SERVICES</h1>
              <p>&nbsp;</p>
              <p>
                PressPrefect provides the clients with th most convenient laundry services <br/> possible! Available in apartment buildings, condos, offices, fitness facilities and <br/> other locations throughout the city, our company strives to make doing your <br/> laundry so easy.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=''>
            <div className='container'>
            <div className='my-5 text-center'>
                <div className='discount icon-title'>[ Our Services ]</div>
                <h4 className='title-head pt-2'>Dry Cleaning & Laundry,
                Free Delivery</h4>
              </div>
            <HomeService />
            </div>
          </div>
        </div>
        <section>
        <div className="container sticky">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className="w-75">
                <div>
                  <p className='text-head'>Services you will love</p>
                  <h2>COIN LAUNDRY</h2>
                  <p>
                    PressedPerfect provides superd, eco-friendly dry cleaning and laundering for your garments.
                  </p>
                  <p>
                    You simply toes your items in a locker and they come back clean. pressed and nicely packaged. hanging in the locker waiting for you.
                  </p>

                <div>
                <div className="pt-2">
                <ul className="">
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
                    Laundered Shirts
                  </li>
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
                    Specialty items
                  </li>
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
                    Leather items
                  </li><li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
Fur Trim                  </li>
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
Pillowcases and Duvet Covers                  </li>

                </ul>
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
        </section>
        
        <section>
        <div className="container sticky">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div>
                <img src={washAndFold} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="w-75">
                <div>
                  <p className='text-head'>Services you will love</p>
                  <h2>WASH & FOLD</h2>
                  <p>
                    Wash & Fold is just like going to the laundromat, except we do all the work for you.
                  </p>
                  <p>
                    First your cothes are sorted and colors are separated. Then we wash and dry your cothes in separate machines. Next, your clothes are folded and delivered.
                  </p>

                <div>
                <div className="pt-2">
                <ul className="">
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
                    Wash & Fold
                  </li>
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
                    Detergent
                  </li>
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
                    Bleach
                  </li><li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>Fabric Softener                 </li>
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span> Dryer Sheets                </li>

                </ul>
              </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section>
        <div className="container sticky">
          <div className="row align-items-center ">
            
            <div className="col-md-6">
              <div className="w-75">
                <div>
                  <p className='text-head'>Services you will love</p>
                  <h2>HOME DELIVERY</h2>
                  <p>
                   Dont't trust your delicates to just anyone! We created the most detailed order tracking for your garments in the industry.
                  </p>
                  <p>
                    This isn't our first day, we have been at this a long time and perfected every aspect of the process along the journey!
                  </p>

                <div>
                <div className="pt-2">
                <ul className="">
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
                    7 Days a Week
                  </li>
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
                    Scheduled Time
                  </li>
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
                    Safe Delivery
                  </li><li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
Personal Attention                  </li>
                  <li className="">
                    <span className="fa pe-3"><SlArrowRight /></span>
Quick Performance                 </li>

                </ul>
              </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src={homeDelivery} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        </section>

        
    </div>
  )
}

export default Services
import React from 'react'
import HomeService from '../../Home/Components/HomeService'
import bannerContent from '../../../Assets/images/HomeImage/home_laundry_services.png';
import washAndFold from '../../../Assets/images/HomeImage/wash-and-fold-2.jpg';
import homeDelivery from '../../../Assets/images/HomeImage/home-delivery.png';
import { SlArrowRight } from "react-icons/sl";
import NavBar from '../../../Components/Header/NavBar';
import laundry from '../../../Assets/images/HomeImage/laundry.webp';
import { TiTick } from "react-icons/ti";
import OurFeatures from './OurFeatures';
import OurServices from './OurServices';



const Services = () => {


  return (
    
      <div className='position-relative'>
        <div className='bar'>
          <NavBar />
        </div>
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
       <section>
        <div className="container">
          <div className='text-center'>

            <div className='discount icon-title'>[ Our Services ]</div>
            <h4 className="title-head">Dry Cleaning & Laundry, <br/>
            Free Delivery</h4>
          </div>
          <div>
            <OurServices />
          </div>
        </div>
       </section>
       <section>
          <div>
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
          </div>
       </section>
       <div className="container">
          <div className='text-center'>

            <div className='discount icon-title'>[ Why you'll love us ]</div>
            <h4 className="title-head">Our Features</h4>
          </div>
          <div >
            <OurFeatures/>
          </div>
        </div>

       <section>

       </section>
          
        </div>
        

        
   
  )
}

export default Services
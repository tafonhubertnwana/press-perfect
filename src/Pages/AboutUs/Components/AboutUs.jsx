import React from 'react'
import bannerContent from '../../../Assets/images/HomeImage/home_laundry_services.png';
import HomeProcedures from '../../Home/Components/HomeProcedures';
import HomeFeatures from '../../Home/Components/HomeFeatures';
import OurTeam from '../../Team/Component/OurTeam';


const AboutUs = () => {
  return (
    <div>
      <div>
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
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-4 text-center">
              <div>
                <h3><span className='discount'>Our</span> Vision</h3>
                <p>
                  PressPerfect is the smart laundry solution to all your laundry woes. We provide affordable laundry service that is designed around you and your needs. Getting the laundry done has never been so easy!
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div>
                <h3> <span className='discount'>Our</span> Mission</h3>
                <p>
                  Today, Laundry Care's unique personalized laundry experience is available nationwide. Our clients love the quality, reliability, and flexibility of our personalized laundry service over the regular, old wash & fold model.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div>
                <h3><span className='discount'>Our</span> Strengths</h3>
                <p>
                  PressPerfect offers the personalized, quality service you want with the flexibility you need, all at an affordable price. Simply tell us your preferences and your Laundress returns it right to your door in 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      <section>
        <div>
          <HomeFeatures />
        </div>
      </section>

      <section>
        <div className = 'home-body pt-5'> 
          <OurTeam />
        </div>
      </section>
        
    </div>
  )
}

export default AboutUs
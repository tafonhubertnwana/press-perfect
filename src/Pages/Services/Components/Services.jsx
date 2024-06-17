import React from 'react'
import HomeService from '../../Home/Components/HomeService'

const Services = () => {
  return (
    <div>
      <div className='contact-bg'>
          <div className='container'>
            <div className='text-center text-sm-start'>
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
                <h3> <span className='discount'>Our</span> Services</h3>
              </div>
            <HomeService />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services
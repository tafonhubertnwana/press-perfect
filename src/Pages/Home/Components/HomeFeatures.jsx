import React from 'react'
import homeIcon7 from '../../../Assets/images/HomeImage/home-icons07.png';
import homeIcon4 from '../../../Assets/images/HomeImage/home-icons04.png';
import homeIcon5 from '../../../Assets/images/HomeImage/home-icons05.png';
import homeIcon6 from '../../../Assets/images/HomeImage/home-icons06.png';
import homeIcon8 from '../../../Assets/images/HomeImage/home-icons08.png';
import homeIcon9 from '../../../Assets/images/HomeImage/home-icons09.png';


const HomeFeatures = () => {

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
    <div>
      <div className='py-3 py-md-5 wave-white-gray position-relative'>

        <div className="home-body ">
                <div className="container">
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
    </div>
  )
}

export default HomeFeatures
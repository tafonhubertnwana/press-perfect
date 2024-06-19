import React from 'react'
import order from '../../../Assets/images/HomeImage/hw-1.png';
import deliveryBox from '../../../Assets/images/HomeImage/hw-2.png';
import laundryWash from '../../../Assets/images/HomeImage/laundry-wash.png';
import deliveryGuy from '../../../Assets/images/HomeImage/delivery-guy.png';

const HomeProcedures = () => {

  const WorkSteps = [
    {
      title: "You Order",
      image: order,
      number: '01',
      description: "Bag up all your dirty clothes",
    },
    {
      title: "We Collect",
      image: deliveryBox,
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


  return (
    <div>
      <div className="container">
            <div className='my-5 text-center'>
              <p className='text-head'>In 4 easy steps</p>
              <h3>How PressPerfect works</h3>
            </div>
            <div className='row justify-content-center g-4'>
              {WorkSteps.map((step, index) => (
                  <div
                  key={index}
                  className="col-12 col-sm-6 col-md-3  text-center"
                >
                  <div>
                    <h5>{step.title}</h5>
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
    </div>
  )
}

export default HomeProcedures
import React from 'react'
import { FaPhone, FaRegClock, FaMapLocationDot } from "react-icons/fa6";
import logo from '../../Assets/images/HomeImage/MainLogo.png'
import NavBar from './NavBar';

const Head = () => {
  const infoItems = [
    {
      icon: <FaMapLocationDot />,
      title: 'Address',
      content: 'Central-Market Buea'
    },
    {
      icon: <FaPhone />,
      title: 'Call us now',
      content: '(+237) 679-048-674'
    },
    {
      icon: <FaRegClock />,
      title: 'Opening Hours',
      content: '8:00 - 18:00 Mon-Sat'
    }
  ];

  return (
    <>
    <div>
      <div className='container'>
        <div className="row d-flex py-4 align-items-center">
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center">
              <img src={logo} alt="" className="img-fluid" />
              <div className="ps-2 d-flex flex-column lh-1">
                <span className='fs-5 fw-bolder'>PRESS PREFECT</span>
                <span>Your Laundry Center</span>
              </div>
            </div>
            {infoItems.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3 d-flex align-items-center">
                <div className="fa py-2 pe-4 fs-4 fw-bolder">
                  {item.icon}
                </div>
                <div className='d-flex flex-column'>
                  <span>{item.title}</span>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <NavBar />
        </div>
    </div>
    </>
  )
}

export default Head
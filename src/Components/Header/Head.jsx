import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import logo from '../../Assets/images/HomeImage/logo.png'
import NavBar from './NavBar';

const Head = () => {
  return (
    <div className='container'>
      <div className="row d-flex pt-3">
          <div className="col-md-6 col-lg-3  d-flex">
            <img src={logo} alt="" />
            <div className="ps-2 d-flex flex-column lh-1">
              <span className='fs-5 fw-bolder'>PRESS PREFECT</span>
              <span>Your Laundry Center</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="fa py-2 pe-4 fs-4 fw-bolder">
              <FaMapLocationDot />
            </div>
            <div className='d-flex flex-column'>
              <span>Address</span>
              <span>Central-Market Buea</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="fa py-2 pe-4 fs-4 fw-bolder">             
              <FaPhone />
            </div>
            <div className='d-flex flex-column'>
              <span>Call us now</span>
              <span>(+237) 679-048-674</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ">
            <div className="fa py-2 pe-4 fs-4 fw-bolder">              
              <FaRegClock />
            </div>
            <div className='d-flex flex-column'>
              <span>Opening Hours</span>
              <span>8:00 - 18:00 Mon-Sat</span>
            </div>
          </div>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    
  )
}

export default Head
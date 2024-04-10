import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import logo from '../../Assets/images/HomeImage/logo.png'
import NavBar from './NavBar';

const Head = () => {
  return (
    <div className="border-bottom py-4">
    <div className='container'>
      <div className="row ">
          <div className="col-md-6 col-lg-3 d-flex">
            <img src={logo} alt="" />
            <div className="mx-2">
              <h4>PRESS PREFECT</h4>
              <span>Your Laundry Center</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="d-flex ">
              <FaMapLocationDot />
            </div>
            <div className='d-flex flex-column'>
              <span className='text-primary'>Address</span>
              <span>Central-Market Buea</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="d-flex">
              <FaPhone />
            </div>
            <div className='d-flex flex-column'>
              <span>Call us now</span>
              <span>(+237) 679-048-674</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="d-flex">
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





    </div>
  )
}

export default Head
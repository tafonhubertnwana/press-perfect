import React from "react";
import logo from '../../Assets/images/HomeImage/logo.png'
import {Link} from 'react-router-dom';
import { SlArrowRight } from "react-icons/sl";
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className= "container">
          <div className=" d-flex justify-content-between py-5 mt-5">
            <div>
              <div className="d-flex mb-3">
                <img src={logo} alt="" className=""/>
                <div className="ps-2 d-flex flex-column lh-1">
                  <span className='fs-5 fw-bolder'>PRESS PREFECT</span>
                  <span className="footer-detail">Your Laundry Center</span>
                </div>
              </div>
              <div>
                <p className="footer-detail">We offer a complete range od textile care services, backed by <br></br>the latest technical knowledge and resources</p>
              </div>
              <div>
                <p>
                  Receive news right on your email
                </p>
                <form action="" method="post">
                  <div>
                    <input type="text" placeholder="Enter your e-mail here *" className="form-control mb-3"/>
                    <button type="submit" className="btn btn-primary px-5 py-3">SUBSCRIBE</button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <h5 >Information</h5>
              <div className="pt-2">
                <ul className="footer-ul ">
                  <li className="footer-li" >
                    <span className="fa pe-2"><SlArrowRight /></span>
                    <Link to="contact">Contact Us</Link>
                  </li>
                  <li className="footer-li" >
                    <span className="fa pe-2"><SlArrowRight /></span>
                    <Link to="aboutus">About Us</Link>
                  </li>
                  <li className="footer-li" >
                    <span className="fa pe-2"><SlArrowRight /></span>
                    <Link to="#">News & Articles</Link>
                  </li>
                  <li className="footer-li" >
                    <span className="fa pe-2"><SlArrowRight /></span>
                    <Link to="privacy">Privacy Policy</Link>
                  </li>
                  <li className="footer-li" >
                  < span className="fa pe-2"><SlArrowRight /></span>
                    <Link to="#">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>Services</h5>
              <div className="pt-2">
                <ul className="footer-ul">
                  <li className="footer-li" >
                    <span className="fa   pe-2"><SlArrowRight /></span>
                    <Link to="#">Drop off Laundry</Link>
                  </li>
                  <li className="footer-li"  >
                    <span className="fa pe-2"><SlArrowRight /></span>
                    <Link to="#">Free Pick-Up and Delivery</Link>
                  </li>
                  <li className="footer-li" >
                    <span className="fa pe-2"><SlArrowRight /></span>
                    <Link to="#">Eco-Friendly Products</Link>
                  </li>
                  <li className="footer-li" >
                    <span className="fa pe-2"><SlArrowRight /></span>
                    <Link to="#">Fast & High Quality</Link>
                  </li>
                  <li className="footer-li" >
                    <span className="fa pe-2"><SlArrowRight /></span>
                    <Link to="#">Self Service and Press Perfect</Link>
                  </li>
                </ul>
              </div>
            </div>


          </div>

          
        

          <div className="footer-copyright">
            <p >Copyright &copy; 2024, All Rights Reserved.</p>
          <div/>
        </div>
      </div>
      </div>
      </>  
      
   
  )
}

export default Footer;
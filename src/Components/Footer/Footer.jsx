import React from "react";
import logo from '../../Assets/images/HomeImage/MainLogo.png'
import {Link} from 'react-router-dom';
import { SlArrowRight } from "react-icons/sl";
import './footer.css'

const Footer = () => {
  const informationLinks = [
    { label: 'Contact Us', path: 'contact' },
    { label: 'About Us', path: 'aboutus' },
    { label: 'News & Articles', path: '#' },
    { label: 'Privacy Policy', path: 'privacy' },
    { label: 'Terms of Use', path: '#' },
  ];

  const serviceLinks = [
    { label: 'Drop off Laundry', path: '#' },
    { label: 'Free Pick-Up and Delivery', path: '#' },
    { label: 'Eco-Friendly Products', path: '#' },
    { label: 'Fast & High Quality', path: '#' },
    { label: 'Self Service and Press Perfect', path: '#' },
  ];

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="d-flex align-items-center mb-3">
                <img src={logo} alt="" className=""/>
                <div className="ps-2 d-flex flex-column lh-1">
                  <span className='fs-5 fw-bolder'>PressedPerfect</span>
                  <span className="footer-detail">Your Laundry Center</span>
                </div>
              </div>
              <p className="footer-detail">We offer a complete range od textile care services, backed by the latest technical knowledge and resources</p>
              <div>
                <p>
                  Receive news right on your email 
                </p>
                <form action="" method="post">
                  <div>
                    <input type="text" placeholder="Enter your e-mail here * " className="form-control mb-3 "/>
                    <button type="submit" className="px-5 py-3 footer-subscribe border-0">SUBSCRIBE</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h5>Information</h5>
              <div className="pt-2">
                <ul className="footer-ul">
                  {informationLinks.map((link, index) => (
                    <li key={index} className="footer-li">
                      <span className="fa pe-3"><SlArrowRight /></span>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h5>Services</h5>
              <div className="pt-2">
                <ul className="footer-ul">
                  {serviceLinks.map((link, index) => (
                    <li key={index} className="footer-li">
                      <span className="fa pe-3"><SlArrowRight /></span>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p>Copyright &copy; 2024, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
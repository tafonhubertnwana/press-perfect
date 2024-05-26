import React from 'react';
import { Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import './contact.css'

const Contact = () => {

  const contactItems = [
    {
      id: 1,
      icon: <FaMapLocationDot />,
      contactTitle: "Address",
      contactDetails: "Central-Market Buea "
    },
    {
      id: 2,
      icon: <FaPhone />,
      contactTitle: "Phone:",
      contactDetails: "(+237) 679-048-674 "
    },
    {
      id: 3,
      icon: <HiOutlineMailOpen />,
      contactTitle: "E-Mail:",
      contactDetails: "info@Yoursite.com "
    },
    {
      id: 4,
      icon: <FaRegClock />,
      contactTitle: "Opening Hours",
      contactDetails: "8:00 - 18:00 Mon-Sat "
    },
  ]

  return (
    <>
      <div>
        <div className='contact-bg'>
          <div className='container '>
            <div className='text-white'>
              <h1>CONTACTS</h1>
              <p>&nbsp;</p>
              <p>
                if you do not find the answer to your questions related to our laundry <br></br>services, feel free to contact us. We are here to help
              </p>
            </div>
          </div>
        </div>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-6'>
              {
                contactItems.map((contact) => (
                  <div className="mb-5 d-flex" key={contact.id}>
                    <div className="fa pe-5 contact-icon fw-bolder">
                      {contact.icon}
                    </div>
                    <div className='d-flex flex-column'>
                      <span>{contact.contactTitle}</span>
                      <span>&nbsp;</span>
                      <span>{contact.contactDetails}</span>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='col-md-6'>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.649151446558!2d9.275848674490856!3d4.173113219901949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613259651819a3%3A0x754210aa92e62bff!2sBuea!5e0!3m2!1sen!2scm!4v1716235049726!5m2!1sen!2scm" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
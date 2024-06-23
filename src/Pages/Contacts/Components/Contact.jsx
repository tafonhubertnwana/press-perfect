import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import './contact.css'

const Contact = () => {

  const [name , setName] = useState("")
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState("")

  const contactItems = [
    {
      id: 1,
      icon: <FaMapLocationDot />,
      contactTitle: "Post Address",
      contactDetails: "Central-Market Buea "
    },
    {
      id: 2,
      icon: <FaPhone />,
      contactTitle: "Contact Phone",
      contactDetails: "(+237) 679-048-674 "
    },
    {
      id: 3,
      icon: <HiOutlineMailOpen />,
      contactTitle: "E-Mail Address",
      contactDetails: "info@Yoursite.com "
    },
    {
      id: 4,
      icon: <FaRegClock />,
      contactTitle: "Opening Hours",
      contactDetails: "Mon-Sat 08:00 AM - 06:00 PM"
    },
  ]

  return (
    <>
      <div>
        <div className='contact-bg' >
          <div className='container '>
            <div className='position-absolute top-50'>
              <h1 className='header-title'>Contact Us</h1>
            </div>
          </div>
        </div>
        <div className='contact-info'>
          <div className='container my-5'>
            <div className=''>
              <div className=' text-center mt-5 '>
                <h5 className='discount icon-title'>[ Get in Touch With Us ]</h5>
                <h1 className='title-head'>Contact Information</h1>
                <p className='py-3'>
                  if you do not find the answer to your questions related to our laundry <br></br>services, feel free to contact us. We are here to help
                </p>
              </div>
              <div className=' d-flex justify-content-evenly '>
                {
                  contactItems.map((contact) => (
                    <div className="mb-5 p-5 " key={contact.id}>
                      <div className="fa text-center contact-icon mt-4 fw-bolder ">
                        <div className=''>
                          <div className=' p-3 text-center '>
                            {contact.icon}
                          </div>
                        </div>
                      </div>
                      <div className='text-center' >
                        <h5 className='d-flex flex-column lh-3 fw-bold mt-3'>{contact.contactTitle}</h5>
                        
                        <address>{contact.contactDetails}</address>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
              
          </div>
          <div className='position-relative container '>
            <div className='mb-5 position-relative'>
              <div className='text-center'>
                <h4 className='title-head '>Get in Touch. <br/> We're Here to Help.</h4>
                <p className='pt-4'>We look forward to helping you create and maintain a clean, <br/> healthy environment that’s as enjoyable as it is functional</p>
              </div>
              <div className=' w-50 '>
                <form action="https://formspree.io/f/xeqyydyy" className='' method="POST">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username" 
                      aria-label="Your Name"
                      id="exampleInputEmail1"
                      aria-describedby="basic-addon1"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}

                    />
                    <div className=' py-2 d-flex justify-content-between'> 

                      <input
                        type="email"
                        className="form-control pe-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 

                      />
                      <input
                        type="text"
                        className="form-control"
                        
                        
                        placeholder='Phone'
                        name="phone"
                        
                      />
                    </div>
                    
                      <textarea 
                      className="form-control bg-transparent" 
                      id="subject" 
                      name="subject" 
                      placeholder="Write something.." 
                      style={{height:200}}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}

                      >
                      </textarea>
                      <div className='text-center'>   
                        <button type="submit" className="btn btn-primary btn btn-primary mt-3 order-now ">
                          Submit
                        </button>
                      </div>
                  </div>     
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.649151446558!2d9.275848674490856!3d4.173113219901949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613259651819a3%3A0x754210aa92e62bff!2sBuea!5e0!3m2!1sen!2scm!4v1716235049726!5m2!1sen!2scm" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
import React from 'react'
import Question from './Question'
import NavBar from '../../../Components/Header/NavBar'
import QuestionSection from './QuestionSection'

const Faq = () => {
  return (
    <>
      <div>
        
        <div className='position-relative'>
        <div className='bar'>
          <NavBar />
        </div>
            <div className='contact-bg' >
              <div className='container '>
                <div className='position-absolute top-50 left-50'>
                  <h1 className='header-title '>FAQ</h1>
                 
                  
                </div>
                <div>
                </div>
              </div>
            </div>

            <section>
              <div>
                <div className="container">
                  <div>
                      <div className='mt-5 text-center'>
                        <p className=' discount icon-title'>[ Frequently Asked Question ]</p>
                        <h4 className=' title-head mb-4'> Reliable Answers to Our Most<br/>
                        Common Questions </h4>
                        <p className="r ">
                        We can save you money on soap, water, heating and electricity. So you can enjoy even more <br/>of the things you love. Our prices are simple and affordable.                        </p>
                      </div>
                  </div>
                  <div>
                    <div>
                      <h6 className='fw-bold'>Your First Order!</h6>
                    </div>
                    <Question />
                  </div>

                  <div className='mt-5'>
                    <QuestionSection />
                  </div>
                  <section>
                    <div className="mt-5">
                      <h2 className='text-center fw-bold '> Ask Your Question</h2>
                      <p className='text-center '>We look forward to helping you create and maintain a clean, healthy <br/> environment that’s as enjoyable as it is functional.</p>
                    </div>
                    <div className="col-md-9 col-lg-8">
                      <form
                        className="form-default form-default__top text-center"
                        id="faq-form"
                        method="post"
                        noValidate="novalidate"
                        action="#"
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="row row-align-col">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="E-mail"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name="phonenumber"
                                className="form-control"
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            rows={4}
                            className="form-control"
                            placeholder="Your question"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <div className="checkbox-group">
                            <input type="checkbox" id="checkBox01" name="checkbox" />{" "}
                            <label htmlFor="checkBox01">
                              <span className="check" /> <span className="box" /> I accept the
                              privacy and terms.
                            </label>
                          </div>
                        </div>
                        <div className="tt-btn tt-btn__wide">
                          <span className="mask">Send Question</span>{" "}
                          <button type="submit" className="button">
                            Send Question
                          </button>
                        </div>
                      </form>
                    </div>

                  </section>
                </div>
              </div>
            </section>
        </div>
      </div>
    </>
  )
}

export default Faq
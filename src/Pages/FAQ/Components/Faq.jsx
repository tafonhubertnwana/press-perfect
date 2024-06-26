import React from 'react'
import Question from './Question'
import NavBar from '../../../Components/Header/NavBar'

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

                  <section>
                    <div className="mt-5">
                      <h2 className='text-center fw-bold '> Ask Your Question</h2>
                      <p className='text-center '>We look forward to helping you create and maintain a clean, healthy <br/> environment that’s as enjoyable as it is functional.</p>
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
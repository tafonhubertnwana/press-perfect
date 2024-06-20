import React from 'react'
import Question from './Question'

const Faq = () => {
  return (
    <>
      <div>
        <div>
            <div className='contact-bg' style={{paddingTop: 50, paddingBottom: 50}}>
              <div className='container '>
                <div className='text-white text-sm-start'>
                  <h1 className='fw-bold'>FAQ</h1>
                 
                  
                </div>
                <div>
                </div>
              </div>
            </div>

            <section>
              <div>
                <div className="container">
                  <div>
                      <div className='mt-5'>
                        <p className='text-center discount fw-bold'>[ Frequently Asked Question ]</p>
                        <h2 className='text-center fw-bold'> Reliable Answers to Our Most
                        Common Questions </h2>
                        <p className="text-center ">
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
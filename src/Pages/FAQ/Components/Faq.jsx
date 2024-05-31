import React from 'react'
import Question from './Question'

const Faq = () => {
  return (
    <>
      <div>
        <div>
            <div className='contact-bg'>
              <div className='container '>
                <div className='text-white'>
                  <h1>FAQ</h1>
                  <p>&nbsp;</p>
                  <p className=''>
                    Do you have questions about the laundry process? Read the articles below to <br/> learn tips and tricks from PressPrefect about how to make the laundry process <br/> easier.
                  </p>
                </div>
                <div>
                </div>
              </div>
            </div>

            <section>
              <div>
                <div className="container">
                  <div>

                    <p className="my-5">
                      if you do not find the answer to your question below, feel free to contact us. We are here to help
                    </p>
                  </div>
                  <div>
                    <Question />
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    </>
  )
}

export default Faq
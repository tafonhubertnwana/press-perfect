import React from 'react'
import { Link } from 'react-router-dom';
import Modal from './Modal';


const PriceTable = () => {
  return (
    <>
      <div className='container'>
              <div className=' text-center'>
                <p className='pt-5 text-head'>Our Pricing Table</p>
                <h3 className='pb-4'>AFFORDABLE PRICES</h3>
              </div>
              <div>
                <div className='row'>
                  <div className='col-md-3 col-sm-6 mb-4 '>
                    <div className='border bg-white h-100'>
                      <div className="m-5 text-center table-hover">
                        <h3>Regular Bag</h3>
                        <h1 className='test-modal'>$10</h1>
                        <div>
                          <p>5 lbs</p>
                          <hr />
                          <p>Home Delivery</p>
                          <hr />
                          <p>Ironing</p>
                          <hr />
                          <p>Perfume</p>
                          <hr />
                          <p>1 Day Finish</p>
                        </div>
                      </div>
                      <div className='text-center mb-3'>
                        <button className='px-5 py-3 request-btn bg-white ' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">  ORDER NOW</button>
                        <div>
                          <Modal />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-6 mb-4 table-hover'>
                    <div className='border bg-white h-100'>
                      <div className="m-5 text-center">
                        <h3>Medium Bag</h3>
                        <h1 className='test-modal'>$25</h1>
                        <div>
                          <p>10 lbs</p>
                          <hr />
                          <p>Home Delivery</p>
                          <hr />
                          <p>Ironing</p>
                          <hr />
                          <p>Perfume</p>
                          <hr />
                          <p>1 Day Finish</p>
                        </div>
                      </div>
                      <div className='text-center mb-3'>
                        <button className='px-5 py-3 request-btn bg-white'> ORDER NOW</button>
                        <div>
                          <Modal />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-6 mb-4 table-hover'>
                    <div className='border bg-white h-100'>
                      <div className="m-5 text-center">
                        <h3>Large Bag</h3>
                        <h1 className='test-modal'>$45</h1>
                        <div>
                          <p>25 lbs</p>
                          <hr />
                          <p>Home Delivery</p>
                          <hr />
                          <p>Ironing</p>
                          <hr />
                          <p>Perfume</p>
                          <hr />
                          <p>1 Day Finish</p>
                        </div>
                      </div>
                      <div className='text-center mb-3'>
                        <button className='px-5 py-3 request-btn bg-white' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"> ORDER NOW</button>
                        <div>
                          <Modal />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-6 mb-4 table-hover'>
                    <div className='border bg-white h-100'>
                      <div className="m-5 text-center">
                        <h3>XLarge Bag</h3>
                        <h1 className='test-modal'>$99</h1>
                        <div>
                          <p>50 lbs</p>
                          <hr />
                          <p>Home Delivery</p>
                          <hr />
                          <p>Ironing</p>
                          <hr />
                          <p>Perfume</p>
                          <hr />
                          <p>1 Day Finish</p>
                        </div>
                      </div>
                      <div className='text-center mb-3'>
                        <button className='px-5 py-3 request-btn bg-white ' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"> ORDER NOW</button>
                        <div>
                          <Modal />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default PriceTable
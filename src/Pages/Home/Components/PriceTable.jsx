import React from 'react'
import cardImg from '../../../Assets/images/HomeImage/home-img02.jpg';
import { Link } from 'react-router-dom';


const PriceTable = () => {
  return (
    <>
      <section>
        <div >
          <div className='home-body'>
            <div className='container'>
              <div className='my-5 text-center'>
                <p className='pt-5'>Our Pricing Table</p>
                <h3>AFFORDABLE PRICES</h3>
              </div>
              <div>
                <div className='row'>
                  <div className='col-md-3 col-sm-6 mb-4'>
                    <div className='border bg-white h-100'>
                      <div className="m-5 text-center">
                        <h3>Regular Bag</h3>
                        <h1>$10</h1>
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
                        <button className='btn btn-primary'> <Link to='order'>ORDER NOW</Link></button>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-6 mb-4'>
                    <div className='border bg-white h-100'>
                      <div className="m-5 text-center">
                        <h3>Medium Bag</h3>
                        <h1>$25</h1>
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
                        <button className='btn btn-primary'> <Link to='order'>ORDER NOW</Link></button>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-6 mb-4'>
                    <div className='border bg-white h-100'>
                      <div className="m-5 text-center">
                        <h3>Large Bag</h3>
                        <h1>$45</h1>
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
                        <button className='btn btn-primary'> <Link to='order'>ORDER NOW</Link></button>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-6 mb-4'>
                    <div className='border bg-white h-100'>
                      <div className="m-5 text-center">
                        <h3>XLarge Bag</h3>
                        <h1>$99</h1>
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
                        <button className='btn btn-primary'> <Link to='order'>ORDER NOW</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* blog section */}

            <div className="container">
              <div className='text-center my-4'>
                <h2>FROM THE BLOG</h2>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 mb-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={cardImg} className="card-img-top" alt="..." />
                    <div className="card-body justify-content-center">
                      <h5 className="card-title">7 Sept 2021</h5>
                      <h5 className="card-title">When to Skip the Fabric Softener</h5>
                      <p className="card-text">
                        Fabric softeners are great for making clothes and linens feel soft
                        and fluffy. But before you wash another load, read this. There are
                        types of clothing that should NEVER touch these products.
                      </p>
                      <Link to="blog" className="btn btn-primary" >
                      READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={cardImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">7 Sept 2021</h5>
                      <h5 className="card-title">
                        How to Get Rid of Smoke Odor on Clothes
                      </h5>
                      <p className="card-text">
                        We all know that smell. That stale ashtray stink that follows you
                        home and seems to engulf everything you touch. Yuck! How do you
                        get that unmistakable smoke stench out of your clothes?.
                      </p>
                      <Link to="blog" className="btn btn-primary" >
                      READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={cardImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">7 Sept 2021</h5>
                      <h5 className="card-title">20 Ways to Use Old, Mismatched Socks</h5>
                      <p className="card-text">
                        For ages, man has tried to solve the problem of mismatched socks.
                        It seems when a perfectly good pair of socks goes into the laundry
                        basket…only one of them makes it out of the dryer.
                      </p>
                      <Link to="blog" className="btn btn-primary" >
                      READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PriceTable
import React from 'react'
import PriceTable from '../../Home/Components/PriceTable'
import FullPrice from './FullPrice'

const Pricing = () => {
  return (
    <>
      <div className='contact-bg'>
        <div className='container container-fluid-xl'>
          <div className=''>
            <h1 className='header-title pt-5'>Prices</h1>
            <p>&nbsp;</p>
            <p className='text-white'>
              Our prices suit your pocket is one of our priority. You can choose one of our 4 <br/> pricing plans according to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* price table */}
      <section>
        <div className="home-body">
          <PriceTable />
        </div>
      </section>

      {/* full price table */}
      <section>
        <FullPrice />
      </section>
    </>
  )
}

export default Pricing
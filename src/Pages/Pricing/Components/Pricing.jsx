import React from 'react'
import PriceTable from '../../Home/Components/PriceTable'
import FullPrice from './FullPrice'

const Pricing = () => {
  return (
    <>
      <div className='contact-bg' style={{paddingTop: 50, paddingBottom: 50}}>
        <div className='container'>
          <div className='text-white text-center text-sm-start'>
            <h2 className='fw-bold'>PRICING</h2>
            <p>&nbsp;</p>
            <p>
              Our prices suit your pocket is one od our priority. You can choose one of our 4 <br/> pricing plans according to your needs.
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
import React, {useState} from 'react'
import FullApparel from './FullApparel'
import Apparel from './Apparel'
import PopularItems from './PopularItems'

const FullPrice = () => {

  const [activeComponent, setActiveComponent] = useState('approach');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <div className="container">
        <div className='mt-5 pb-3 justify-content-center text-center'>
          <h4 className=' discount icon-title'>[ Our Service Prices ]</h4>
          <h4 className=' title-head '>FULL PRICE TABLE</h4>
          <p className='  pt-3'>
          Laundry service pricing is volume based. Dry cleaning is priced by item type. <br/> Give us a call to review pricing and services today!
          </p>
        </div>
        <section>
        <div className="d-flex justify-content-around">
        <div>
          <button
            type="button"
            className={`px-5 py-3 bg-white ${activeComponent === 'popular' ? 'active' : ''}`}
            onClick={() => handleButtonClick('popular')}
          >
            Most Popular Items
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`px-5 py-3 bg-white ${activeComponent === 'apparel' ? 'active' : ''}`}
            onClick={() => handleButtonClick('apparel')}
          >
            Full Apparel List
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`px-5 py-3 bg-white ${activeComponent === 'full_apparel' ? 'active' : ''}`}
            onClick={() => handleButtonClick('full_apparel')}
          >
           Full Apparel List
          </button>
        </div>
      </div>
          {activeComponent === 'popular' && <PopularItems />}
          {activeComponent === 'apparel' && <Apparel />}
          {activeComponent === 'full_apparel' && <FullApparel />}  
        </section>

        <section>
          <div className="justify-content-center mt-5">
            <div className="text-center discount">
              <h5>Get discount 10% if you join our membership</h5>
              <h5>Leather items (1-2 weeks finish)</h5>
              <h5>Don't worry if your items not listed here. Send Us Message and we will take care of it</h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FullPrice
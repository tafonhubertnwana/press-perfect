import React from 'react';
import OurTeam from './OurTeam';
import NavBar from '../../../Components/Header/NavBar';

const Team = () => {


  return (
  
      <div className='position-relative'>
        <div className='bar'>
          <NavBar />
        </div>
      <div className='contact-bg' >
        <div className='container'>
          <div className=' text-white text-center text-sm-start'>
            <h1>OUR TEAM</h1>
            <p>&nbsp;</p>
            <p>
              PressPerfect is all about the hard working and dedicated teamwork<br/> involving the owners and staff. For a first-class laundry service, this <br/> is the team that makes it happen.
            </p>
          </div>
        </div>
      </div>

      {/* our Team */}
      <section>
        <div>
          <OurTeam />
        </div>
        
      </section>
    </div>
  )
}

export default Team
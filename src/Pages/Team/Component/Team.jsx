import React from 'react';
import OurTeam from './OurTeam';

const Team = () => {


  return (
    <div>
      <div className='contact-bg' style={{paddingTop: 50, paddingBottom: 50}}>
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
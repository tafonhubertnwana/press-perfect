import React from 'react';
import Team1 from '../../../Assets/images/HomeImage/team-img04.jpg'

const Team = () => {

  const Teams = [
    {
      image: Team1,
      name: "Grand Bitz",
      role: "Consulting Engineer"
    },
    {
      image: Team1,
      name: "Grand Cyrion",
      role: "Controller"
    },
    {
      image: Team1,
      name: "Rozita",
      role: "Customer Relations Manager"
    },
    {
      image: Team1,
      name: "Grand Levi",
      role: "Operations Specialist"
    }
  ]


  return (
    <div>
      <div className='contact-bg'>
        <div className='container'>
          <div className='text-white'>
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

        <div className="container">
          <div>
            <div className="container text-center mt-5">
              <h3>OUR TEAM</h3>
            </div>
          </div>
          <div className="row justify-content-center my-5">
          {Teams.map((member, index) => (
              <div className='col-12 col-md-6 col-lg-3' key={index}>
                <img src={member.image} alt="" className='team justify-content-center'/>
                <div className=' mt-3'>
                  <h3 className='h5 '>{member.name}</h3>
                  <p className='mb-0'>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
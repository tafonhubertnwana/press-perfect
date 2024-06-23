import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Team1 from '../../../Assets/images/HomeImage/team-img04.jpg';

const OurTeam = () => {
  const Teams = [
    {
      image: Team1,
      name: 'Grand Bitz',
      role: 'Consulting Engineer',
    },
    {
      image: Team1,
      name: 'Grand Cyrion',
      role: 'Controller',
    },
    {
      image: Team1,
      name: 'Rozita',
      role: 'Customer Relations Manager',
    },
    {
      image: Team1,
      name: 'Grand Levi',
      role: 'Operations Specialist',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
   
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container">
        <div>
          <div className="container text-center mt-5 w-50">
            <div className=' discount icon-title'>[ Our Team ]</div>

            <h4 className='title-head'>Laundry Specialists</h4>

            <p>Our team’s goal each day is to earn your business with each visit and to make
            your experience with us the absolute best.</p>
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <Slider {...settings}>
            {Teams.map((member, index) => (
              <div
                className="d-flex flex-column align-items-center p-4"
                key={index}
              >
                <div className=' position relative'>

                  <img
                    src={member.image}
                    alt=""
                    className=" team img-fluid rounded-circle"
                    style={{ width: '200px', height: '200px' }}
                  />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="h5 team-name  ">{member.name}</h4>
                  <p className="mb-0">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
import imgTest from '../../../Assets/images/HomeImage/testimonials-img03.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "I have yet to come across a company as professional, hardworking & service oriented as Press Perfect. It has been a pleasure working with a company that works hard to keep their flawless standard."
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "Hey guys! Thanks for coordinating all of the shipments and deliveries. Everything arrived on schedule and is in good shape. you guys do a fantastic job staying on top of everything for us. Thank you!"
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "I absolutely love Press Perfect. The lockers are 24/7, making dropping off and picking up dry cleaning quick and easy. The quality of the dry cleaning is great. Overall, a great service that I'd highly recommend to anyone!"
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "Over the last Two years they have proven, on several occasions that they are knowledgeable, prompt, and concerned about my immediate situation. I personally encourage any business associated with their laundry services."
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "Having known and done business with Press Perfect over the past 3 years, I am pleased to recommend PRess Perfect Laundry Services to the entire multi-family community for their first-class services"
    },
    {
      name: 'Olivia Jones',
      title: 'Client',
      text: "I have yet to come across a company as professional, hardworking & service oriented as Press Perfect. It has been a pleasure working with a company that works hard to keep their flawless standard."
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
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
    <div className='row my-5'>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4' key={index}>
            <div className='testimonial-body p-4 m-3'>
              <div className='d-flex pb-2'>
                <img src={imgTest} alt="" className='img-testimonial me-3' />
                <div className='lh-1'>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.title}</span>
                </div>
              </div>
              <div>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
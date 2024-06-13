
import imgTest from '../../../Assets/images/HomeImage/testimonials-img03.jpg';


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
  ]


  return (
    <div className='row my-5 g-4'>
      
        {testimonials.map((testimonial, index) => (
          <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
            <div className='testimonial-body p-4'>
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
      
    </div>
  );
};

export default TestimonialSection;
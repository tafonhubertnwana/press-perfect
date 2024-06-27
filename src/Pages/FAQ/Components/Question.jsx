
import React from 'react'

const Question = () => {
  return (
    <div>
      <div className="row">
  <div className="col-md-6">
    <div className="js-accordeon accordeon-01 init-accordeon">
      <div className="tt-item">
        <div className="tt-item__title">
          What should I prepare for the first pickup?
        </div>
        <div className="tt-item__content" style={{ display: "none" }}>
          We aim to collect your clothes, clean them to a professional standard
          and get them back to you all within 48 hours. If you’d prefer we went
          a little slower then that’s not a problem – just let us know when you
          want your clothes back.
        </div>
      </div>
      <div className="tt-item">
        <div className="tt-item__title">
          Can I add extra items to my order when you collect…
        </div>
        <div className="tt-item__content">
          We aim to collect your clothes, clean them to a professional standard
          and get them back to you all within 48 hours. If you’d prefer we went
          a little slower then that’s not a problem – just let us know when you
          want your clothes back.
        </div>
      </div>
      <div className="tt-item">
        <div className="tt-item__title">Can I order by phone or email?</div>
        <div className="tt-item__content">
          We aim to collect your clothes, clean them to a professional standard
          and get them back to you all within 48 hours. If you’d prefer we went
          a little slower then that’s not a problem – just let us know when you
          want your clothes back.
        </div>
      </div>
      <div className="tt-item">
        <div className="tt-item__title">Where are my clothes cleaned?</div>
        <div className="tt-item__content">
          We aim to collect your clothes, clean them to a professional standard
          and get them back to you all within 48 hours. If you’d prefer we went
          a little slower then that’s not a problem – just let us know when you
          want your clothes back.
        </div>
      </div>
    </div>
  </div>
  <div className="divider-xs d-block d-md-none" />
  <div className="col-md-6">
    <div className="js-accordeon accordeon-01 init-accordeon">
      <div className="tt-item">
        <div className="tt-item__title">
          Why do women’s blouses cost more than men’s shirt?
        </div>
        <div className="tt-item__content" style={{ display: "none" }}>
          We aim to collect your clothes, clean them to a professional standard
          and get them back to you all within 48 hours. If you’d prefer we went
          a little slower then that’s not a problem – just let us know when you
          want your clothes back.
        </div>
      </div>
      <div className="tt-item">
        <div className="tt-item__title">
          Are there any fabrics you don't clean?
        </div>
        <div className="tt-item__content">
          We aim to collect your clothes, clean them to a professional standard
          and get them back to you all within 48 hours. If you’d prefer we went
          a little slower then that’s not a problem – just let us know when you
          want your clothes back.
        </div>
      </div>
      <div className="tt-item">
        <div className="tt-item__title">
          What if my clothes are heavily stained?
        </div>
        <div className="tt-item__content">
          We aim to collect your clothes, clean them to a professional standard
          and get them back to you all within 48 hours. If you’d prefer we went
          a little slower then that’s not a problem – just let us know when you
          want your clothes back.
        </div>
      </div>
      <div className="tt-item">
        <div className="tt-item__title">How can I pay for the services?</div>
        <div className="tt-item__content">
          We aim to collect your clothes, clean them to a professional standard
          and get them back to you all within 48 hours. If you’d prefer we went
          a little slower then that’s not a problem – just let us know when you
          want your clothes back.
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Question




































// import React from 'react';
// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';

// const Question = () => {

//   const faqData = [
//     {
//       question: 'What are your business hours?',
//       answer: 'Our laundromat is open 24 hours a day, 7 days a week, for your convenience.'
//     },
//     {
//       question: 'Do you offer laundry pickup and delivery services?',
//       answer: 'Yes, we offer convenient pickup and delivery services for our customers. You can schedule a pickup online or by calling our office.'
//     },
//     {
//       question: 'How much do your laundry services cost?',
//       answer: 'Our prices are competitive and vary based on the size of the load and the type of wash. You can view our full price list on our website or ask one of our staff members for more information.'
//     },
//     {
//       question: 'Do you have machines for large items like comforters and blankets?',
//       answer: 'Yes, we have several extra-large capacity washers and dryers specifically designed to handle bulky items like comforters, blankets, and sleeping bags.'
//     },
//     {
//       question: 'Can I drop off my laundry and have it washed and folded?',
//       answer: "Absolutely! We offer a full-service laundry option where you can drop off your dirty clothes, and we'll wash, dry, and fold them for you. Just let us know when you'd like to pick it up."
//     },
//     {
//       question: 'Do you have any eco-friendly or sustainable laundry options?',
//       answer: "Yes, we're committed to sustainability and offer eco-friendly detergents and energy-efficient machines. We also use a water reclamation system to minimize our water usage."
//     }
//   ];



//   return (
//     <>
//       <div>
//       <h1>Frequently Asked Questions</h1>
//       <Accordion>
//         {faqData.map((faq, index) => (
//           <AccordionItem key={index}>
//             <AccordionItemHeading>
//               <AccordionItemButton>{faq.question}</AccordionItemButton>
//             </AccordionItemHeading>
//             <AccordionItemPanel>
//               <p>{faq.answer}</p>
//             </AccordionItemPanel>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </div>
//     </>
//   )
// }

// export default Question
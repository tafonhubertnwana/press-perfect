import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Question = () => {

  const faqData = [
    {
      question: 'What are your business hours?',
      answer: 'Our laundromat is open 24 hours a day, 7 days a week, for your convenience.'
    },
    {
      question: 'Do you offer laundry pickup and delivery services?',
      answer: 'Yes, we offer convenient pickup and delivery services for our customers. You can schedule a pickup online or by calling our office.'
    },
    {
      question: 'How much do your laundry services cost?',
      answer: 'Our prices are competitive and vary based on the size of the load and the type of wash. You can view our full price list on our website or ask one of our staff members for more information.'
    },
    {
      question: 'Do you have machines for large items like comforters and blankets?',
      answer: 'Yes, we have several extra-large capacity washers and dryers specifically designed to handle bulky items like comforters, blankets, and sleeping bags.'
    },
    {
      question: 'Can I drop off my laundry and have it washed and folded?',
      answer: "Absolutely! We offer a full-service laundry option where you can drop off your dirty clothes, and we'll wash, dry, and fold them for you. Just let us know when you'd like to pick it up."
    },
    {
      question: 'Do you have any eco-friendly or sustainable laundry options?',
      answer: "Yes, we're committed to sustainability and offer eco-friendly detergents and energy-efficient machines. We also use a water reclamation system to minimize our water usage."
    }
  ];



  return (
    <>
      <div>
      <h1>Frequently Asked Questions</h1>
      <Accordion>
        {faqData.map((faq, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>{faq.question}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{faq.answer}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    </>
  )
}

export default Question
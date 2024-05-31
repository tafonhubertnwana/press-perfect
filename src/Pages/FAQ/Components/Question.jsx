import React from 'react';
import { useState } from 'react';
import Qand from './Qand';

const Question = () => {

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'How do I place an order?',
      answer: 'To place your first order, simply visit our website and create an account – you also have the option of signing in through Facebook or Google+. Once your account is set up, you can place an order whenever you like by clicking the ‘Place Order’ tab on our website.'
    },
    {
      id: 2,
      question: 'Where shall I drop-off my clothes?',
      answer: "Please choose while placing your order if you would like us to pick it up from your doorstep or concierge. We service Apartments, Condos, Businesses, and houses. Please place your laundry in a disposable bag and label it with your name and address or if it's your second order, then you would have a reusable garment bag from PressPerfect that you can reuse."
    },
    {
      id: 3,
      question: 'How will I know that my laundry has been dry-cleaned and delivered?',
      answer: 'PressPerfect will send you an email or SMS to let you know your clean, fresh laundry has been dropped off as per your request. That can be either your doorstep at your house, condo or apartment building or at your concierge.'
    },
    {
      id: 4,
      question: "What if I don't hav a concierge?",
      answer: "If you do not find the answer to your question below, feel free to contact us. We are here to help. A scheduling system will pop-up and you can schedule a pick-up time from your doorstep."
    },
    {
      id: 5,
      question: "My concierge doesn't accept laundry. What shall I do?",
      answer: "While placing your order, please choose a doorstep pick-up if your concierge doesn't accept you dropping it off."
    },
    {
      id: 6,
      question: 'What shall I do if I have a big order with many bags?',
      answer: "Please send us an email to inform us that you have a big order so that we can send a large vehicle to pick up your bag. Please state in your email your name, location, and a number of bags so we can send the appropriate car."
    },
    {
      id: 7,
      question: 'How will I know that my laundry has been picked -up?',
      answer: "Once you place your order, PressPerfect gets notified that your laundry is ready for pick-up. Our team will swing by to collect it from your concierge or doorstep (as per your chosen option) and we will change the status of your order to 'Picked-up' in your account."
    }
  ]);


  return (
    <>

      <div className="question-answer-section ">
      {questions.map((question) => (
        <Qand 
          key={question.id}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
    </>
  )
}

export default Question
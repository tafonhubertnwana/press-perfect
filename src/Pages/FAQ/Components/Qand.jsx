import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


const Qand = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="row">

    <div className="question col-12">
      <h5 className='pt-4' onClick={toggleAnswer}> 
      {isOpen ? <FaMinus className='fa-question'/> : <FaPlus className='fa-question' /> }  {question}</h5>
      
      <div className={`answer ${isOpen ? 'open' : 'closed'}`}>
        <p className='pt-4'>
          {answer}
        </p>  
        </div>
    </div>
    </div>
  )
}

export default Qand
import React from 'react';


const Question = () => {


  return (
    <>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How do I place an order?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      To place your first order, simply visit our website and create an account – you also have the option of signing in through Facebook or Google+. Once your account is set up, you can place an order whenever you like by clicking the ‘Place Order’ tab on our website.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Where shall I drop-off my clothes?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Please choose while placing your order if you would like us to pick it up from your doorstep or concierge. We service Apartments, Condos, Businesses, and houses. Please place your laundry in a disposable bag and label it with your name and address or if it's your second order, then you would have a reusable garment bag from PressPerfect that you can reuse.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How will I know that my laundry has been dry-cleaned and delivered?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      PressPerfect will send you an email or SMS to let you know your clean, fresh laundry has been dropped off as per your request. That can be either your doorstep at your house, condo or apartment building or at your concierge.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      What if I don't hav a concierge?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      If you do not find the answer to your question below, feel free to contact us. We are here to help. A scheduling system will pop-up and you can schedule a pick-up time from your doorstep.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      My concierge doesn't accept laundry. What shall I do?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      While placing your order, please choose a doorstep pick-up if your concierge doesn't accept you dropping it off.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      What shall I do if I have a big order with many bags?
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Please send us an email to inform us that you have a big order so that we can send a large vehicle to pick up your bag. Please state in your email your name, location, and a number of bags so we can send the appropriate car.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      How will I know that my laundry has been picked -up?      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Once you place your order, PressPerfect gets notified that your laundry is ready for pick-up. Our team will swing by to collect it from your concierge or doorstep (as per your chosen option) and we will change the status of your order to 'Picked-up' in your account.
      </div>
    </div>
  </div>

</div>
    </>
  )
}

export default Question
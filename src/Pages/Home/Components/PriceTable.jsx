import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const PricingHeader = () => {
  return (
    <div className=" text-center">
      <p className="pt-5 text-head">Our Pricing Table</p>
      <h3 className="pb-4">AFFORDABLE PRICES</h3>
    </div>
  );
};

const PricingCard = ({ title, price, features }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4 table-hover ">
      <div className="border bg-white h-100">
        <div className="m-5 text-center">
          <h3>{title}</h3>
          <h1 className="test-modal">${price}</h1>
          <div>
            {features.map((feature, index) => (
              <div key={index}>
                <p>{feature}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-3">
          <button
            className="px-5 py-3 request-btn bg-white"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            ORDER NOW
          </button>
          <div>
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceTable = () => {
  const priceCards = [
    {
      title: 'Regular Bag',
      price: 10,
      features: ['5 lbs', 'Home Delivery', 'Ironing', 'Perfume', '1 Day Finish'],
    },
    {
      title: 'Medium Bag',
      price: 25,
      features: ['10 lbs', 'Home Delivery', 'Ironing', 'Perfume', '1 Day Finish'],
    },
    {
      title: 'Large Bag',
      price: 45,
      features: ['25 lbs', 'Home Delivery', 'Ironing', 'Perfume', '1 Day Finish'],
    },
    {
      title: 'XLarge Bag',
      price: 99,
      features: ['50 lbs', 'Home Delivery', 'Ironing', 'Perfume', '1 Day Finish'],
    },
  ];

  return (
    <>
      <div className="container">
        <PricingHeader />
        <div className="row">
          {priceCards.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              price={card.price}
              features={card.features}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceTable;
// Card.js
import React from 'react';
import './../Componant/animetedcard.css';
import Animeimg from './../Assets/Screenshot 2024-09-23 114810.png'
const Card = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h1>Make Money, Risk-Free</h1>
        <p>You pay for fulfillment only when you make a sale</p>
        <div className="profit-calculation">
          <div className="calculation-row">
            <span>You sell a t-shirt</span>
            <span>$30</span>
          </div>
          <div className="calculation-row">
            <span>You pay for its production</span>
            <span>$12</span>
          </div>
          <hr />
          <div className="calculation-row profit">
            <span>Your profit</span>
            <span>$18</span>
          </div>
        </div>
        <button className="start-selling">Start selling</button>
        <p className="footer-text">100% Free to use · 900+ Products · Largest print network</p>
      </div>
      <div className="card-image">
        <img src={Animeimg} alt="Illustration" />
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import './Order.css';
import images from '../../constants/images';

const Order = () => (
  <div className="order-container" id='about'>
    <h1 className="order-header">Order From Your Favorite App Today!</h1>
    <div className="companies-container">
      <div className="company-card">
      <img src={images.company1} alt="app__logo" />
      </div>
      <div className="company-card">
      <img src={images.company2} alt="app__logo" />
      </div>
      <div className="company-card">
      <img src={images.company3} alt="app__logo" />

      </div>
      <div className="company-card">
      <img src={images.company4} alt="app__logo" />
      </div>
    </div>
    <div className='line'></div>
  </div>
);

export default Order;

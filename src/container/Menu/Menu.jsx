import React from 'react';
import './Menu.css';
import images from '../../constants/images';

const Menu = () => (
  <div className="menu-container" id ='menu'>
    <div className="menu-header">
      <h1 className="menu-title">Browse our menu</h1>
      <div className="menu-buttons">
        <button className="menu-button order">Order Online</button>
        <button className="menu-button book">Book a Table</button>
      </div>
    </div>
    <div className="menu-cards">
      
        <div key='1' className="card">
        <img src={images.menu1} alt="app__logo" />
          <h2 className="card-title">Main Dishas</h2>
          <p className="card-description">Card description goes here. This is a brief description of the card.</p>
          <a href="#" className="card-link">Explore menu &gt;</a>
        </div>
        <div key='2' className="card">
        <img src={images.menu2} alt="app__logo" />
          <h2 className="card-title">Breakfast</h2>
          <p className="card-description">Card description goes here. This is a brief description of the card.</p>
          <a href="#" className="card-link">Explore menu &gt;</a>
        </div>
        <div key='3' className="card">
        <img src={images.menu3} alt="app__logo" />
          <h2 className="card-title">Drinks</h2>
          <p className="card-description">Card description goes here. This is a brief description of the card.</p>
          <a href="#" className="card-link">Explore menu &gt;</a>
        </div>
        <div key='4' className="card">
        <img src={images.menu4} alt="app__logo" />
          <h2 className="card-title">Desserts</h2>
          <p className="card-description">Card description goes here. This is a brief description of the card.</p>
          <a href="#" className="card-link">Explore menu &gt;</a>
        </div>
      
    </div>
  </div>
);

export default Menu;

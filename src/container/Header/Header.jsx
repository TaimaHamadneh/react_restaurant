import React from 'react';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h5 className="app__header-h1">Your Favorite Food <span style={{ color: '#F5004F' }}>Delivered Hot &</span> Fresh </h5>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <div className="app__buttons">
        <button type="button" className="reservice__button">Reservice</button>
        <button type="button" className="order__button">Order Online</button>
      </div>
    </div>
    

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

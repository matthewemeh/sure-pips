import React from 'react';
import './Header.css';
import WelcomeImage from '../../assets/welcome.jpg';

const Header = () => {
  return (
    <header id='header'>
      <h1>SURE PIPS</h1>

      <h5>
        <i>The most reliable source for currency signals...</i>
      </h5>

      <div className='header_image'>
        <img src={WelcomeImage} alt='welcome_image' />
      </div>

      <h3>- Our Mission -</h3>

      <h4>
        <i>
          At Sure Pips, we offer a perfect guide into the Foreign Exchange market by providing
          expertly sourced trading signals (pips) and a variety of tools to assist traders and guide
          our customers away from false insights and wrong sources. Our premium social media forums
          are also available to ensure adequate assistance for all our customers . At Sure Pips, we
          mean business
        </i>
      </h4>
    </header>
  );
};

export default Header;

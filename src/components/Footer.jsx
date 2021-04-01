import React from 'react';
import '../App.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        <span>
          &copy;{new Date().getFullYear()} | All Rights Reserved | Made by Denis
          Corlotean{' '}
        </span>
        <span>
          <img
            style={{ height: '1.2rem ', verticalAlign: 'middle' }}
            src='../../DCLogo.png'
            alt='DC Logo'
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;

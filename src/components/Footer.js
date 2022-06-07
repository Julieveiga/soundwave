import React from 'react';
import twitter from '../img/twitter.svg';
import fcb from '../img/facebook.svg';


function Footer() {
  return (
    <>
      <footer className="footer" fixed="bottom">
        <div className='about-contact'>
          <span>About us</span>
          <span>Contact</span>
        </div>
        
        <div className='social-media'>
          <img src={twitter}/>
            <span>Twitter</span>
          <img src={fcb}/>
            <span>Facebook</span>
        </div>
      </footer>
    </>
  );
}

export default Footer




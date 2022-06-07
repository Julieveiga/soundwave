import React from 'react';
import imgGirl from '../img/landing-page-girl.png';
import { Button } from 'react-bootstrap';


function FeelMusic () {
  return (
    <section id='feel-music'>
       <img className="imgirl" src={imgGirl} alt="girl image"/>
       <div className="feel-text">
          <h1 className="feel-the-music">Feel The Music</h1>
          <p>Stream over 20 thousand songs with one click</p>
          <Button type="button" className="btn-primary">Join now</Button>
       </div>
    </section>
      );
    }

      export default FeelMusic
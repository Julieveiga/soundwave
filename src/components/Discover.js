/*import logo from '../img/logo.png';*/
import React from 'react';
import charts from '../img/microphone.svg';
import albums from '../img/albums.svg';
import more from '../img/more.svg';
import covers from '../img/covers.jpg';
import Footer from './Footer';


function Discover() {
  return (
    <>
      <section id='discover'>
          <div className="discover-text">
            <h1>Discover new music</h1>
            <div id="iconos" >
                <div className="charts-feel">
                    <img className= "img-charts" src={charts}/>
                    <span>Charts</span>
                </div>
                <div className="albums-feel">
                    <img className="img-albums" src={albums}/>
                    <span>Albums</span>
                </div>
                <div className="more-feel">
                    <img className="img-more" src={more}/>
                    <span>More</span>
                </div>
            </div>

            <span>By joining you can benefit by listening to the latest albums released.</span>
          </div>

          <div>
            <img className="AlbumsCovers" src={covers}/>
          </div>
      </section>
      <Footer/>
    </>
  );
}
export default Discover
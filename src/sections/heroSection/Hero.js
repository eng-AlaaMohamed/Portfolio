import image from '../../images/personImage.png';
import { useRef } from 'react';
import './Hero.css';

function Hero() {

  const btnToTop = useRef();

  window.onscroll = function () {
    if (window.scrollY >= 600) {
      btnToTop.current.classList.add('show');
    } else {
      btnToTop.current.classList.remove('show');
    }
  };

  // Scroll To Top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id='hero' className='hero-section'>
      <div className='hero-section-content'>
        <div className='hero-section-text'>
          <h1 className='person-name'>Alaa Mohamed</h1>
          <p className='job-title'>I'm <span>Web developer</span></p>
        </div>
        <div className='hero-section-image'>
          <img src={image} alt='person image' />
        </div>
      </div>
      <div onClick={scrollToTop} ref={btnToTop} className='scroll-to-top'>
        <i className="bi bi-arrow-up-circle-fill"></i>
      </div>
    </div>
  )
}

export default Hero;

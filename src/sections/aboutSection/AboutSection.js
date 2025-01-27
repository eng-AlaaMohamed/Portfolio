import { AboutInfoBox } from '../../components/ComponentRoute';
import './AbouteSection.css';


function AboutSection() {
  return (
    <div id='about' className='about-section'>
      <div className='section-title'>
        <h2>About</h2>
      </div>
      <p className='about-me'>
        I’m Alaa Mohamed, a passionate Front-End Developer with 4+ years of experience crafting responsive,
        user-friendly, and visually appealing web applications.
        With a strong foundation in HTML5, CSS3, and JavaScript,
        I specialize in creating intuitive interfaces that provide seamless user experiences across all devices.

        I have hands-on expertise in modern frameworks like React and design systems like Bootstrap,
        utilizing Flexbox, Grid, and Media Queries to ensure responsive and adaptive designs. My portfolio
        includes diverse projects, from freelancing platforms to e-commerce websites, showcasing my ability
        to turn creative ideas into functional realities.
      </p>
      <AboutInfoBox />
    </div>
  )
}

export default AboutSection;

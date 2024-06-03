import { AboutInfoBox } from '../../components/ComponentRoute';
import './AbouteSection.css';


function AboutSection() {
  return (
    <div id='about' className='about-section'>
      <div className='section-title'>
        <h2>About</h2>
      </div>
      <p className='about-me'>
        I have always been passionate about the art of developing web interfaces
        and interacting with modern technology. I'm an inspired front-end developer,
        with keen technical vision and a deep understanding of user experience. I enjoy
        transforming creative ideas and great designs into interactive and easy-to-use web interfaces.

        I am proficient in a wide range of modern technologies such as HTML, CSS, and JavaScript,
        and rely on leading frameworks such as React.js or Angular to develop powerful and sophisticated
        web applications. I always strive to ensure the compatibility and responsiveness of my designs with
        various browsers and devices to ensure a smooth and optimal user experience.

        I pay attention to the smallest details and consider improving the user experience
        a primary goal. I provide designs that reflect the latest design trends and I am always
        ready to explore new technologies and improve my skills.

        With my deep knowledge of mathematical concepts of programming and interface design,
        I work creatively to transform ideas into digital reality and improve the interaction between
        the user and the application.
      </p>
      <AboutInfoBox />
    </div>
  )
}

export default AboutSection;

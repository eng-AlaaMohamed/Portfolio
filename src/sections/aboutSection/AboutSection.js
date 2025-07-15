import { AboutInfoBox } from '../../components/ComponentRoute';
import './AbouteSection.css';


function AboutSection() {
  return (
    <div id='about' className='about-section'>
      <div className='section-title'>
        <h2>About</h2>
      </div>
      <p className='about-me'>
        Passionate Front-End Developer with over 4 years of hands-on experience in building responsive, user-centric
        web applications using React.js, JavaScript, HTML5, CSS3, and Redux. Skilled in developing cross-browser
        interfaces, integrating RESTful APIs, and collaborating in Agile teams. Proficient in Git version control and
        UI/UX principles with a proven track record of delivering high-quality solutions
      </p>
      <AboutInfoBox />
    </div>
  )
}

export default AboutSection;

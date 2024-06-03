import { Education, Skills } from '../../components/ComponentRoute';
import './Resume.css';

const Resume = () => {
    return (
        <div id='resume' className='resume-section'>
            <div className='section-title'>
                <h2>Resume</h2>
            </div>
            <Education />
            <Skills />
        </div>
    )
}

export default Resume;

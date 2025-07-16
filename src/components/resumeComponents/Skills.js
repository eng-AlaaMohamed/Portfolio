import './Skills.css';

const Skills = () => {
    return (
        <div className='skills-component'>
            <div className='skills-title'>
                <h1>Technical Skills</h1>
            </div>
            <ul className='list-skills'>
                <li>
                    <h3>- Front-End</h3>
                    <span>React.js, Redux, HTML5, CSS3, Bootstrap</span>
                </li>
                <li>
                    <h3>- Back-End</h3>
                    <span>Node.js, Express.js, MongoDB</span>
                </li>
                <li>
                    <h3>- Tools</h3>
                    <span>Git, GitHub</span>
                </li>
            </ul>
        </div>
    )
}

export default Skills;

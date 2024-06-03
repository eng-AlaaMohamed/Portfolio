import './Skills.css';

const Skills = () => {
    return (
        <div className='skills-component'>
            <div className='skills-title'>
                <h1>Technical Skills</h1>
            </div>
            <ul className='list-skills'>
                <li>
                    <span>Skills</span>
                    <p>JavaScript – Html5 – Css3 – Node js</p>
                </li>
                <li>
                    <span>Databases</span>
                    <p>Mongo DB</p>
                </li>
                <li>
                    <span>Framework</span>
                    <p>React – Express js – BootStrap</p>
                </li>
            </ul>
        </div>
    )
}

export default Skills;

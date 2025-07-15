import './Education.css';

const Education = () => {
    return (
        <div className='education-component'>
            <div className='education-title'>
                <h1>Education</h1>
            </div>
            <div className='education-content'>
                <ul className='education-box'>
                    <li>
                        <span>2021 / 2024</span>
                        <p>
                            <strong>( King Marriott Academy )</strong>
                            Bachelor of Management Information Systems
                        </p>
                    </li>
                </ul>
                <ul className='education-box'>
                    <li>
                        <span>Education cycle</span>
                        <p>
                            A complete educational course in the field
                            of front end, affiliated with the Zero Web
                            School Academy
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Education;

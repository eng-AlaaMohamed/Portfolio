import sectionImage from '../../images/personImage.png';
import './AboutInfoBox.css';


function AboutInfoBox() {
    return (
        <div className='section-details'>
            <div className='section-details-image'>
                <img src={sectionImage} alt='section-details image' />
            </div>
            <div className='section-details-info'>
                <h3 className='section-details-info-title'>Web Devoloper</h3>
                <div className='section-details-info-data'>
                    <ul className='box'>
                        <li><i className="bi bi-caret-right-fill"></i><strong>Birthday:</strong> 7 June 1999</li>
                        <li><i className="bi bi-caret-right-fill"></i><strong>Website:</strong>eng-alaamohamed.github.io/Portfolio/</li>
                        <li><i className="bi bi-caret-right-fill"></i><strong>Phone:</strong> +20 01025218687</li>
                        <li><i className="bi bi-caret-right-fill"></i><strong>City:</strong> Beheira, Egy</li>
                    </ul>
                    <ul className='box'>
                        <li><i className="bi bi-caret-right-fill"></i><strong>Age:</strong> 24</li>
                        <li><i className="bi bi-caret-right-fill"></i><strong>Degree:</strong> Master</li>
                        <li><i className="bi bi-caret-right-fill"></i><strong>Email:</strong> eng.a.mohamed.ali@gmail.com</li>
                        <li><i className="bi bi-caret-right-fill"></i><strong>Freelance:</strong> Available</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutInfoBox;

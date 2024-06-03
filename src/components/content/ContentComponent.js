import { AboutSection, Resume, Hero, Portfolio, Services, ContactUs } from '../../sections/SectionsRoute';
import './ContentStyle.css';

function ContentComponent() {
    return (
        <div className='content'>
            <Hero />
            <AboutSection />
            <Resume />
            <Portfolio />
            <Services />
            <ContactUs />
        </div>
    )
}

export default ContentComponent;

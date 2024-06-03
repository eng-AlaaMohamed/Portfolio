import './Services.css';

function Services() {
    return (
        <div id='services' className='services-section'>
            <div className='section-title'>
                <h2>Services</h2>
            </div>
            <p className='services-section-des'>
                I offer a comprehensive range of front-end development
                services that meet the needs of various projects and
                businesses. Our services include:
            </p>
            <div className='services-section-content'>
                <div className='box'>
                    <span className='services-title'>
                        <i className="bi bi-caret-right-fill"></i>
                        Design and development of user interfaces (UI):
                    </span>
                    <p className='services-des'>
                        Build user interface elements using the latest HTML,
                        CSS, and JavaScript technologies. Design attractive and user-friendly
                        interfaces using modern libraries and frameworks.
                    </p>
                </div>
                <div className='box'>
                    <span className='services-title'>
                        <i className="bi bi-caret-right-fill"></i>
                        User Experience (UX) Development:
                    </span>
                    <p className='services-des'>
                        Improving the user experience by designing convenient and effective interfaces.
                        Implementing user experience tests and analyzing user behaviors to improve performance.
                    </p>
                </div>
                <div className='box'>
                    <span className='services-title'>
                        <i className="bi bi-caret-right-fill"></i>
                        Interactive application development:
                    </span>
                    <p className='services-des'>
                        Build dynamic and interactive web applications using frameworks like React, Angular, and Vue.js.
                        Manage application state and optimize their performance to ensure a seamless experience.
                    </p>
                </div>
                <div className='box'>
                    <span className='services-title'>
                        <i className="bi bi-caret-right-fill"></i>
                        Back-End integration:
                    </span>
                    <p className='services-des'>
                        Connecting the front-end with servers via application programming interfaces (APIs) for seamless integration.
                        Processing data from the back-end and displaying it in interactive and useful ways.
                    </p>
                </div>
                <div className='box'>
                    <span className='services-title'>
                        <i className="bi bi-caret-right-fill"></i>
                        Improve performance and speed:
                    </span>
                    <p className='services-des'>
                        Improve page loading speed and site performance using best practices.
                        Implement lazy loading and caching techniques to improve user experience.
                    </p>
                </div>
                <div className='box'>
                    <span className='services-title'>
                        <i className="bi bi-caret-right-fill"></i>
                        Compatibility with different devices:
                    </span>
                    <p className='services-des'>
                        Ensuring the site's work is excellent on various devices, including mobile phones and tablets.
                        Use the responsive web design to provide consistent experience across all screen sizes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;

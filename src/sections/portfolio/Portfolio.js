import Card from "../../components/portfolioCard/Card";
import cardData from '../../cardsData/CardsData';
import "./Portfolio.css";


const Portfolio = () => {

    let card = cardData.map(card => {
        return <Card key={card.id} cardData={card} />;
    })

    return (
        <div id="portfolio" className='portfolio-section'>
            <div className='section-title'>
                <h2>Portfolio</h2>
            </div>
            <p className="portfolio-section-des">
                Welcome to my portfolio
                I am pleased to welcome you to my portfolio,
                where I share with you my journey in the world
                of front-end development through a selection of
                my projects. This exhibition includes works that
                highlight my skills and experience in designing
                and developing user interfaces, and reflect my passion
                for creating smooth and attractive user experiences.
                Through these works, you will learn about my approach to
                building and designing the front-ends of websites and applications,
                starting from the initial idea all the way to the final product.
                You will see examples of my projects that include designing and
                developing responsive user interfaces (UI), applying user experience
                (UX) best practices, and achieving compatibility between different
                browsers and devices.
            </p>
            <div className="cards">
                {card}
            </div>
        </div>
    )
}

export default Portfolio;

import './Card.css';


const Card = ({ cardData }) => {
    return (
        <div className="card">
            <img className='card-image' src={cardData.image} alt="Card Image" />
            <div className="go-to-site">
                <a href={cardData?.url} target='_blank'><i className="bi bi-link-45deg"></i></a>
            </div>
        </div>
    )
}

export default Card;

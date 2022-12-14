import React from 'react';
import { Link } from "react-router-dom"; // import Link to navigate to Accommodation page

// CardTemplate component
function CardTemplate({ id, title, cover}) {
    return (
        <li className='card'>
            <Link to={`/accommodation/${id}`}>
                <article style={{ backgroundImage: `url(${cover})` }}>
                    <div className="card-overlay"></div>
                    <div className="title-wrapper">
                        <h2>{title}</h2>
                    </div>
                </article>
            </Link>
        </li>
    )
}

export default CardTemplate;


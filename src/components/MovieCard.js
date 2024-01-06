import React from 'react';
import '../styles/MoiveCard.css'

import {useNavigate} from "react-router-dom";

const MovieCard = ({title, genres, countries, year, cardImg, rating,id}) => {
    const navigate = useNavigate()
    return (
        <div className='movie__wrapper' onClick={() => navigate(`/movies/${id}`)}>
            <div
                className={rating < 5 ? 'rating poor__rating' : rating < 8 ? 'rating good__rating' : 'rating best__rating'}>{rating}</div>
            <img className='movie__card__img' src={cardImg} alt="movie image"/>
            <div className="movie__info">
                <span className='movie__title'>{title}</span>
                <span className='movie__genres'>{genres}</span>
                <span className='movie__genres'>{year}</span>
                <span className='movie__genres'>{countries}</span>
            </div>
        </div>
    );
};

export default MovieCard;
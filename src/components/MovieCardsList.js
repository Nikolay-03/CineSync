import React from 'react';
import MovieCard from "./MovieCard";
import '../styles/MovieCardList.css'

const MovieCardsList = ({movies}) => {
    return (
        <div className='movie__cards'>
            {movies.map(movie =>
                <MovieCard
                    key={movie['kinopoiskId']}
                    id={movie["kinopoiskId"]}
                    title={movie["nameRu"]}
                    countries={movie["countries"].map(gen => gen["country"]).join(', ')}
                    genres={movie["genres"].map(gen => gen["genre"]).join(', ')}
                    year={movie["year"]}
                    cardImg={movie["posterUrlPreview"]}
                    rating={movie["ratingKinopoisk"]}
                />
            )}
        </div>
    );
};

export default MovieCardsList;
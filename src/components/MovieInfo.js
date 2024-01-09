import React from 'react';
import '../styles/MovieInfo.css'
import circle from '../UI/Icons/circle.png'
import BanerWithInfo from "./BanerWithInfo";
import Description from "./Description";

const MovieInfo = ({movieData,movieImg}) => {
    const genres = movieData ? movieData['genres'].map(genre => genre['genre']).map(genre => genre[0].toUpperCase() + genre.slice(1)) : null
    return (
        <div>
            <BanerWithInfo genres={genres}
                           data={movieData}
                           movieImg={movieImg}
                           logo={movieData["logoUrl"]}
                           year={movieData["year"]}
                           ageLimit={movieData["ratingAgeLimits"]}
                           rate={movieData["ratingKinopoisk"]}
                           filmLength={movieData["filmLength"]}
                           countries={movieData['countries']}
                           shortdescr={movieData["shortDescription"]}
            />
            <Description name={movieData['nameRu']}
                         description={movieData["description"]}
                         coverImg={movieData["coverUrl"]}
                         slogan={movieData['slogan']}
            />
        </div>

    );
};

export default MovieInfo;
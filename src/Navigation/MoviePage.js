import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useState} from 'react'
import MovieService from "../services/MovieService";
import {useFetching} from "../hooks/useFetching";
import '../../src/styles/MoviePage.css'
import Loader from "../UI/Loader/Loader";
import MovieInfo from "../components/MovieInfo";

const MoviePage = () => {
    const {id} = useParams()
    const [movieData,setMovieData] = useState('')
    const [movieImg,setMovieImg] = useState('')
    const [fetchMovieData,isLoading,error] = useFetching(async () => {
        const response = await MovieService.getMovieInfo(id)
        setMovieData(response.data)
        const responseUrl = await MovieService.getMovieImg(id)
        setMovieImg(responseUrl.data['items'][0]['imageUrl'])
    })

    const genres = movieData ? movieData['genres'].map(genre => genre['genre']).map(genre => genre[0].toUpperCase() + genre.slice(1)) : null
    console.log(genres)
    useEffect(() => {
        fetchMovieData()
    }, [id]);
    console.log(movieData)
    return (
        <div className='App__wrapper'>
            <div className="App">
                {isLoading
                ? <div style={{display:"flex",justifyContent:"center",height:600,alignItems:"center"}}><Loader/></div>
                 : movieData
                    ?<MovieInfo movieImg={movieImg}
                                data={movieData}
                                logo={movieData["logoUrl"]}
                                year={movieData["year"]}
                                ageLimit={movieData["ratingAgeLimits"]}
                                rate={movieData["ratingKinopoisk"]}
                                filmLength={movieData["filmLength"]}
                                genres={genres}
                                countries={movieData['countries']}
                                shortdescr={movieData["shortDescription"]}
                        />
                    :<div>Данные о фильме отсутствуют</div>
                }
            </div>
        </div>
    );
};

export default MoviePage;
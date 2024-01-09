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
                    ?<MovieInfo
                            movieData={movieData}
                            movieImg={movieImg}
                        />
                    :<div>Данные о фильме отсутствуют</div>
                }
            </div>
        </div>
    );
};

export default MoviePage;
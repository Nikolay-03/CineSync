import React, {useEffect, useState} from 'react';
import {useMovies} from "../hooks/useMovies";
import {useFetching} from "../hooks/useFetching";
import MovieService from "../services/MovieService";
import InputForSearch from "../UI/Input/InputForSearch";
import MovieFilter from "../components/MovieFilter";
import Loader from "../UI/Loader/Loader";
import MovieCardsList from "../components/MovieCardsList";
import Button from "../UI/Button/Button";

const TopMovies = () => {
    const [movies,setMovies] = useState([])
    const [page,setPage] = useState(1)
    const [filter,setFilter] = useState({sort:{genre:'',country:''},query:""})
    const AllGenres = [...new Set(movies.map(movie => movie["genres"].map(gen => gen["genre"])).flat())];
    const AllCountries = [...new Set(movies.map(movie => movie["countries"].map(gen => gen["country"])).flat())];
    const sortedAndSearchedMovies = useMovies(movies,filter.query,filter.sort.genre,filter.sort.country)
    const [fetchMovies,isLoading,movieError] = useFetching(async () => {
        const response = await MovieService.getTop(page)
        setMovies(movies => [...movies,...response.data.items])

    })
    useEffect(() => {
        fetchMovies()
    }, [page]);
    return (
        <div className='App__wrapper'>
            <div className='App'>
                <InputForSearch
                    value={filter.query}
                    onChange={query => {
                        setFilter({...filter,query: query})}
                    }
                />
                <h1>Топ 250 фильмов</h1>
                <MovieFilter
                    filter={filter}
                    setFilter={setFilter}
                    AllGenres={AllGenres}
                    AllCountries={AllCountries}
                />
                {movieError &&
                    <h1>Произошла ошибка ${movieError}</h1>
                }
                {isLoading
                    ? <div style={{display:"flex",justifyContent:"center",height:600,alignItems:"center"}}><Loader/></div>
                    : <MovieCardsList movies={sortedAndSearchedMovies}/>
                }
                <div className='download__more'>
                    {page <14 && !isLoading
                        ?<Button onClick={() => setPage(page => page+1)}>Загрузить еще</Button>
                        : null
                    }
                </div>
            </div>
        </div>
    );
};

export default TopMovies;
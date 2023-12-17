import React, {useEffect, useMemo} from 'react';
import {useState} from "react";
import './styles/App.css'
import MovieCardsList from "./components/MovieCardsList";
import SelectFilmFilter from "./UI/Select/SelectFilmFilter";
import InputForSearch from "./UI/Input/InputForSearch";
import Button from "./UI/Button/Button";
import {useMovies} from "./hooks/useMovies";
import {useFetching} from "./hooks/useFetching";
import MovieService from "./services/MovieService";
import MovieFilter from "./components/MovieFilter";

const App = () => {
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
                <MovieCardsList movies={sortedAndSearchedMovies}/>
                <div className='download__more'>
                    <Button
                        onClick={() => setPage(page => page+1)}
                    >
                        Загрузить еще
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;
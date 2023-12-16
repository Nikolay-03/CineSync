import React, {useMemo} from 'react';
import {useState} from "react";
import './styles/App.css'
import MovieCardsList from "./components/MovieCardsList";
import {Movies} from "./services/MovieService";
import SelectFilmFilter from "./UI/Select/SelectFilmFilter";
import InputForSearch from "./UI/Input/InputForSearch";
import {useMovies} from "./hooks/useMovies";

const App = () => {
    const [movies,setMovies] = useState(Movies)
    const [filter,setFilter] = useState({sort:'',query:""})
    const select = [...new Set(Movies.map(movie => movie["genres"].map(gen => gen["genre"])).flat())];
    const sortedAndSearchedMovies = useMovies(movies,filter.query,filter.sort)
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
                <SelectFilmFilter
                    value={filter.sort}
                    select={select}
                    defaultValue='Жанр'
                    onChange={selectedSort => setFilter({...filter,sort:selectedSort})}/>
                <MovieCardsList movies={sortedAndSearchedMovies}/>
            </div>
        </div>
    );
};

export default App;
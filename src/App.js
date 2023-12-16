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
    const [filter,setFilter] = useState({sort:{genre:'',country:''},query:""})
    const AllGenres = [...new Set(Movies.map(movie => movie["genres"].map(gen => gen["genre"])).flat())];
    const AllCountries = [...new Set(Movies.map(movie => movie["countries"].map(gen => gen["country"])).flat())];
    const sortedAndSearchedMovies = useMovies(movies,filter.query,filter.sort.genre,filter.sort.country)
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
                <div className='filter'>
                    <SelectFilmFilter
                        value={filter.sort.genre}
                        options={AllGenres}
                        defaultValue='Жанр'
                        onChange={selectedSort => setFilter({...filter,sort: {...filter.sort,genre: selectedSort}})}/>
                    <SelectFilmFilter
                        value={filter.sort.country}
                        options={AllCountries}
                        defaultValue='Страна'
                        onChange={selectedSort => setFilter({...filter,sort: {...filter.sort,country: selectedSort}})}/>
                </div>

                <MovieCardsList movies={sortedAndSearchedMovies}/>
            </div>
        </div>
    );
};

export default App;
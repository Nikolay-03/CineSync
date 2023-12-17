import React from 'react';
import SelectFilmFilter from "../UI/Select/SelectFilmFilter";

const MovieFilter = ({filter,setFilter,AllGenres,AllCountries}) => {
    return (
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
    );
};

export default MovieFilter;
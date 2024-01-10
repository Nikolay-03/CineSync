import React from 'react';
import SelectFilmFilter from "../UI/Select/SelectFilmFilter";
import Button from "../UI/Button/Button";

const MovieFilter = ({filter,setFilter,AllGenres,AllCountries}) => {
    return (
        <div className='filters__wrapper'>
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
            <Button
                className='clear-button'
                onClick={selectedSort => setFilter({...filter,sort: {genre: '',country: ''}})}
            >
            Сбросить</Button>
        </div>
    );
};

export default MovieFilter;
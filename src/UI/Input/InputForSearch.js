import React from 'react';
import './InputForSearch.css'
const InputForSearch = ({value,onChange}) => {
    return (
        <input
            value={value}
            onChange={e => onChange(e.target.value)}
            type="text"
            placeholder='Найти фильмы'
            className='search'
        />
    );
};

export default InputForSearch;
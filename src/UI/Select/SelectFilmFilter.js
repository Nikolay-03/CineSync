import React from 'react';
import './SelectFilmFilter.css'

const SelectFilmFilter = ({options, defaultValue, onChange, value}) => {
    return (
        <div className='genres__wrapper'>
            <select
                className='genres'
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option disabled value=''>{defaultValue}</option>
                {options.map(i =>
                    <option key={i}>{i[0].toUpperCase() + i.slice(1)}</option>)
                }
            </select>
        </div>

    );
};

export default SelectFilmFilter;
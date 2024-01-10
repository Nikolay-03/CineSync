import React from 'react';
import './SelectFilmFilter.css'

const SelectFilmFilter = ({options, defaultValue, onChange, value}) => {
    return (
            <select
                className='filter'
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option disabled value=''>{defaultValue}</option>
                {options.map(i =>
                    <option key={i}>{i[0].toUpperCase() + i.slice(1)}</option>)
                }
            </select>

    );
};

export default SelectFilmFilter;
import React from 'react';
import './SelectFilmFilter.css'

const SelectFilmFilter = ({select, defaultValue, onChange, value}) => {
    return (
        <div className='genres__wrapper'>
            <select
                className='genres'
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option disabled value=''>{defaultValue}</option>
                {select.map(i =>
                    <option key={i}>{i}</option>)
                }
            </select>
        </div>

    );
};

export default SelectFilmFilter;
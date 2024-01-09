import React from 'react';
import circle from "../UI/Icons/circle.png";

const BanerWithInfo = ({genres,logo,movieImg,countries,shortdescr,year,filmLength,ageLimit,rate,data}) => {
    return (
        <div className='top__block'>
            <div className='overlay'></div>
            <img className='movie__img' src={movieImg} alt=""/>
            <div className='main__info'>
                {logo
                    ?<img className='logo' src={logo} alt=""/>
                    : <h1 style={{color:"white",marginBottom:40}}>{data['nameRu']}</h1>

                }
                <div className='info'>
                    <div className={rate < 5 ? 'poor_rating' : rate < 8 ? 'good_rating' : 'best_rating'}>{rate}</div>
                    <img className='circle' src={circle} alt=""/>
                    {year}
                    <img className='circle' src={circle} alt=""/>
                    {`${filmLength} мин`}
                    <img className='circle' src={circle} alt=""/>
                    {ageLimit.slice(3)}+

                </div>
                <div className='info'>
                    {genres
                        ? genres.join(", ")
                        : null
                    }
                    <img className='circle' src={circle} alt=""/>
                    {countries
                        ? countries.map(item => item['country']).join(", ")
                        : null
                    }
                </div>
                <div className="short__descr">{shortdescr}</div>
            </div>

        </div>
    );
};

export default BanerWithInfo;
import React from 'react';

const Description = ({name,description,coverImg,slogan}) => {
    return (
        <div className='description__wrapper'>
            <h1>{`Фильм ${name}`}</h1>
            <h2>Описание</h2>
            <div className='main__descr'>
                <div className='text__description'>
                    <div>{description}</div>
                    <div className='slogan'>{slogan}</div>
                    <div></div>
                </div>
                <img src={coverImg} alt="" style={{width:'30%'}}/>
            </div>
        </div>
    );
};

export default Description;
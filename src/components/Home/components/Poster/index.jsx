import React from 'react';
import './index.scss'
import poster from '../../../../assets/img/poster.jpg'

export const Poster = () => {
    return (
        <div className='poster'>
            <img className='poster__img' src={poster} alt="poster" />
        </div>
    )
}

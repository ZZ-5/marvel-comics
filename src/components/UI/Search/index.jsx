import React from 'react';
import { useState, useEffect } from 'react';
import search from '../../../assets/icon/Search.svg';
import './index.scss';

export const Search = () => {

    const [text, setText] = useState('')

    return (
        <div className="search">
            <input
                className='search__input'
                type="search"
                placeholder='Search...'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className='search__button'>
                <img src={search} alt="Search" />
            </button>
        </div>
    )
}

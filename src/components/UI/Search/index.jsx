import React from 'react';
import { useState, useEffect } from 'react';
import search from '../../../assets/icon/Search.svg';
import './index.scss';

export const Search = ({ onClick, text, setText, onEnter }) => {

    return (
        <div className="search">
            <input
                className='search__input'
                type="search"
                placeholder='Search...'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={onEnter}
            />
            <button className='search__button' onClick={onClick}>
                <img src={search} alt="Search" />
            </button>
        </div>
    )
}

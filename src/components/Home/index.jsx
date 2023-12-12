import React from 'react'
import './index.scss'
import { Poster } from './components/Poster'
import { Search } from '../UI/Search'

export const Home = () => {
    return (
        <div className='home'>
            <Poster />
            <Search />
        </div>
    )
}

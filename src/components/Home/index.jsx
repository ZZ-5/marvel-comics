import React, { useState } from 'react'
import './index.scss'
import { Poster } from './components/Poster'
import { Search } from '../UI/Search'
import { Feed } from '../Feed'
import { PageFeed } from '../PageFeed'
import GetMarvel from '../../API/GetMarvel'


export const Home = () => {

    const [data, setData] = useState({ results: [] })
    const [text, setText] = useState('')
    const [limit, setLimit] = useState([8, 12, 16])
    const [curLimit, setCurLimit] = useState(limit[0])

    async function fetchCharacters(limit, offset, nameStartsWith) {
        const res = await GetMarvel.getCharacters(limit, offset, nameStartsWith);
        setData(res.data)
    }

    const onSearchClick = () => {
        const offset = 0
        fetchCharacters(limit, offset, text)
    }


    const handlePageClick = (e) => {
        const offset = e.selected * curLimit
        fetchCharacters(curLimit, offset, text)
    }

    const onEnter = (e) => {
        if (e.key === "Enter") {
            const offset = e.selected * curLimit
            fetchCharacters(curLimit, offset, text)
        }
    }


    return (
        <div className='home'>
            <Poster />
            <Search onClick={onSearchClick} text={text} setText={setText} onEnter={onEnter} />
            <Feed title="Results" data={data} handlePageClick={handlePageClick} />
        </div>
    )
}

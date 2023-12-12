import React, { useState, useEffect } from 'react'
import { Spinner } from '../UI/Spinner';
import '../../styles/pagination.scss'
import { Feed } from '../Feed';

export const PageFeed = ({ fetchData, title }) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState([8, 12, 16])
    const [curLimit, setCurLimit] = useState(limit[0])

    async function fetchComics(limit, offset) {

        const res = await fetchData(limit, offset);
        setData(res.data)
    }

    useEffect(() => {
        setLoading(true)
        fetchComics(curLimit).finally(() => setLoading(false))
    }, [fetchData])

    const handlePageClick = (e) => {
        const offset = e.selected * curLimit
        fetchComics(curLimit, offset)
    }

    if (!data || loading) {
        return <Spinner />
    }

    return (
        <Feed data={data} handlePageClick={handlePageClick} title={title} />
    )
}

import React from 'react'
import './index.scss'
import ReactPaginate from 'react-paginate'


export const Feed = ({ data, handlePageClick, title }) => {
    return (
        <div className='feed'>
            <h2 className='feed__subtitle'>{title}</h2>
            <div className='feed__items' >
                {data.results.map((el) => {
                    return (
                        <div className="feed__item" key={el.id}>
                            <img className='feed__item-img' src={`${el.thumbnail.path}.${el.thumbnail.extension}`} alt={`${el.name}`} />
                            <div className="feed__item-info">
                                <div className="feed__item-info-name">{el.name}</div>
                                <div className="btn">
                                    <button className='btn__favorite'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            fill="currentColor"
                                            className="bi bi-heart"
                                            viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                    </button>
                                    <button className='btn__more'>More info</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ReactPaginate
                className='pagination'
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={Math.ceil(data.total / data.limit)}
                previousLabel="<"
            />
        </div>
    )
}

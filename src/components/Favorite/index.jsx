import React from 'react'
import { useSelector } from 'react-redux'

export const Favorite = () => {
    const favorite = useSelector(state => state.favorite.favorite)
    console.log(favorite);
    return (
        <div className="favorite">
            <div className="favorite__subtitle">Избранное</div>
            <div className="favorite__items">
                {favorite.map((el) => {
                    return (
                        <div key={favorite.id} className="item">
                            <img
                                src={el?.poster?.url}
                                alt="poster"
                                className="img"
                            />
                            <div className="item__buttons">
                                <button
                                    className="btn_more">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

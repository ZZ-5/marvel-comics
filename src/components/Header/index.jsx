import React, { useState } from 'react';
import logo from '../../assets/img/logo.png';
import './index.scss'
import user from '../../assets/icon/user.svg'
import { NavLink } from 'react-router-dom';
import { Search } from '../UI/Search';


export const Header = () => {

    const [profileOpen, setProfileOpen] = useState(false)

    return (
        <div className='header'>
            <div className="header__logo">
                <img className='logo' src={logo} alt="Marvel_logo" />
            </div>
            <div className="header__nav">
                <NavLink to="/home"
                    className={({ isActive }) => (isActive ? 'nav_active' : 'nav')}>
                    Home
                </NavLink>
                <NavLink to="/characters"
                    className={({ isActive }) => (isActive ? 'nav_active' : 'nav')}>
                    Characters
                </NavLink>
                <NavLink to="/comics"
                    className={({ isActive }) => (isActive ? 'nav_active' : 'nav')}>
                    Comics
                </NavLink>
                <NavLink to="/events"
                    className={({ isActive }) => (isActive ? 'nav_active' : 'nav')}>
                    Events
                </NavLink>
            </div>
            <div className="header__menu">
                {/* <Search /> */}
                <img onClick={() => setProfileOpen(!profileOpen)} className={profileOpen ? 'user_active' : 'user'} src={user} alt="User" />
                {profileOpen && (
                    <div className="user__window">
                        <NavLink to={''} className='user__link'>Войти</NavLink>
                        <NavLink to={'./favorite'} className='user__link' onClick={() => setProfileOpen(!profileOpen)}>Избранное</NavLink>
                        <NavLink to={''} className='user__link'>Настройки</NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}

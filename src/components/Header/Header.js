import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/quizchart'>Quiz Chart</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
            <div className='heading'>
                <h1><span className='first-text'>Hero</span> Quiz Fun</h1>
            </div>
        </div>
    )
};

export default Header;
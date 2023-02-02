import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/quiz'>Quiz</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    )
};

export default Header;
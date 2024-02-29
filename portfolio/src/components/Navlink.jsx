import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = ({ href, title }) => {
    return (

        <Link to={href} className='block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-blue-700 text-white'>{title}</Link>

    );
};
export default NavLink; 
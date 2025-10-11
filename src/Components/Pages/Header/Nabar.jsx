import React from 'react';
import { Link, NavLink } from 'react-router';
import NavbarImage from '../../../assets/logo-D9NHcesw 1.png'
import ContributeImage from '../../../assets/fi_2111432.png'


const Navbar = () => {
    const links = <>
        <NavLink to='/' className='ml-6'>Home</NavLink>
        <NavLink to='/apps' className='ml-6'>Apps</NavLink>
        <NavLink to='/installation' className='ml-6'>Installation</NavLink>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-5 md:px-12 py-5 w-12/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <div className='flex items-center'>
                        <img src={NavbarImage} alt="" />
                        <p className=" text-xl text-[#632EE3]">HERO.IO</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <a href="https://github.com/Ariful3031" className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><img src={ContributeImage} alt="" /> Contribute</a>

            </div>
        </div>
    );
};

export default Navbar;
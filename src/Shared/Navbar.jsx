import React, { useContext } from 'react';
import Container from './Container';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';

const Navbar = () => {
    const { user } = useContext(AuthContext)

    const navigation = <>
        <li className='text-2xl font-semibold '>
            <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-primary"
                        : isPending
                            ? "text-secondary"
                            : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className='text-2xl font-semibold '>
            <NavLink
                to='/instructors'
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-primary"
                        : isPending
                            ? "text-secondary"
                            : ""
                }
            >
                Instructors
            </NavLink>
        </li>
        <li className='text-2xl font-semibold '>
            <NavLink
                to='/classes'
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-primary"
                        : isPending
                            ? "text-secondary"
                            : ""
                }
            >
                Classes
            </NavLink>
        </li>
        <li className='text-2xl font-semibold '>
            <NavLink
                to='/dashboard'
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-primary"
                        : isPending
                            ? "text-secondary"
                            : ""
                }
            >
                Dashboard
            </NavLink>
        </li>
    </>
    return (
        <Container>
            <div className="navbar min-h-[120px] bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navigation}
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl">
                        <div className='flex justify-center items-center'>
                            <img width='100' height='100' src="https://i.ibb.co/FbFzwxM/4425949-2411-removebg-preview.png" alt="" />
                            <p className='text-3xl text-secondary font-bold'>Martial Arts Quest</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navigation}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <button className='btn btn-primary rounded-full border-2 border-primary hover:bg-transparent px-10 text-white hover:text-primary text-xl'>Login</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
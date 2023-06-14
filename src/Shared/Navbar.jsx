import React, { useContext, useEffect } from 'react';
import Container from './Container';
import { Link, NavLink } from 'react-router-dom';
import avatar from '../assets/placeholder.jpg';
import { AuthContext } from '../Provider/Authprovider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    // const [theme, setTheme] = useState(
    //     localStorage.getItem('theme') ? localStorage.setItem('theme') : "light"
    // );

    // const handleToggle = (e) => {
    //     if (e.target.checked) {
    //         setTheme("dark");
    //     } else {
    //         setTheme("light");
    //     }
    // };

    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    //     const localTheme = localStorage.getItem("theme");
    //     document.querySelector("html").setAttribute("data-theme", localTheme);
    // }, [theme])

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

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
        {
            user ? <li className='text-2xl font-semibold '>
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
            </li> : ""
        }
    </>
    return (
        <Container>
            <div className="navbar min-h-[120px] bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown z-50">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/' className="normal-case text-xl mb-4">
                                <div className='flex justify-center items-center'>
                                    <img width='70' height='70' src="https://i.ibb.co/FbFzwxM/4425949-2411-removebg-preview.png" alt="" />
                                    <p className='text-xs text-secondary font-bold'>Martial Arts Quest</p>
                                </div>
                            </Link>
                            {navigation}
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl hidden md:flex">
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
                <div className="navbar-end lg:gap-10">
                    {/* <label className="swap swap-rotate bg-primary rounded-full p-2 text-white">
                        <input type="checkbox" />
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label> */}
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end z-50">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle w-[60px] h-[60px] avatar">
                                        <div className="w-[60px] rounded-full">
                                            <img src={user && user.photoURL ? user.photoURL : avatar} className='rounded-full w-full h-full' alt="" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li className='hover:bg-primary rounded-lg hover:text-white'>
                                            <Link className="justify-between">
                                                Profile
                                            </Link>
                                        </li>
                                        <li className='hover:bg-primary rounded-lg hover:text-white'><a>Settings</a></li>
                                        <li className='hover:bg-primary rounded-lg hover:text-white'><Link to='/' onClick={handleLogOut}>Logout</Link></li>
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
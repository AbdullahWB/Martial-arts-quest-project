import React from 'react';
import { BsFillHouseAddFill } from 'react-icons/bs';
import { FaBookOpen, FaExternalLinkAlt, FaFolderPlus, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const StudentNav = () => {
    return (
        <>
            <NavLink
                to='studentHome'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaHome className='w-5 h-5' />

                <span className='mx-4 font-medium'>Student Home</span>
            </NavLink>
            <NavLink
                to='myClass'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaFolderPlus className='w-5 h-5' />

                <span className='mx-4 font-medium'>Selected Classes</span>
            </NavLink>
            <NavLink
                to='enrolledClasses'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaExternalLinkAlt className='w-5 h-5' />

                <span className='mx-4 font-medium'>Enrolled Classes</span>
            </NavLink>
            <div className="divider"></div>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaHome className='w-5 h-5' />

                <span className='mx-4 font-medium'>Home</span>
            </NavLink>
            <NavLink
                to='/classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaBookOpen className='w-5 h-5' />

                <span className='mx-4 font-medium'>Classes</span>
            </NavLink>
        </>
    );
};

export default StudentNav;
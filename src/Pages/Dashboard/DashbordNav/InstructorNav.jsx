import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBookMedical, FaBookOpen, FaHome, FaHouseUser } from 'react-icons/fa';

const InstructorNav = () => {
    return (
        <>
            <NavLink
                to='instructorHome'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaHouseUser className='w-5 h-5' />

                <span className='mx-4 font-medium'>Instructor Home</span>
            </NavLink>
            <NavLink
                to='addClass'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaBookMedical className='w-5 h-5' />

                <span className='mx-4 font-medium'>Add Classes</span>
            </NavLink>
            <NavLink
                to='updateClass'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaBookOpen className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Classes</span>
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

export default InstructorNav;
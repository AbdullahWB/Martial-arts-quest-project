import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserAlt, FaBookReader, FaHouseUser, FaBookOpen } from "react-icons/fa";

const AdminNav = () => {
    return (
        <>
            <NavLink
                to='adminHome'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaHouseUser className='w-5 h-5' />

                <span className='mx-4 font-medium'>Admin Home</span>
            </NavLink>
            <NavLink
                to='manageClasses'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaBookReader className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Classes</span>
            </NavLink>
            <NavLink
                to='allUsers'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaUserAlt className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Users</span>
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
                to='/myClass'
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

export default AdminNav;
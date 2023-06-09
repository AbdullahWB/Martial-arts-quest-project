import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillHouseAddFill } from 'react-icons/bs';

const InstructorNav = () => {
    return (
        <>
            <NavLink
                to='add-room'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsFillHouseAddFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>Instructor Home</span>
            </NavLink>
            <NavLink
                to='add-room'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsFillHouseAddFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>Add Classes</span>
            </NavLink>
            <NavLink
                to='add-room'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsFillHouseAddFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Classes</span>
            </NavLink>
        </>
    );
};

export default InstructorNav;
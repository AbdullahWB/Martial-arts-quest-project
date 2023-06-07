import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-1207px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
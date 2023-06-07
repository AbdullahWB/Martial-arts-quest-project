import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-600px)]'>
                <ScrollRestoration />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
import React from 'react';
import errorPage from '../assets/107894-404-page-not-found.json'
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react'

const Error = () => {
    const { error } = useRouteError()
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <div className='flex justify-center items-center w-[400px] lg:w-[700px]'>
                <Lottie animationData={errorPage} loop={true} />
            </div>
            <div className='max-w-md text-center'>
                <p className='text-2xl font-semibold md:text-3xl text-primary mb-8'>
                    {error?.message}
                </p>
                <Link to='/' className='btn btn-primary hover:bg-transparent border-2 hover:text-primary rounded-full px-10 text-white'>
                    Back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Error;
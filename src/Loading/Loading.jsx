import React from 'react';
import loader from '../assets/98092-loading.json'
import Lottie from 'lottie-react'

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default Loading;
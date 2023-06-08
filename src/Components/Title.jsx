import React from 'react';

const Title = ({extraTitle, title, subtitle}) => {
    return (
        <div className='text-center'>
            <span className='text-primary font-semibold text-xl'>{extraTitle}</span>
            <h1 className='text-6xl mb-5 text-[#484848] font-medium'>{title}</h1>
            <p className='text-gray-400 px-[30%]'>{subtitle}</p>
        </div>
    );
};

export default Title;
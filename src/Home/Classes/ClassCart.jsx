import React from 'react';

const ClassCart = ({ meet }) => {
    const { instructorName, className, image, _id } = meet
    return (
        <>
            <div className="card w-full rounded-none bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl text-secondary font-semibold tracking-widest">{className}</h2>
                    <p className='tracking-widest'>{instructorName}</p>
                    <button className="btn btn-primary mt-2 rounded-full border-2 hover:bg-transparent text-white hover:text-primary">Show Details</button>
                    <button className="btn btn-outline btn-primary rounded-full">Show More</button>
                </div>
            </div>
        </>
    );
};

export default ClassCart;
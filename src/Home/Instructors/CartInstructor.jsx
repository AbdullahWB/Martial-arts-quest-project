import React from 'react';

const CartInstructor = ({ instructor }) => {
    const { image, name, _id } = instructor
    return (
        <>
            <div className="card w-full rounded-none bg-base-100 shadow-xl">
                <figure><img className='w-full h-[270px] object-cover' src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl text-secondary font-semibold tracking-widest">{name}</h2>
                    <button className="btn btn-primary mt-2 rounded-full border-2 hover:bg-transparent text-white hover:text-primary">Show Details</button>
                    <button className="btn btn-outline btn-primary rounded-full border-2">Show More</button>
                </div>
            </div>
        </>
    );
};

export default CartInstructor;
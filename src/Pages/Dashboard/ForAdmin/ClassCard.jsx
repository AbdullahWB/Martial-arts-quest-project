import React from 'react';

const ClassCard = ({ ac }) => {
    const { instructorId, description, price, availableSeats, image, instructorName, className, _id , status } = ac || {};
    return (
        <>
            <div className="card w-full rounded-none bg-base-100 shadow-xl">
                <figure><img className='w-full h-[270px] object-cover' src={image} alt="" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl text-secondary font-semibold tracking-widest">{className}</h2>
                    <p className='tracking-widest'>{instructorName}</p>
                    <p className='hover:text-primary'>Available Seats: {availableSeats}</p>
                    <p className='text-xl font-medium'>Course Price: {price}$</p>
                    <button className="btn btn-primary mt-2 rounded-full border-2 hover:bg-transparent text-white hover:text-primary">{status}</button>
                    <button className="btn btn-outline btn-primary rounded-full border-2">Feedback</button>
                </div>
            </div>
        </>
    );
};

export default ClassCard;
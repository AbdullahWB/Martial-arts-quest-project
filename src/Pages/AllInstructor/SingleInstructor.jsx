import React from 'react';

const SingleInstructor = ({ instructor }) => {
    const {description, classes, classesTaken, email, name, image, instructorId} = instructor;
    return (
        <div className="card w-full rounded-none bg-base-100 shadow-xl">
            <figure><img className='w-full h-[270px] object-cover' src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-semibold tracking-widest">{name}</h2>
                <p className='tracking-widest'>{email}</p>
                <p className='font-semibold'>Total Classes Taken: {classesTaken}</p>
                <ul>
                    <h1 className='text-xl font-semibold'>All Classes</h1>
                    {
                        classes.map((cl, index) => <li
                            key={index}
                            className='btn btn-link hover:text-primary'
                        >{cl}</li>)
                    }
                </ul>
                <button className="btn btn-primary mt-2 rounded-full border-2 hover:bg-transparent text-white hover:text-primary">Show Classes</button>
                {/* <button className="btn btn-outline btn-primary rounded-full border-2">Show More</button> */}
            </div>
        </div>
    );
};

export default SingleInstructor;
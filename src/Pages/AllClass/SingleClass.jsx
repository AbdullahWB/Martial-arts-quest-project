import React from 'react';
import useAuth from '../../Hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleClass = ({ item }) => {
    const {user} = useAuth()
    const { instructorId, description, price, availableSeats, image, instructorName, className } = item || {};
    const navigate = useNavigate()

    const handleUser = () => {
        if (!user) {
            Swal.fire(
                'Login First',
                'You Have to Log in First To View Details',
                'question'
            )
            navigate('/login');
            return;
        }
    };

    return (
        <>
            <div className="card w-full rounded-none bg-base-100 shadow-xl">
                <figure><img className='w-full h-[270px] object-cover' src={image} alt="" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl text-secondary font-semibold tracking-widest">{className}</h2>
                    <p className='tracking-widest'>{instructorName}</p>
                    <p className='hover:text-primary'>Available Seats: {availableSeats}</p>
                    <p className='text-xl font-medium'>Course Price: {price}$</p>
                    <Link onClick={handleUser} className="btn btn-primary mt-2 rounded-full border-2 hover:bg-transparent text-white hover:text-primary">Enroll Now</Link>
                    <button className="btn btn-outline btn-primary rounded-full border-2">Instructor</button>
                </div>
            </div>
        </>
    );
};

export default SingleClass;
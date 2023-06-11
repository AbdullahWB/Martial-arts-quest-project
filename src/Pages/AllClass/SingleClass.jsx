import React, { useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleClass = ({ item }) => {
    const { user } = useAuth()
    const { instructorId, description, price, availableSeats, image, instructorName, className, _id } = item || {};
    const navigate = useNavigate()
    const location = useLocation()
    const [addClass, SetAddClass] = useState(false)

    const handleAddToCart = (item) => {
        if (!user) {
            Swal.fire({
                title: 'Login First',
                text: 'You Have to Log in First To View Details',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
            navigate('/login');
            return;
        } else {
            if (user) {
                const addItem = {addClassId: _id, className, instructorName, image, description, price, studentEmail: user.email}
                fetch('http://localhost:5000/classes', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(addItem),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your class has been successfully added',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
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
                    <button disabled={addClass} onClick={() => handleAddToCart(item)} className="btn btn-primary mt-2 rounded-full border-2 hover:bg-transparent text-white hover:text-primary">Add Classes</button>
                    <button className="btn btn-outline btn-primary rounded-full border-2">Instructor</button>
                </div>
            </div>
        </>
    );
};

export default SingleClass;
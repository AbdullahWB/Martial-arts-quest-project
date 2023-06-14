import React, { useEffect } from 'react';
import useClasses from '../../../Hook/useClasses';
import Loading from '../../../Loading/Loading';
import Container from '../../../Shared/Container';
import Title from '../../../Components/Title';
import { FaTrash } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/Rx';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyClass = () => {
    const [isLoading, AddClasses, refetch] = useClasses()

    if (isLoading) {
        return <Loading />
    }

    const handleDeleteData = id => {
        fetch(`http://localhost:5000/myClasses/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
    }

    console.log(AddClasses);

    return (
        <>
            <Container>
                <Title
                    extraTitle={"All Classes Management"}
                    title={"Here your all Classes"}
                    subtitle={"Join us at Martial Arts Academy and embark on a transformative journey of self-discovery, empowerment, and martial arts excellence. Unleash your potential, cultivate your mind-body connection, and become the best version of yourself."}
                />
                <div className="overflow-x-auto mx-5 mt-[50px] px-10 py-5 rounded-xl bg-[rgba(255,70,70,0.1)]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Photo</th>
                                <th>Name & Instructor Name</th>
                                <th>Price</th>
                                <th>Enroll</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AddClasses.map((ac, index) => <tr
                                    key={ac._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle rounded-full w-12 h-12">
                                                    <img src={ac?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {ac?.className}
                                        <br />
                                        <span className="badge badge-primary badge-sm">{ac?.instructorName}</span>
                                    </td>
                                    <td>{ac?.price}$</td>
                                    <td className=''>
                                        <Link to={`/dashboard/payment/${ac?._id}`} className='w-8 h-8 rounded-full text-white flex justify-center items-center bg-green-500'><RxOpenInNewWindow /></Link>
                                    </td>
                                    <td className=''>
                                        <button onClick={()=>handleDeleteData(ac?._id)} className='w-8 h-8 rounded-full text-white flex justify-center items-center bg-red-500'><FaTrash /></button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
};

export default MyClass;
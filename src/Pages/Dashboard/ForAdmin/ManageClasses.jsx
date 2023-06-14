import React from 'react';
import useAllClasses from '../../../Hook/useAllClasses';
import Loading from '../../../Loading/Loading';
import Container from '../../../Shared/Container';
import Title from '../../../Components/Title';
import { RiFeedbackFill } from 'react-icons/Ri';
import { BsCheckAll } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/Rx';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageClasses = () => {
    const [isLoading, allClass, refetch] = useAllClasses()

    if (isLoading) {
        return <Loading />;
    }

    console.log(allClass);

    const handleConfirm = (id, status) => {
        const updatedBooking = { status };

        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBooking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                if (data.modifiedCount > 0) {
                    toast.success('Updated status: ' + data.status)
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <Container>
                <Title
                    extraTitle={"Manage All Classes"}
                    title={"Here all Classes"}
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
                                <th>Class name</th>
                                <th>Price</th>
                                <th>Name & Email</th>
                                <th>Approve</th>
                                <th>Deny</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allClass.map((ac, index) => <tr
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
                                    <td>{ac?.className}</td>
                                    <td>{ac?.price}$</td>
                                    <td>
                                        {ac?.instructorEmail}
                                        <br />
                                        <span className="badge badge-primary badge-sm">{ac?.instructorName}</span>
                                    </td>
                                    <td>
                                        <button
                                            className={`w-8 h-8 rounded-full text-white flex justify-center items-center ${ac.status === 'approve' || ac.status === 'deny'
                                                ? 'bg-gray-500'
                                                : 'bg-green-500'
                                                }`}
                                            onClick={() => handleConfirm(ac._id, 'approve')}
                                            disabled={ac.status === 'approve' || ac.status === 'deny'}
                                        >
                                            <BsCheckAll />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className={`w-8 h-8 rounded-full text-white flex justify-center items-center ${ac.status === 'deny'
                                                ? 'bg-gray-500'
                                                : 'bg-red-500'
                                                }`}
                                            onClick={() => handleConfirm(ac._id, 'deny')}
                                            disabled={ac.status === 'deny'}
                                        >
                                            <RxCross2 />
                                        </button>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/sentFeedback/${ac._id}`}
                                            className="w-8 h-8 rounded-full text-white flex justify-center items-center bg-yellow-500"
                                        >
                                            <RiFeedbackFill />
                                        </Link>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default ManageClasses;
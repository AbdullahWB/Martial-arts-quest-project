import React from 'react';
import Container from '../../../Shared/Container';
import Title from '../../../Components/Title';
import useMyClass from '../../../Hook/useMyClass';
import Loading from '../../../Loading/Loading';
import { RxOpenInNewWindow } from 'react-icons/Rx';
import { FaTrash } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';

const UpdateClass = () => {
    const [isLoading, myClasses, refetch] = useMyClass()

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <Container>
                <Title
                    extraTitle={"update your Program"}
                    title={"Maintenance Your Classes"}
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
                                <th>status</th>
                                <th>Enrolled</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((ac, index) => <tr
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
                                    <td>{ac?.status}</td>
                                    <td>{ac?.enroll || 0}</td>
                                    <td>
                                        <button className='w-8 h-8 rounded-full text-white flex justify-center items-center bg-green-500'><RxOpenInNewWindow /></button>
                                    </td>
                                    <td>
                                        <button className='w-8 h-8 rounded-full text-white flex justify-center items-center bg-red-500'><FaTrash /></button>
                                    </td>
                                    <td>
                                        {
                                            ac?.feedback ? <>
                                                <button className='w-8 h-8 rounded-full text-white flex justify-center items-center bg-yellow-500'><MdFeedback /></button>
                                            </> : "No feedback"
                                        }
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

export default UpdateClass;
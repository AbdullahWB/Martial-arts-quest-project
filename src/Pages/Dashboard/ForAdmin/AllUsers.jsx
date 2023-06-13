import React from 'react';
import useUser from '../../../Hook/useUser';
import Loading from '../../../Loading/Loading';
import Container from '../../../Shared/Container';
import Title from '../../../Components/Title';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const { users, isLoading, refetch } = useUser();

    if (isLoading) {
        return <Loading />
    }

    const handleMakeChangeRole = (id, role) => {
        fetch(`http://localhost:5000/users/role/${id}?role=${role}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('change role successfully')
            })
            .catch(err => {
                console.log(err);
            });
    };



    return (
        <>
            <Container>
                <Title
                    extraTitle={"All type of users"}
                    title={"Here your all users"}
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
                                <th>Name & Email</th>
                                <th>Student</th>
                                <th>Instructor</th>
                                <th>Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle rounded-full w-12 h-12">
                                                    <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user?.email}
                                        <br />
                                        <span className="badge badge-primary badge-sm">{user?.name}</span>
                                    </td>
                                    <td>
                                        <button
                                            className={`w-8 h-8 rounded-full text-white flex justify-center items-center ${user.role === 'student' ? 'bg-gray-500' : 'bg-green-500'}`}
                                            onClick={() => handleMakeChangeRole(user._id, 'student')}
                                            disabled={user.role === 'student'}
                                        >
                                            <FaUserGraduate />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className={`w-8 h-8 rounded-full text-white flex justify-center items-center ${user.role === 'instructor' ? 'bg-gray-500' : 'bg-blue-500'}`}
                                            onClick={() => handleMakeChangeRole(user._id, 'instructor')}
                                            disabled={user.role === 'instructor'}
                                        >
                                            <FaChalkboardTeacher />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className={`w-8 h-8 rounded-full text-white flex justify-center items-center ${user.role === 'admin' ? 'bg-gray-500' : 'bg-yellow-500'}`}
                                            onClick={() => handleMakeChangeRole(user._id, 'admin')}
                                            disabled={user.role === 'admin'}
                                        >
                                            <MdAdminPanelSettings />
                                        </button>
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

export default AllUsers;
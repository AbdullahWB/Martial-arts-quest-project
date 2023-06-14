import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import Container from '../../../Shared/Container';
import Title from '../../../Components/Title';

const EnrolledClasses = () => {
    const { user } = useAuth()
    const [enrolled, setEnrolled] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/payment/enrolled/${user?.email}`)
            .then(res => res.json())
            .then(data => setEnrolled(data))
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(enrolled);
    return (
        <div>
            <Container>
                <Title
                    extraTitle={"All Enrolled Classes"}
                    title={"Here all Enrolled Classes"}
                    subtitle={"Join us at Martial Arts Academy and embark on a transformative journey of self-discovery, empowerment, and martial arts excellence. Unleash your potential, cultivate your mind-body connection, and become the best version of yourself."}
                />
            </Container>
            <div className="overflow-x-auto mx-5 mt-[50px] px-10 py-5 rounded-xl bg-[rgba(255,70,70,0.1)]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Photo</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((ac, index) => <tr
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
                                    <span className="badge badge-primary badge-sm">{ac?.item}</span>
                                </td>
                                <td>{ac?.price}$</td>
                                <td>{ac?.transactionId}</td>
                                <td>{ac?.date}</td>
                                <td className=''>
                                    {ac?.status}
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;
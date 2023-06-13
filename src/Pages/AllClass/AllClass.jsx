import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import Title from '../../Components/Title';
import SingleClass from './SingleClass';

const AllClass = () => {
    const [classItems, setClassItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClassItems(data))
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className='mt-[50px] mb-[150px]'>
            <Container>
                <Title
                    extraTitle={"Our Program"}
                    title={"Martial Arts Classes"}
                    subtitle={"Join us at Martial Arts Academy and embark on a transformative journey of self-discovery, empowerment, and martial arts excellence. Unleash your potential, cultivate your mind-body connection, and become the best version of yourself. Start your martial arts adventure with us today!"}
                />
                <div className='max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-10 mb-[150px]'>
                    {
                        classItems
                            .filter(item => item.status !== 'pending' && item.status !== 'deny')
                            .map(item => (
                                <SingleClass
                                    key={item._id}
                                    item={item}
                                />
                            ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllClass;
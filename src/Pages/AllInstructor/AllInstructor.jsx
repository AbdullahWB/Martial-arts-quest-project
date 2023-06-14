import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import Title from '../../Components/Title';
import SingleInstructor from './SingleInstructor';

const AllInstructor = () => {
    const [allInstructor, setAllInstructor] = useState([])

    useEffect(() => {
        fetch('https://summer-camp-server-ochre.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setAllInstructor(data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='mt-[50px] mb-[150px]'>
            <Container>
                <Title
                    extraTitle={"Our Tutor"}
                    title={"OUR KARATE TUTORIAL"}
                    subtitle={"At Martial Arts Academy, we are dedicated to providing a comprehensive and empowering martial arts training experience for students of all ages and skill levels. Our mission is to instill the values of discipline, respect, and perseverance while fostering physical and mental growth through the practice of various martial arts disciplines."}
                />
                <div className='max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-10 mb-[150px]'>
                    {
                        allInstructor.map(instructor => <SingleInstructor
                            key={instructor._id}
                            instructor={instructor}
                        ></SingleInstructor>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllInstructor;
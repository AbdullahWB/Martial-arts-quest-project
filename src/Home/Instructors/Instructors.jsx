import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import Title from '../../Components/Title';
import CartInstructor from './CartInstructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://summer-camp-server-ochre.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(err => {
                console.log(err);
            })
    }, [])

    const slicedClasses = instructors.slice(0, 6)

    return (
        <Container>
            <Title
                extraTitle={"Our Tutor"}
                title={"OUR KARATE TUTORIAL"}
                subtitle={"At Martial Arts Academy, we are dedicated to providing a comprehensive and empowering martial arts training experience for students of all ages and skill levels. Our mission is to instill the values of discipline, respect, and perseverance while fostering physical and mental growth through the practice of various martial arts disciplines."}
            />
            <div className='max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-10 mb-[150px]'>
                {
                    slicedClasses.map(instructor => <CartInstructor
                        key={instructor._id}
                        instructor={instructor}
                    ></CartInstructor>)
                }
            </div>
        </Container>
    );
};

export default Instructors;
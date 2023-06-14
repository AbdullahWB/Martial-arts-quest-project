import React, { useEffect, useState } from 'react';
import ClassCart from './ClassCart';
import Title from '../../Components/Title';
import Container from '../../Shared/Container';

const Classes = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://summer-camp-server-ochre.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(err => {
                console.log(err);
            })
    }, [])

    const slicedClasses = classes.slice(0, 6)

    return (
        <Container>
            <Title
                extraTitle={"Our Program"}
                title={"Martial Arts Classes"}
                subtitle={"Join us at Martial Arts Academy and embark on a transformative journey of self-discovery, empowerment, and martial arts excellence. Unleash your potential, cultivate your mind-body connection, and become the best version of yourself. Start your martial arts adventure with us today!"}
            />
            <div className='max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-10 mb-[150px]'>
                {
                    slicedClasses.map(meet => <ClassCart
                        key={meet._id}
                        meet={meet}
                    ></ClassCart>)
                }
            </div>
        </Container>
    );
};

export default Classes;
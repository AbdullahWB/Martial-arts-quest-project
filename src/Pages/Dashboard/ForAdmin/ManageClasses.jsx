import React from 'react';
import useAllClasses from '../../../Hook/useAllClasses';
import Loading from '../../../Loading/Loading';
import Container from '../../../Shared/Container';
import Title from '../../../Components/Title';
import ClassCard from './ClassCard';

const ManageClasses = () => {
    const [isLoading, allClass, refetch] = useAllClasses()

    if (isLoading) {
        return <Loading />;
    }

    console.log(allClass);

    return (
        <div>
            <Container>
                <Title
                    extraTitle={"Manage All Classes"}
                    title={"Here all Classes"}
                    subtitle={"Join us at Martial Arts Academy and embark on a transformative journey of self-discovery, empowerment, and martial arts excellence. Unleash your potential, cultivate your mind-body connection, and become the best version of yourself."}
                />
                <div className='max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-10 mb-[150px]'>
                    {
                        allClass.map(ac => <ClassCard
                            key={ac._id}
                            ac={ac}
                        ></ClassCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default ManageClasses;
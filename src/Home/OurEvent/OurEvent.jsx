import React from 'react';
import Title from '../../Components/Title';
import Container from '../../Shared/Container';

const OurEvent = () => {
    return (
        <div className='mb-[150px]'>
            <Title
                extraTitle={"More events"}
                title={"Upcoming Events"}
                subtitle={"Join us at Martial Arts Academy and embark on a transformative journey of self-discovery, empowerment, and martial arts excellence. Unleash your potential, cultivate your mind-body connection, and become the best version of yourself."}
            />
            <Container>
                <div className='mt-[50px]'>
                    <div className='md:flex md:flex-row flex gap-5 md:gap-0 flex-col justify-between items-center'>
                        <img src="https://tiger-claw.themerex.net/wp-content/uploads/2017/05/event-2.png" alt="" />
                        <div>
                            <div className='flex gap-5'>
                                <h1>1 April, 2024</h1>
                                <p>Starting at 12:00 AM</p>
                            </div>
                            <h1 className='font-semibold text-2xl'>Karate Grand Prix Ostrava.</h1>
                        </div>
                        <button className='btn btn-primary px-8 hover:bg-transparent hover:text-primary text-white rounded-full'>learn More</button>
                    </div>
                    <div className="divider"></div>
                    <div className='md:flex md:flex-row flex gap-5 md:gap-0 flex-col justify-between items-center'>
                        <img src="https://tiger-claw.themerex.net/wp-content/uploads/2017/05/event-3.png" alt="" />
                        <div>
                            <div className='flex gap-5'>
                                <h1>1 April, 2024</h1>
                                <p>Starting at 12:00 AM</p>
                            </div>
                            <h1 className='font-semibold text-2xl'>Karate Grand Prix Ostrava.</h1>
                        </div>
                        <button className='btn btn-primary px-8 hover:bg-transparent hover:text-primary text-white rounded-full'>learn More</button>
                    </div>
                    <div className="divider"></div>
                    <div className='md:flex md:flex-row flex gap-5 md:gap-0 flex-col justify-between items-center'>
                        <img src="https://tiger-claw.themerex.net/wp-content/uploads/2017/05/event-1.png" alt="" />
                        <div>
                            <div className='flex gap-5'>
                                <h1>1 April, 2024</h1>
                                <p>Starting at 12:00 AM</p>
                            </div>
                            <h1 className='font-semibold text-2xl'>Karate Grand Prix Ostrava.</h1>
                        </div>
                        <button className='btn btn-primary px-8 hover:bg-transparent hover:text-primary text-white rounded-full'>learn More</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurEvent;
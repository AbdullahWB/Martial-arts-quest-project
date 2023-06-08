import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Classes from './Classes/Classes';
import Instructors from './Instructors/Instructors';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Martial Arts Quest | Home</title>
            </Helmet>
            <Banner />
            <Classes />
            <Instructors />
        </div>
    );
};

export default Home;
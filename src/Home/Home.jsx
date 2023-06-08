import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Classes from './Classes/Classes';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Martial Arts Quest | Home</title>
            </Helmet>
            <Banner />
            <Classes />
        </div>
    );
};

export default Home;
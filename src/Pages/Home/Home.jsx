import React from 'react';
import FeautureImg from './FeautureImg/FeautureImg';
import Reviews from './Reviews/Reviews';
import Research from './Research/Research';

const Home = () => {
    return (
        <div>
            <FeautureImg></FeautureImg>
            <Research></Research>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
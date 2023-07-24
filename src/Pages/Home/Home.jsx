import React from 'react';
import FeautureImg from './FeautureImg/FeautureImg';
import Reviews from './Reviews/Reviews';
import Research from './Research/Research';
import TopCollage from './TopCollage';

const Home = () => {
    return (
        <div>
            <TopCollage></TopCollage>
            <FeautureImg></FeautureImg>
            <Research></Research>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
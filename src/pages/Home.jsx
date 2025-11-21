import React from 'react';
import Hero from '../components/home/Hero';
import PainPoints from '../components/home/PainPoints';
import Solutions from '../components/home/Solutions';
import FeaturesPreview from '../components/home/FeaturesPreview';
import SocialProof from '../components/home/SocialProof';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <PainPoints />
            <Solutions />
            <FeaturesPreview />
            <SocialProof />
        </div>
    );
};

export default Home;

import React from 'react';
import HeroSection from '../components/HeroSection';
import ChefSection from '../components/ChefSection';
import About from '../components/About';
import OurItems from '../components/OurItems';

const Home = () => {
    return (

        <div >
            <HeroSection></HeroSection>
            <ChefSection></ChefSection>
            <About></About>
            <OurItems></OurItems>
        </div>

    );
};

export default Home;


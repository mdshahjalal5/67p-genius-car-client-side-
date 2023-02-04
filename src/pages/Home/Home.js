import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <About></About>
            <h2>islam</h2>
            <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../../layouts/Banner/Banner';
import WelcomePage from '../../layouts/WelcomePage/WelcomePage';
import PopularClasses from '../../layouts/Popular/PopularClasses';
import PopularInstructor from '../../layouts/PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomePage></WelcomePage>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;
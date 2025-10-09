import React from 'react';
import Banner from './Banner/Banner';
import HomeApps from './HomeApps/HomeApps';
import { useLoaderData } from 'react-router';

const Home = () => {

    // const allData = useLoaderData();

    const homeAllData = useLoaderData();

    return (
        <div className='w-12/12 mx-auto'>
            <Banner></Banner>
            <HomeApps homeAllData={homeAllData}></HomeApps>


        </div>
    );
};

export default Home;
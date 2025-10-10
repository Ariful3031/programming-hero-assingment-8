import React, { Suspense } from 'react';
import HomeSingleData from './HomeSingleData';
import { Link } from 'react-router';


const HomeApps = ({ fetchApps }) => {

    return (
        <div className=' w-12/12 mx-auto bg-[#F1F5E8] text-center p-15 '>
            <div>
                <h1 className='text-5xl font-bold text-[#001931]'>Trending Apps</h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='md:grid md:grid-cols-4 gap-4  my-10'>
                {
                    fetchApps.map(homeData => <HomeSingleData key={homeData.id} homeData={homeData}></HomeSingleData>)
                }
            </div>
            <Suspense fallback={<h1>loading</h1>}>
                <Link to='/apps' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>
            </Suspense>

        </div>
    );
};

export default HomeApps;
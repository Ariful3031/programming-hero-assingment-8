import React from 'react';
import HomeSingleData from './HomeSingleData';


const HomeApps = ({ homeAllData }) => {
    // console.log(homeAllData)
    return (
        <div className=' w-12/12 mx-auto bg-[#F1F5E8] text-center p-15'>
            <div>
                <h1 className='text-5xl font-bold text-[#001931]'>Trending Apps</h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-4  my-10'>
                {
                    homeAllData.map(homeData => <HomeSingleData key={homeData.id} homeData={homeData}></HomeSingleData>)
                }
            </div>
            <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</button>

        </div>
    );
};

export default HomeApps;
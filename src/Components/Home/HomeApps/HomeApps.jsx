import React, { Suspense } from 'react';
import HomeSingleData from './HomeSingleData';
import { Link } from 'react-router';
import useApps from '../../Hooks/UseApps';
import SkeletonLoading from '../../SkelationLoading/SkelationLoading';



const HomeApps = ({ fetchApps }) => {
    const { loading } = useApps();

    return (
        <div className=' w-12/12 mx-auto bg-[#F1F5E8] text-center p-15 '>
            <div>
                <h1 className='text-5xl font-bold text-[#001931]'>Trending Apps</h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {
                loading ? (<SkeletonLoading />) : (
                    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  my-10'>

                        {
                            fetchApps.map(homeData => <HomeSingleData key={homeData.id} homeData={homeData}></HomeSingleData>)
                        }

                    </div>

                )
            }


            <Link to='/apps' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>



        </div>
    );
};

export default HomeApps;
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from './SingleApp';
import { CiSearch } from 'react-icons/ci';

const Apps = () => {
    const [allAppsCount, setAllAppsCount] = useState([]);
    // const allData = useLoaderData();
    const allApps = useLoaderData();

    useEffect(() => {
        setAllAppsCount(allApps)
    }, [])



    console.log(allAppsCount)
    return (
        <div className=' w-12/12 mx-auto bg-[#F1F5E8] text-center p-15'>
            <div>
                <h1 className='text-5xl font-bold text-[#001931]'>Our All Applications</h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-semibold text-[#001931]'><span>({allApps.length})</span>Apps Found</p>

                    <input className=' position: relative border-1 border-gray-300 py-1 px-3' type="search" name="" placeholder=' search Apps' id="" />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4  my-10'>
                {
                    allAppsCount.map(app => <SingleApp key={app.id} app={app}></SingleApp>)
                }

            </div>

        </div>
    );
};

export default Apps;
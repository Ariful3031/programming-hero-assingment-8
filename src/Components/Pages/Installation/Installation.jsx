import React, { useEffect, useState } from 'react';
import SingleInstallApp from './SingleInstallApp';

const Installation = () => {

    const [install, setInstall] = useState([])

    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('install'))
        if (saveList) setInstall(saveList)

    }, [])
    console.log(install.length)


    return (
        <div className=' w-12/12 mx-auto bg-[#F1F5E8] text-center p-15'>
            <div>
                <h1 className='text-5xl font-bold text-[#001931]'>Your Installed Apps</h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-semibold text-[#001931]'><span>({install.length})</span>Apps Found</p>

                    <label>
                        <input className='btn' placeholder='type' type="text" name="" id="" />
                    </label>
                </div>
            </div>
            <div className='my-10'>
                {
                    install.map(app => <SingleInstallApp key={app.id} app={app} ></SingleInstallApp>)
                }

            </div>

        </div>
    );
};

export default Installation;
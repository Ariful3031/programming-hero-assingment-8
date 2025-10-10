import React, { useEffect, useState } from 'react';
import SingleInstallApp from './SingleInstallApp';


const Installation = () => {


    const [install, setInstall] = useState([]);

    const [sortOrder, setSortOrder] = useState('none');


    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('install'))
        if (saveList) setInstall(saveList)

    }, [])

    const handleUninstall = (id) => {


        const existingList = JSON.parse(localStorage.getItem('install'))

        const updateList = existingList.filter(p => p.id !== id)
        setInstall(updateList)
        localStorage.setItem('install', JSON.stringify(updateList))
    }


    const sortItems = () => {
        if (sortOrder === 'download-ascending') {
            return [...install].sort((a, b) => a.downloads - b.downloads)
        }
        else if (sortOrder === 'downloads-descending') {
            return [...install].sort((a, b) => b.downloads - a.downloads)
        }
        else {
            return install
        }
    }



    return (
        <div className=' w-12/12 mx-auto bg-[#F1F5E8] text-center p-15'>
            <div>
                <h1 className='text-5xl font-bold text-[#001931]'>Your Installed Apps</h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-semibold text-[#001931]'><span>({install.length})</span>Apps Found</p>

                    <label className='form-control w-full max-w-xs p-3 rounded-xl'>
                        <select className='select select-bordered text-2xl' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                            <option value='none'>sort</option>
                            <option value='downloads-ascending'>low to high</option>
                            <option value='downloads-descending'>high to low</option>

                        </select>
                    </label>

                </div>
            </div>
            <div className='my-10'>
                {
                    sortItems().map(app => <SingleInstallApp key={app.id} app={app} handleUninstall={handleUninstall}  ></SingleInstallApp>)
                }

            </div>


        </div>
    );
};

export default Installation;
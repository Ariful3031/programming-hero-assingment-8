
import SingleApp from './SingleApp';
import { CiSearch } from 'react-icons/ci';
import useApps from '../../Hooks/UseApps';
import { useState } from 'react';

const Apps = () => {
    const { apps } = useApps();
    const [search, setSearch] = useState("");
    const term = search.trim().toLocaleLowerCase();
    const searchApps = term ? apps.filter(app => app.title.trim().toLocaleLowerCase().includes(term)) : apps


    // console.log(searchApps)

    return (
        <div className=' w-12/12 mx-auto bg-[#F1F5E8] text-center p-15'>
            <div>
                <h1 className='text-5xl font-bold text-[#001931]'>Our All Applications</h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-semibold text-[#001931]'><span>({searchApps.length})</span>Apps Found</p>

                    <label>

                        <input value={search} onChange={(e) => setSearch(e.target.value)} className=' position: relative border-1 border-gray-300 py-1 px-3' type="search" name="" placeholder=' search Apps' id="" />
                    </label>
                </div>
            </div>



            {
                searchApps.length > 0 ? (
                    <div className='grid md:grid-cols-4 gap-6  my-10'>
                        {
                            searchApps.map(app => <SingleApp key={app.id} app={app} searchApps={searchApps}></SingleApp>)
                        }
                    </div>
                ) : (
                    <h1 className='text-5xl font-bold text-gray-500 mt-14'>NO Apps Found</h1>
                )
            }





        </div>
    );
};

export default Apps;
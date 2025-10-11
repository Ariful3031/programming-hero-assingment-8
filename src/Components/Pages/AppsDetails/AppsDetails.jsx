
import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/UseApps';
import downloadImg from '../../../assets/icon-downloads.png';
import ratingImg from '../../../assets/icon-ratings.png';
import reviewImg from '../../../assets/icon-review.png';
import RatingChart from './RatingChart';
import { toast } from 'react-toastify';
import PageLoading from '../../SkelationLoading/PageLoading';
import ErrorApp from '../ErrorPage/ErrorApp';

const AppsDetails = () => {
    const { id } = useParams();
    const parseId = parseInt(id);
    const { apps, loading } = useApps();
    const [installChange, setInstallChange] = useState(false);

    if (loading) { return <PageLoading></PageLoading> }

    const singleApp = apps.find(app => app.id === parseId);
    if (!singleApp) return <ErrorApp></ErrorApp>;

    const { image, downloads, title, ratingAvg, companyName, size, description, ratings } = singleApp;

    const handleInstall = () => {

        const existingList = JSON.parse(localStorage.getItem('install')) || [];

        const duplicate = existingList.some(p => p.id === singleApp.id);
        if (duplicate) {
            toast.error("This app is already installed");
            return;
        }

        const updatedList = [...existingList, singleApp];
        localStorage.setItem('install', JSON.stringify(updatedList));
        setInstallChange(true);
        toast.success("install")
    };

    return (
        <div className='bg-[#F1F5E8] p-4 md:p-20'>
            <div className='grid md:grid-cols-3 py-5 border-b-2 border-gray-300'>
                <img
                    className='w-[350px] h-[321px] bg-white rounded-lg'
                    src={image}
                    alt={title}
                />
                <div className='col-span-2'>
                    <div className='pb-4 border-b-2 border-gray-300'>
                        <h2 className='text-3xl font-bold text-[#001931]'>{title}</h2>
                        <p className='text-xl font-medium text-[#627382] pt-2 pb-7'>
                            Developed by <span className='text-[#632EE3]'>{companyName}</span>
                        </p>
                    </div>

                    <div className='flex items-center gap-6 my-7'>
                        <div className='pr-6'>
                            <img className='w-[40px] h-[40px]' src={downloadImg} alt="" />
                            <p className='text-[#001931]'>Downloads</p>
                            <h2 className='text-4xl font-bold text-[#001931]'>{downloads}</h2>
                        </div>
                        <div className='pr-6'>
                            <img className='w-[40px] h-[40px]' src={ratingImg} alt="" />
                            <p className='text-[#001931]'>Average Ratings</p>
                            <h2 className='text-4xl font-bold text-[#001931]'>{ratingAvg}</h2>
                        </div>
                        <div className='pr-6'>
                            <img className='w-[40px] h-[40px]' src={reviewImg} alt="" />
                            <p className='text-[#001931]'>Total Reviews</p>
                            <h2 className='text-4xl font-bold text-[#001931]'>{ratingAvg}</h2>
                        </div>
                    </div>


                    <button
                        onClick={handleInstall}
                        className={`btn text-xl font-medium ${installChange ? 'bg-[#00D390] cursor-not-allowed' : 'bg-[#00D390]'
                            }`}
                        disabled={installChange}
                    >
                        {installChange ? 'Installed' : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>

            <RatingChart description={description} ratings={ratings} />
        </div>
    );
};

export default AppsDetails;

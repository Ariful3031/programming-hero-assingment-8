import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/UseApps';
import downloadImg from '../../../assets/icon-downloads.png'
import ratingImg from '../../../assets/icon-ratings.png'
import reviewImg from '../../../assets/icon-review.png'
import RatingChart from './RatingChart';
import { IoReturnUpBack } from 'react-icons/io5';

const AppsDetails = () => {
    const { id } = useParams()
    const parseId = parseInt(id);
    const { apps, loading, error } = useApps()
    const singleApp = apps.find(app => app.id === parseId);
    if (loading) return <p>loading...</p>
    const { image, downloads, title, ratingAvg, companyName, size, description } = singleApp;


    const handleInstall = () => {
        const existingList = JSON.parse(localStorage.getItem('install'))
        let updateList = [];
        if (existingList) {
            const duplicate = existingList.some(p => p.id === singleApp.id)
            if (duplicate) {
                alert("this apps already install")
                return
            }
            updateList = [...existingList, singleApp]
        } else {
            updateList.push(singleApp)
        }

        localStorage.setItem('install', JSON.stringify(updateList))

    }
    return (
        <div className=' bg-[#F1F5E8] p-20'>
            <div className='grid grid-cols-3 py-5 border-b-2 border-gray-300'>
                <img className='w-[350px] h-[321px] bg-white rounded-lg' src={image} alt="" />
                <div className='col-span-2'>
                    <div className='pb-4 border-b-2 border-gray-300'>
                        <h2 className='text-3xl font-bold text-[#001931]'>{title}</h2>
                        <p className='text-xl font-medium text-[#627382] pt-2 pb-7 '>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
                    </div>
                    <div className='flex gap-6 my-7 flex-1 '>
                        <div className='pr-6'>
                            <img className='w-[40px] h-[40px]' src={downloadImg} alt="" />
                            <p className='text-[#001931]'>Downloads</p>
                            <h2 className='text-4xl font-bold text-[#001931]'>{downloads}</h2>
                        </div>
                        <div className='pr-6'>
                            <img className='w-[40] h-[40px]' src={ratingImg} alt="" />
                            <p className=' text-[#001931]'>Average Ratings</p>
                            <h2 className='text-4xl font-bold text-[#001931]'>{ratingAvg}</h2>
                        </div>
                        <div className='pr-6'>
                            <img className='w-[40px] h-[40px]' src={reviewImg} alt="" />
                            <p className=' text-[#001931]'>Total Reviews</p>
                            <h2 className='text-4xl font-bold text-[#001931]'>{ratingAvg}</h2>
                        </div>
                    </div>
                    <button onClick={() => handleInstall(singleApp.id)} className=' btn text-xl font-medium bg-[#00D390]'>Install Now ({size} MB)</button>
                </div>
            </div>
            <RatingChart description={description}></RatingChart>
        </div>
    );
};

export default AppsDetails;
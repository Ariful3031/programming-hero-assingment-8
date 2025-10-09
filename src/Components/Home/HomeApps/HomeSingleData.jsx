import React from 'react';
import downloadImg from '../../../assets/icon-downloads.png'
import ratingImg from '../../../assets/icon-ratings.png'

const HomeSingleData = ({ homeData }) => {
    console.log(homeData)
    const { title, image, downloads, ratingAvg } = homeData;
    return (
        <div className='bg-[#FFFFFF] rounded-xl p-4 hover:scale-105 transition ease-in-out'>
            <img className='h-[316px] w-full rounded-lg' src={image} alt="" />
            <h1 className='text-xl font-medium text-[#001931] my-4 text-start'>{title}</h1>
            <div className='flex items-center justify-between '>
                <div className=' btn flex gap-1 items-center text-[#00D390] font-medium'>
                    <img className='w-[20px] h-[20px]' src={downloadImg} alt="" />
                    <button className='text-xl'>{downloads}</button>
                </div>
                <div className=' btn flex gap-1 items-center text-[#FF8811] font-medium '>
                    <img className='w-[20px] h-[20px]' src={ratingImg} alt="" />
                    <button className='text-xl'>{ratingAvg}</button>
                </div>
            </div>
        </div>
    );
};

export default HomeSingleData;
import React from 'react';

const RatingChart = ({ description }) => {
    return (
        <div>
            <div className='py-10 border-b-2 border-gray-300'>
                <h1 className='text-[24px] font-semibold text-[#001931]  mb-4'>Ratings</h1>
                <div className=''>
                    charts
                </div>
            </div>
            <div>
                <h1 className='text-[24px] font-semibold text-[#001931] mb-4 mt-7'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default RatingChart;
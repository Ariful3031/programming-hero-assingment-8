import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const RatingChart = ({ description, ratings }) => {
    // console.log(ratings)
    return (
        <div>
            <div className='py-10 border-b-2 border-gray-300'>
                <h1 className='text-[24px] font-semibold text-[#001931]  mb-4'>Ratings</h1>
                <div className='w-11/12 h-[200px] md:h-[300px] '>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ratings} layout='vertical'>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" reversed={true} />

                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#FF8811" />
                        </BarChart>
                    </ResponsiveContainer>
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
// export default Example;
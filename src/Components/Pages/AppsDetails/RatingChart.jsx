import React from 'react';
// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, } from "recharts";
// import React from 'react';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RatingChart = ({ description, ratings }) => {
    console.log(ratings)
    // const singleData = ratings.map(data => console.log(data))
    return (
        <div>
            <div className='py-10 border-b-2 border-gray-300'>
                <h1 className='text-[24px] font-semibold text-[#001931]  mb-4'>Ratings</h1>
                <div className=''>
                    {/* <div className="w-full h-96 p-4 bg-white rounded-2xl shadow">
                        <h2 className="text-xl font-semibold mb-4">Ratings</h2>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart
                                layout="vertical"
                                data={singleData}
                                margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Tooltip />
                                <Bar dataKey="value" fill="#FF7A00" barSize={20} radius={[4, 4, 4, 4]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div> */}

                    {/* <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={ratings}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        </BarChart>
                    </ResponsiveContainer> */}





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
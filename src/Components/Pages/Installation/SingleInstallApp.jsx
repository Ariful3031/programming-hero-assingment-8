import React from 'react';
import downloadImg from '../../../assets/icon-downloads.png'
import ratingImg from '../../../assets/icon-ratings.png'

const SingleInstallApp = ({ app, handleUninstall }) => {

    const { image, title, downloads, ratingAvg, size } = app;

    return (
        <div className='bg-white rounded-xl flex p-4 mb-4 items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img className='w-[80px] h-[80px] bg-white rounded-lg' src={image} alt="" />
                <div>
                    <h2 className='text-xl font-medium text-[#001931] text-start'>{title}</h2>
                    <div className='flex gap-4 mt-4'>
                        <div className='flex h-[20px] gap-2 text-[#00D390]'>
                            <img src={downloadImg} alt="" />
                            <h2>{downloads}</h2>
                        </div>
                        <div className='flex h-[20px] gap-2 text-[#FF8811]'>
                            <img src={ratingImg} alt="" />
                            <h2>{ratingAvg}</h2>
                        </div>
                        <div>
                            <p>{size} MB</p>
                        </div>
                    </div>
                </div>

            </div>
            <button onClick={() => handleUninstall(app.id)} className=' btn text-xl font-medium bg-[#00D390] rounded-lg text-white'>Uninstall</button>

        </div>
    );
};

export default SingleInstallApp;
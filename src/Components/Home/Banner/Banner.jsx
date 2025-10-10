import React from 'react';
import playStoreImg from '../../../assets/Group (3).png'
import appStoreImg from '../../../assets/Group (4).png'
import heroImg from '../../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='bg-[#F1F5E8] text-center pt-15'>
                <h1 className='text-7xl text-[#001931] font-bold'>We Build <br />
                    <span className='text-[#632EE3]'> Productive</span> Apps</h1>
                <p className='text-[#627382] mt-4'>At HERO. IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-4 my-10 justify-center'>
                    <a href="https://play.google.com/store/games?hl=en" className='btn flex gap-3'>
                        <img src={playStoreImg} alt="" />
                        <p> Google Play</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/App_Store_(Apple)" className=' btn flex gap-3'>
                        <img src={appStoreImg} alt="" />
                        <p> App Store</p>
                    </a>
                </div>
                <img className='mx-auto' src={heroImg} alt="" />
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20'>
                <h1 className='text-5xl font-bold text-white text-center mb-10'>Trusted by Millions, Built for You</h1>
                <div className='flex gap-6 justify-center'>
                    <div className='text-center px-15'>
                        <p className='text-[#FFFFFF]'>Total Downloads</p>
                        <h1 className='text-6xl font-bold text-[#FFFFFF]'>29.6M</h1>
                        <p className='text-[#FFFFFF]'>21% More Than Last Month</p>
                    </div>
                    <div className='text-center px-15'>
                        <p className='text-[#FFFFFF]'>Total Reviews</p>
                        <h1 className='text-6xl font-bold text-[#FFFFFF]'>906K</h1>
                        <p className='text-[#FFFFFF]'>46% More Than Last Month</p>
                    </div>
                    <div className='text-center px-15'>
                        <p className='text-[#FFFFFF]'>Active Apps</p>
                        <h1 className='text-6xl font-bold text-[#FFFFFF]'>132+</h1>
                        <p className='text-[#FFFFFF]'>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
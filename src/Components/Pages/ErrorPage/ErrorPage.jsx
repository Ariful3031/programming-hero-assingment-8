import React from 'react';
import Navbar from '../Header/Nabar';
import Footer from '../Footer/Footer';
import Error from './Error';

const ErrorPage = () => {
    return (
        <div className='w-12/12 mx-auto bg-[#F1F5E8] text-center'>
            <Navbar></Navbar>
            <Error></Error>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;
import React from 'react';
import Navbar from '../Pages/Header/Nabar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            {/* <ToastContainer /> */}
        </div>
    );
};

export default Root;
import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Home/Home';
import App from '../../App';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppsDetails from '../Pages/AppsDetails/AppsDetails';

// loader: () => fetch('BooksData.json'),

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        hydrateFallbackElement: <p>loading</p>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/apps",
                Component: Apps
            },
            {
                path: "/installation",
                Component: Installation
            },
            {
                path: "/details/:id",
                Component: AppsDetails
            }

        ]
    },
]);

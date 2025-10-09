import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Home/Home';
import App from '../../App';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';

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
                loader: () => fetch('HomeData.json'),
                path: "/",
                Component: Home
            },
            {
                path: "/apps",
                loader: () => fetch('AppsData.json'),
                Component: Apps
            },
            {
                path: "/installation",
                Component: Installation
            }

        ]
    },
]);

import App from '../app';
import About from '../pages/About/index';
import ErrorPage from '../pages/NotFound/index';
import {
    createBrowserRouter,
} from "../../node_modules/react-router-dom/dist/index";
import React from 'react';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'about', element: <About /> }
        ]
    },
]);
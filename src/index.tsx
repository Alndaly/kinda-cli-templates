import ReactDOM from "react-dom/client";
import { routeConfig } from "./router/index";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import React from "react";

const router = createBrowserRouter(routeConfig);
const node = document.querySelector("#root");
if (node) {
    ReactDOM.createRoot(node).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
} else {
    console.error('React没有找到root根节点')
}


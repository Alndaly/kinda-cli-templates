import ReactDOM from "react-dom/client";
import { router } from "./router/index";
import { RouterProvider } from "../node_modules/react-router-dom/dist/index";
import React from "react";

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


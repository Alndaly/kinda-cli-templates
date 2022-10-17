import { useRouteError } from "../../../node_modules/react-router/dist/index";
import React from "react";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}
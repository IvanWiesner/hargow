import React from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";
function HomePage({login, setLogin}){

    if (!login) {
        return <Redirect to = "/login"/>
    }

    return (
        <div>
            <h1 className="about-title">About Har Gow</h1>
            <img src =""/>
            <p></p>
        </div>
    )
}

export default HomePage;
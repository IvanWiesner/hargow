import React from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";
function HomePage({login, setLogin}){

    if (!login) {
        return <Redirect to = "/login"/>
    }

    return (
        <div>
            <h1 className="about-title">About Har Gow</h1>
            <p>Har Gow is made by Foodies for Foodies who have an affinity for Asian cuisine.
                Making an account with Har Gow gives you access to locals’ favorite Asian dishes you can find in the Denver Metropolitan area.
                From Noodles, to Stir-Frys, and Dim Sum dishes, you’ll be sure to find a dish that you’ll love.
                Have a dish that you want to feature? Add it to Har Gow to share!</p>
            <img src =""/>
        </div>
    )
}

export default HomePage;
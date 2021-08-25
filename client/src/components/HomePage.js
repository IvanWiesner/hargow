import React from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";
function HomePage({login, setLogin}){

    if (!login) {
        return <Redirect to = "/login"/>
    }

    return (
        <div>
            <p>monkey</p>
        </div>
    )
}

export default HomePage;
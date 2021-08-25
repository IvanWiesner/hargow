import React from "react"
import { BrowserRouter as Redirect, Router, Route } from "react-router-dom";
import NoodleCard from "./NoodleCard"

function NoodlePage ({noodles, setNoodles, login, setLogin, search, setSearch, setReviews, reviews, handleNewReview}) {
    console.log(noodles)
    // if (!login) {
    //     return <Redirect to = "/login"/>
    // }

    const filterNoodles = () => {
    return noodles.filter((noodle)=>
    noodle.name.toLowerCase().includes(search.toLowerCase()))
    }
    const displayNoodles = filterNoodles().map((noodle, index) => {
        return (
        <NoodleCard 
        noodle={noodle}
        key={index}
        reviews={reviews.filter(review => noodle.id===review.noodle_id)}
        handleNewReview={handleNewReview}
        />
        )
    })

    return (
        <ul>
            {displayNoodles}
        </ul>
    )
}

export default NoodlePage;
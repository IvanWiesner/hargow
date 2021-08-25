import React from "react"
import { BrowserRouter as Redirect } from "react-router-dom";
import StirCard from "./StirCard"

function NoodlePage ({stirFrys, setStirFrys, login, setLogin, search, setSearch, setReviews, reviews, handleNewReview}) {

    if (!login) {
        return <Redirect to = "/login"/>
    }

    const filterStirFrys = () => {
    return stirFrys.filter((stirFry)=>
    stirFry.name.toLowerCase().includes(search.toLowerCase()))
    }
    const displayStirFrys = filterStirFrys().map((stirFry, index) => {
        return (
        <StirCard 
        stirFry={stirFry}
        key={index}
        reviews={reviews.filter(review => stirFry.id===review.stirFry_id)}
        handleNewReview={handleNewReview}
        />
        )
    })

    return (
        <ul>
            {displayStirFrys}
        </ul>
    )
}

export default NoodlePage;
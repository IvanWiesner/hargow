import React from "react"
import { BrowserRouter as Redirect } from "react-router-dom";
import DimCard from "./DimCard"

function DimPage ({dimsums, setDimsums, login, setLogin, search, setSearch, setReviews, reviews, handleNewReview}) {

    if (!login) {
        return <Redirect to = "/login"/>
    }

    const filterDimsums = () => {
    return dimsums.filter((dimsum)=>
    dimsum.name.toLowerCase().includes(search.toLowerCase()))
    }
    const displayDimsums = filterDimsums().map((dimsum, index) => {
        return (
        <DimCard 
        dimsums={dimsum}
        key={index}
        reviews={reviews.filter(review => dimsum.id===review.dimsum_id)}
        handleNewReview={handleNewReview}
        />
        )
    })

    return (
        <ul>
            {displayDimsums}
        </ul>
    )
}

export default DimPage;
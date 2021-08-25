import React from "react"
import DimSum from "./DimSum"

function DimCard ({ dimsums, reviews, handleNewReviews}) {

    return (
        <DimSum 
        id={dimsums.id}
        name={dimsums.name}
        cuisine={dimsums.cuisine}
        price={dimsums.price}
        image_url={dimsums.image_url}
        restaurant_name={dimsums.restaurant_name}
        city_name={dimsums.city_name}
        handleNewReviews={handleNewReviews}
        reviews={reviews}
        />
    )
}

export default DimCard;
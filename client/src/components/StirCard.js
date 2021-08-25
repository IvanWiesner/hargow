import React from "react"
import StirFry from "./StirFry"

function StirCard ({ stirFry, reviews, handleNewReviews }) {

    return (
        <StirFry 
        id={stirFry.id}
        name={stirFry.name}
        cuisine={stirFry.cuisine}
        price={stirFry.price}
        image_url={stirFry.image_url}
        restaurant_name={stirFry.restaurant_name}
        city_name={stirFry.city_name}
        handleNewReviews={handleNewReviews}
        reviews={reviews}
        />
    )
}

export default StirCard;
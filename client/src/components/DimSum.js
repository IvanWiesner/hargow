import React from "react"

function DimSum ({ id, name, cuisine, price, image_url, restaurant_name, city_name, handleNewReviews, reviews}) {

    return (
        <div> 
            <h1 className="dish-name">{name}</h1>
            <img src={image_url}/>
            <p>$ {price}</p>
            <p>{restaurant_name}</p>
            <p>{city_name}</p>
        </div>
    )
}

export default DimSum;
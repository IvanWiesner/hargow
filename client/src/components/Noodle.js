import React from "react"

function Noodle ({id, name, cuisine, price, image_url, restaurant_name, city_name, handleNewReviews, reviews}) {
    return (
        
        <div className="dishes-list">
            <h2 className="dish-name">{name}</h2>
            <img src={image_url}/>
            <p>$ {price}</p>
            <p>{restaurant_name}</p>
            <p>{city_name}</p>
            <p>{reviews}</p>
        </div>
    )
}

export default Noodle;
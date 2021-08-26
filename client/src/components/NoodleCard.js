import React from "react"
import Noodle from "./Noodle"
import { useState } from "react"

function NoodleCard ({noodle, reviews, handleNewReviews}) {
    console.log(reviews)
    const [toggle, setToggle] = useState(true)

    const toggleReviews = () => {
    toggle ? setToggle(false): setToggle(true)
    }
    return (
        <>
        <Noodle 
        id={noodle.id}
        name={noodle.name}
        cuisine={noodle.cuisine}
        price={noodle.price}
        image_url={noodle.image_url}
        restaurant_name={noodle.restaurant_name}
        city_name={noodle.city_name}
        handleNewReviews={handleNewReviews}
        reviews={reviews}
        />
        <button onClick={toggleReviews}>Show Reviews</button>
        {toggle ? <p>Reviews are Hidden</p>: <p>{reviews}</p>}
        </>
    )
}

export default NoodleCard;
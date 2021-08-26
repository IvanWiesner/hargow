import {useEffect} from "react"
import Search from './Search'
import { BrowserRouter as Redirect } from "react-router-dom";
import StirCard from "./StirCard"

function StirPage ({stirFrys, setStirFrys, login, setLogin, search, setSearch, setReviews, reviews, handleNewReview}) {

    useEffect(() => {
        if (!login) {window.location.href = "http://localhost:4000/login";}
    },[]
    )

    // if (!login) {
    //     return <Redirect to = "/login"/>
    // }

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
        <>
        <Search 
        search={search}
        setSearch={setSearch}
        />
        <ul>
            {displayStirFrys}
        </ul>
        {/* <button onClick={toggleReviews}>Show Reviews</button>
        {toggle ? <p>Reviews are Hidden</p>: <p>{noodle.reviews}</p>} */}
        </>
    )
}

export default StirPage;
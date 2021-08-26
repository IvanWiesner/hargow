import {useEffect} from "react"
import Search from './Search'
import { BrowserRouter as Redirect } from "react-router-dom";
import DimCard from "./DimCard"

function DimPage ({dimsums, setDimsums, login, setLogin, search, setSearch, setReviews, reviews, handleNewReview}) {

    // if (!login) {
    //     return <Redirect to = "/login"/>
    // }

    useEffect(() => {
        if (!login) {window.location.href = "http://localhost:4000/login";}
    
    },[]
    )

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
        <>
        <Search 
        search={search}
        setSearch={setSearch}
        />
        <ul>
            {displayDimsums}
        </ul>
        {/* <button onClick={toggleReviews}>Show Reviews</button>
        {toggle ? <p>Reviews are Hidden</p>: <p>{noodle.reviews}</p>} */}
        </>
    )
}

export default DimPage;
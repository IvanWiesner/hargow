import {useEffect} from "react"
import Search from './Search'
import { BrowserRouter as Redirect, Switch } from "react-router-dom";
import NoodleCard from "./NoodleCard"

function NoodlePage ({noodles, setNoodles, login, setLogin, search, setSearch, setReviews, reviews, handleNewReview}) {
    // if (!login) {
    //     return <Redirect to = "/login"/>
    // }
    // console.log(reviews)
    // const [toggle, setToggle] = useState(true)

    // const toggleReviews = () => {
    // toggle ? setToggle(false): setToggle(true)
    // }

    useEffect(() => {
        if (!login) {window.location.href = "http://localhost:4000/login";}
    },[]
    )

    const filterNoodles = () => {
    return noodles.filter((noodle)=>
    noodle.name.toLowerCase().includes(search.toLowerCase()))
    }
    const displayNoodles = filterNoodles().map((noodle, index) => {
        return (
        <NoodleCard 
        noodle={noodle}
        key={index}
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
            {displayNoodles}
        </ul>
        {/* <button onClick={toggleReviews}>Show Reviews</button>
        {toggle ? <p>Reviews are Hidden</p>: <p>{noodle.reviews}</p>} */}
        </>
    )
}

export default NoodlePage;
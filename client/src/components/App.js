import { useEffect, useState, useHistory } from "react";
import "../App.css";
import NoodlePage from "./NoodlePage"
import DimPage from "./DimPage"
import StirPage from "./StirPage"
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import { 
    BrowserRouter as Router, 
    Route,
    Link,
    Switch
    } from "react-router-dom";

function App() {
    const [login, setLogin] = useState(false);
    const [dishes, setDishes] = useState([])
    const [stirFrys, setStirFrys] = useState([])
    const [dimsums, setDimsums] = useState([])
    const [noodles, setNoodles] = useState([])
    const [search, setSearch] = useState("")
    const [reviews, setReviews] = useState([])

    // const history = useHistory();
    // console.log(login)
    // if(!login)history.push("/signup")

    function handleNewReviews(newReview) {
        setReviews([...reviews, newReview])
    }

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
          .then((resp) => resp.json())
          .then((data) => setReviews(data));
      }, []);
    
    useEffect(() => {
        fetch("http://localhost:3000/dishes")
          .then((resp) => resp.json())
          .then((data) => {
              for (let dish of data) {
                //   console.log(dish.cuisine)
                if (dish.cuisine == "stir-fry") {
                    setStirFrys  ([...stirFrys, dish])
                } if (dish.cuisine == "dim-sum") {
                    setDimsums ([...dimsums, dish])
                }  if (dish.cuisine == "noodles") {
                    setNoodles ([...noodles, dish])
                }
              }
          });
      }, []);
      console.log(noodles)
      console.log(dimsums)
      console.log(stirFrys)
// console.log(dish)
      return (
            <Router>
                <div className="header">
                    <div className="navbar">
                <h1 className="header-title">Har Gow</h1>
                <nav className="navbar">
                    <Link to="/">Home</Link>|
                    <Link to="/noodlecard"> Noodles </Link>|
                    <Link to ="/stircard">Stir-Fry </Link>|
                    <Link to ="/dimcard">Dim Sum</Link>
                </nav>
                </div>

                <Switch>

                    <Route exact path="/">
                        <HomePage
                        />
                    </Route>
                    <Route exact path="/noodlecard">
                        <NoodlePage
                        noodles={noodles}
                        setNoodles={setNoodles}
                        login={login}
                        setLogin={setLogin}
                        setSearch={setSearch}
                        search={search}
                        setReviews={setReviews}
                        reviews={reviews}
                        handleNewReviews={handleNewReviews}
                        />
                    </Route>
                    <Route exact path="/stircard">
                        <StirPage
                        stirFrys={stirFrys}
                        setStirFrys={setStirFrys}
                        login={login}
                        setLogin={setLogin}
                        setSearch={setSearch}
                        setReviews={setReviews}
                        search={search}
                        reviews={reviews}
                        handleNewReviews={handleNewReviews}
                        />
                    </Route>
                    <Route exact path="/dimcard">
                        <DimPage
                        dimsums={dimsums}
                        setDimsums={setDimsums}
                        login={login}
                        setLogin={setLogin}
                        setSearch={setSearch}
                        search={search}
                        setReviews={setReviews}
                        reviews={reviews}
                        handleNewReviews={handleNewReviews}
                        />
                    </Route>
                </Switch>
                </div>
            </Router>
          
      )
}

export default App;
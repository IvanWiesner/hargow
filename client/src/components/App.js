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
    const [login, setLogin] = useState(true);
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

    // useEffect(() => {
    //     fetch("http://localhost:3000/reviews")
    //       .then((resp) => resp.json())
    //       .then((data) => setReviews(data));
    //   }, []);
    
    useEffect(() => {
        fetch("http://localhost:3000/dishes")
          .then((resp) => resp.json())
          .then((data) => { 
              for (let dish of data) {
                //   console.log(dish.cuisine)
                if (dish.cuisine == "stir-fry") {
                    setStirFrys  (stirFrys => ([...stirFrys, dish]))
                } if (dish.cuisine == "dim-sum") {
                    setDimsums (dimsums => ([...dimsums, dish]))
                }  if (dish.cuisine == "noodles") {
                    setNoodles (noodles => ([...noodles, dish]))
                }
              }
          });
      }, []);
    //   console.log(noodles)
    //   console.log(dimsums)
    //   console.log(stirFrys)
// console.log(dish)

      return (
            <Router>
                <div className="App">
                    <div className="navbar">
                <h1 className="header-title">Har Gow</h1>
                <nav className="navbar">
                    <Link to="/">Home</Link>|
                    <Link to="/noodlepage"> Noodles </Link>|
                    <Link to ="/stirpage">Stir-Fry </Link>|
                    <Link to ="/dimpage">Dim Sum</Link>
                </nav>
                </div>

                <Switch>

                    <Route exact path="/"
                        component ={() => <HomePage login={true}
                        />} />
                    <Route path="/noodlepage"
                    component={() => <NoodlePage login={true} 
                        noodles={noodles}
                        setNoodles={setNoodles}
                        login={login}
                        setLogin={setLogin}
                        setSearch={setSearch}
                        search={search}
                        setReviews={setReviews}
                        reviews={reviews}
                        handleNewReviews={handleNewReviews} 
                        />} />
                    <Route path="/stirpage"
                    component={() => <StirPage login={true} 
                        stirFrys={stirFrys}
                        setStirFrys={setStirFrys}
                        login={login}
                        setLogin={setLogin}
                        setSearch={setSearch}
                        setReviews={setReviews}
                        search={search}
                        reviews={reviews}
                        handleNewReviews={handleNewReviews}
                        />} />
                    <Route path="/dimpage"
                        component={() => <DimPage login={true} 
                        dimsums={dimsums}
                        setDimsums={setDimsums}
                        login={login}
                        setLogin={setLogin}
                        setSearch={setSearch}
                        search={search}
                        setReviews={setReviews}
                        reviews={reviews}
                        handleNewReviews={handleNewReviews}
                        />} />
                </Switch>
                </div>
            </Router>
          
      )
}

export default App;
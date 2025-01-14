import Nav from './components/nav'
import Card from './components/card';
import CountContext from './contexts/CountCountext';
import { useState } from "react";
import axios from "axios";

function App() {

  const apiUrl = "https://api.themoviedb.org/3"
  const apiKey = "8383ed0fdbc3470de221303e23cd477a"

  const [searchValue, setSearchValue] = useState("");
  const [movie, setMuovie] = useState([]);

  
  const getMovies = (event) => {
    event.preventDefault(); 
    console.log("Cercando film per:", searchValue);
    axios.get(`${apiUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: searchValue,
      },
    })
      .then((resp) => {
        console.log(resp.data.results);
        setMuovie(resp.data.results);
      });
  };


  return (
    <>
    <CountContext.Provider value={{getMovies, searchValue, setSearchValue, movie}}>
      <h1>ciao</h1>
      <Nav />
      <Card />
      </CountContext.Provider>
    </>
  )
}

export default App
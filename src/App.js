import { useEffect, useState } from "react";
import './App.css';
import Spinner from "./components/Spinner";
import MovieList from './components/MovieList.js';
import SearchBar from './components/SearchBar';
import { getMoviesBySearchTerm } from "./utils";
import Paginator from './components/Paginator'

function App () {

  const [searchTerm, setSearchTerm] = useState("bat");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [resultPage, setResultPage] = useState(1);
  const [totalResults, setTotalResults] = useState("-")

  // const useNewSearchTerm = (newTerm) => {
  //   let newTerms = [...searchTerm, newTerm];
  //   setSearchTerm(newTerms)
  // }

  useEffect(() => {
    setIsLoading(true);

    // console.log(searchTerm);

    getMoviesBySearchTerm(searchTerm, { page: resultPage })

      .then((result) => {
        console.log(result);
        setMovies(result.Search);
        setTotalResults(result.totalResults);
        setResultPage()
        setError(null);
      })

      .catch((err) => {
        setError(err);
        setMovies([]);
        setTotalResults("-");
        console.error("Error:", err);
      })

      .finally(() => {
        setIsLoading(false);
      });
}, [searchTerm, resultPage]); //empty array means execute only when useEffect is called -- adding a dependency in the array (i.e. searchTerm), will have this re-run any time the dependancy value changes

if (isLoading) {
  return <Spinner />
}

if (error) {
  return (<div>Error</div>);
}

return (
  <div>
    <SearchBar handleTermUpdate={(term) => {
      setSearchTerm(term);
    }} />
    <MovieList movies={movies} />
    <Paginator currentPage="1" totalPages="1000" handlePageChange={(direction) => {
      setResultPage(resultPage + direction);
    }} />
  </div>
);

// const {title, type, poster, rated, runtime, genre, year, plot, actors, director, writer} = retrieveStorageData("movies");
//     const rating = getRatings("movie");
//     console.log(retrieveStorageData("movie"));

}
export default App;

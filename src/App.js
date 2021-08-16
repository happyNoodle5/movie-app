import './App.css';
// import React from 'react';
import { MovieCard } from './components/MovieCard'
import { MovieDetails } from './components/MovieDetails'
import { getMovieById, saveData, retrieveStorageData, lowerCase, getRatings, openMovieDetails } from './utils'
// import { getMovieBySearchTerm } from './utils';
// importing items that don't have `default` need to be imported with curly brackets

// in JSX, you ALWAYS need a parent, but using FRAGMENTS allows us to use <> as a parent when you don't necessarily need a parent for styles
// className takes a string
// style takes an object - start with a curly brace to declare that we will use an object and then use a second curly brace to for the object itself
function App() {
  window.onload = async () => {
    const movie = await getMovieById();
    const convertData = await lowerCase(movie);
    convertData && saveData(convertData);
  }

  // const detailsButton = openMovieDetails();

  const {title, type, poster} = retrieveStorageData("movie");
  const {rated, runtime, genre, plot, actors} = retrieveStorageData("movie");
  const rating = getRatings("movie");
  console.log(retrieveStorageData("movie"));

  const Welcome = ({greeting}) => (
    <header style={{padding: "1.5rem 0"}}>
      <h1 style={{textAlign: "center", textTransform: "uppercase"}}>{greeting}</h1>
    </header>
  );

  const Wrapper = ({children, bodyBgColor}) => (
    <div style={{margin: "0 auto", padding: "2rem", backgroundColor: bodyBgColor ? bodyBgColor:"#eee", maxWidth: "60rem", display: "flex", justifyContent: "center"}}>
        {children}
    </div>
)

return (
    <div style={{backgroundColor: "slategray", height: "100vh"}}>
      <Welcome greeting="Welcome to Shmoovie" />
      <Wrapper>
        <MovieCard title={title} type={type} posterUrl={poster} />
        <MovieDetails posterUrl={poster} detailsTitle={title} rating={rating} rated={rated} runtime={runtime} genre={genre} plot={plot} actors={actors} />
      </Wrapper>
    </div>
  );
}

export default App;

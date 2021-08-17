import './App.css';
import { MovieCard } from './components/MovieCard'
import { MovieDetails } from './components/MovieDetails'
import { MovieButton } from './components/MovieButton.js'
import { getMovieById, saveData, retrieveStorageData, lowerCase, getRatings, openMovieDetails } from './utils'

// in JSX, you ALWAYS need a parent, but using FRAGMENTS allows us to use <> as a parent when you don't necessarily need a parent for styles
// className takes a string
// style takes an object - start with a curly brace to declare that we will use an object and then use a second curly brace to for the object itself
function App() {
  window.onload = async () => {
    const movie = await getMovieById();
    const convertData = await lowerCase(movie);
    convertData && saveData(convertData);
  };

  // console.log(openMovieDetails);
  // console.log(MovieButton);

  const {title, type, poster, rated, runtime, genre, year, plot, actors, director, writer} = retrieveStorageData("movie");
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
      <Welcome greeting="look up guardians" />
      <Wrapper>
        <MovieCard title={title} posterUrl={poster}>
          <MovieButton type={type} />
        </MovieCard>
      </Wrapper>
      <MovieDetails posterUrl={poster} detailsTitle={title} rating={rating} rated={rated} runtime={runtime} genre={genre} year={year} plot={plot} actors={actors} director={director} writer={writer} />
    </div>
  );
}

export default App;

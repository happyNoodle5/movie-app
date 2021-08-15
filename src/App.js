import './App.css';
import React from 'react';
import { MovieCard } from './components/MovieCard'
import { getMovieById } from './utils';
// importing items that don't have `default` need to be imported with curly brackets

// in JSX, you ALWAYS need a parent, but using FRAGMENTS allows us to use <> as a parent when you don't necessarily need a parent for styles
// className takes a string
// style takes an obect - start with a curly brace to declare that we will use an object and then use a second curly brace to for the object itself
function App() {
  let movie = {}
  getMovieById()
    .then(res => res).then(res => Object.assign(movie, {}, {
      title: res.Title,
      type: res.Type,
      posterUrl: res.PosterUrl
    }))
  return (
    <>
      <MovieCard title={movie.title} type={movie.type} posterUrl={movie.posterUrl}>
        <p>I'M A CHILD</p>
      </MovieCard>
    </>
  );
}

export default App;

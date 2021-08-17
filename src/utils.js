// import { MovieCard } from './components/MovieCard.js';
// import { MovieDetails } from './components/MovieDetails.js'

const apiEndpoint = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

export const getMovieById = async (movieId ="tt3896198") => {
    const fetchMovie = await fetch(`${apiEndpoint}&i=${movieId}`);
    const movie = await fetchMovie.json();
    return movie;
    };

export const getMovieBySearchTerm = async (term) => {
    await fetch(`${apiEndpoint}&s=${term}`)
        .then((res) => res.json())
        .catch((err) => err);
    };

export const saveData = (newData) =>
    newData.length
        ? sessionStorage.setItem("movies", JSON.stringify(newData))
        : sessionStorage.setItem("movie", JSON.stringify(newData));

export const retrieveStorageData = (key) => {
    const getDataByKey = sessionStorage.getItem(key);
    return JSON.parse(getDataByKey);
};

export const getRatings = (obj) => {
    const { ratings } = JSON.parse(sessionStorage.getItem(obj));
    const ratingObject = ratings.find(obj => {
        return JSON.stringify(obj.Source === "Internet Movie Database")
      });
    const { Value } = ratingObject;
    return Value;
};

export const lowerCase = (data) => 
    data.length
    ? data.map((obj) =>
    Object.keys(obj).reduce((value, key) => {
        value[key.toLowerCase()] = obj.key;
        return value;
    })
    )
    : Object.keys(data).reduce((value, key) => {
        value[key.toLowerCase()] = data[key];
        return value;
        
    }, {});

// WHY IS IT RETURNING AS NULL?
// export const openMovieDetails = () => {
//     document.getElementById('movie_card_button');
// }

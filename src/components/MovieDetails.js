import "./MovieDetails.css";
import "./MovieCard.js"
import PropTypes from 'prop-types';

export const MovieDetails = ({posterUrl, detailsTitle, rated, runtime, genre, year, plot, actors, rating, director, writer, imdbID}) => {
    return(
        <div id={`${imdbID}`}className="movie_details_wrapper">
            <img className="details_poster_size" src={`${posterUrl}`} alt={`${detailsTitle} poster`} />
            <div className="movie_details_col">
                <div className="movie_details_title_row">
                    <h2 id="movie_details_title">{detailsTitle}</h2><p id="movie_details_rating">{rating}</p>
                </div>
                <div className="movie_details_pills">
                <p className="movie_details_pill" id="movie_details_rated">{rated}</p>
                    <p className="movie_details_pill" id="movie_details_runtime">{runtime}</p>
                    <p className="movie_details_pill" id="movie_details_genre">{genre}</p>
                    <p className="movie_details_pill" id="movie_details_year">{year}</p>
                </div>
                <div className="movie_details_plot">
                    <h3 className="movie_details_subheader">Plot</h3>
                    <p id="plot_text" className="movie_details_subcategory_info">{plot}</p>
                </div>
                <div className="movie_details_actors">
                    <h3 className="movie_details_subheader">Actors</h3>
                    <p id="actors_text" className="movie_details_subcategory_info">{actors}</p>
                </div>
                <div className="movie_details_director">
                    <h3 className="movie_details_subheader">Director</h3>
                    <p id="director_text" className="movie_details_subcategory_info">{director}</p>
                </div>
                <div className="movie_details_writer">
                    <h3 className="movie_details_subheader">Writer(s)</h3>
                    <p id="writer_text" className="movie_details_subcategory_info">{writer}</p>
                </div>
            </div>
        </div>
    );
};

MovieDetails.defaultProps = {
    posterUrl: '',
    detailsTitle: '',
    rated: '',
    runtime: '',
    genre: '',
    year: '',
    plot: '',
    actors: '',
    rating: '',
    director: '',
    writer: ''
};

MovieDetails.propTypes = {
    posterUrl: PropTypes.string,
    detailsTitle: PropTypes.string,
    rated: PropTypes.string,
    runtime: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string,
    plot: PropTypes.string,
    actors: PropTypes.string,
    rating: PropTypes.string,
    director: PropTypes.string,
    writer: PropTypes.string
};
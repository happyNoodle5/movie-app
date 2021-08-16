import "./MovieDetails.css";

export const MovieDetails = ({posterUrl, detailsTitle, rated, runtime, genre, plot, actors, rating}) => {
    return(
        <div className="movie_details_wrapper">
            <img className="details_poster_size" src={`${posterUrl}`} alt={`${detailsTitle} poster`} />
            <div className="movie_details_col">
                <div className="movie_details_title_row">
                    <h2 id="movie_details_title">{detailsTitle}</h2><p id="movie_details_rating">{rating}</p>
                </div>
                <div className="movie_details_pills">
                <p className="movie_details_pill" id="movie_details_rated">{rated}</p>
                    <p className="movie_details_pill" id="movie_details_runtime">{runtime}</p>
                    <p className="movie_details_pill" id="movie_details_genre">{genre}</p>
                </div>
                <div className="movie_details_plot">
                    <h3 className="movie_details_subheader">Plot</h3>
                    <p className="movie_details_subcategory_info">{plot}</p>
                </div>
                <div className="movie_details_actors">
                    <h3 className="movie_details_subheader">Actors</h3>
                    <p className="movie_details_subcategory_info">{actors}</p>
                </div>
            </div>
        </div>
    );
}
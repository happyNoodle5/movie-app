import "./MovieCard.css";

export const MovieCard = ({title, type, posterUrl}) => {
    return(
        <div className="movie_card_wrapper">
            <img className="poster_size" src={`${posterUrl}`} alt={`${title} poster`} />
            <div className="movie_card_info">
                <p id="movie_card_title">{title}</p>
                <button id="movie_card_button" className="movie_card_button">{type}</button>
            </div>
        </div>
    );
}
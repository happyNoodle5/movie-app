import "./MovieCard.css";


export const MovieButton = ({handleShow, type}) => {
    <button id="movie_card_button" onClick={handleShow} className="movie_card_button">{type}</button>
};
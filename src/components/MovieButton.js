import "./MovieCard.css";
import PropTypes from 'prop-types';

export const MovieButton = ({handleShow, type}) => {
    <button id="movie_card_button" onClick={handleShow} className="movie_card_button">{type}</button>
};

MovieButton.defaultProps = {
    type: "movie"
};

MovieButton.propTypes = {
    type: PropTypes.string
};
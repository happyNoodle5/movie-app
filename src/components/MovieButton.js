import "./MovieButton.css";
import PropTypes from 'prop-types';

export const MovieButton = ({type}) => {
    return(
        <button id="movie_card_button" className="movie_card_button">{type}</button>
    );
};

MovieButton.defaultProps = {
    type: "movie"
};

MovieButton.propTypes = {
    type: PropTypes.string
};
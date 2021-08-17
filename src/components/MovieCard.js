import "./MovieCard.css";
import PropTypes from 'prop-types';

export const MovieCard = ({title, posterUrl, children}) => {
    return(
        <div className="movie_card_wrapper">
            <img className="poster_size" src={`${posterUrl}`} alt={`${title} poster`} />
            <div className="movie_card_info">
                <p id="movie_card_title">{title}</p>
                {children}
            </div>
        </div>
    );
};

MovieCard.defaultProps = {
    title: 'Guardians of the Galaxy Vol. 2',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00…UtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
};

MovieCard.propTypes = {
    title: PropTypes.string,
    posterUrl: PropTypes.string
};
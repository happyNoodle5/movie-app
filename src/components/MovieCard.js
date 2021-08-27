import React, { useState }from 'react';
import "./MovieCard.css";
import Modal from 'react-modal';
import { MovieDetails } from './MovieDetails';
import { getMovieDetailsById } from "../utils"
// import PropTypes from 'prop-types';

function MovieCard({title, posterUrl, type, imdbID}) {
    const [show, setShow] = useState(false);

    const open = () => {
        getMovieDetailsById(imdbID);
        console.log(imdbID);
        setShow(true)
    };

    const close = () => {
        setShow(false);
    }

    return(
        <>
        <article className="movie_card_wrapper">
            <img className="poster_size" src={`${posterUrl}`} alt={`${title} poster`} />
            <footer className="movie_card_info">
                <p id="movie_card_title" title={title}>{title}</p>
                <button id="movie_card_button" className="movie_card_button" onClick={open}>{type}</button>
            </footer>
        </article>
        <Modal isOpen={show}>
            <button onClick={close}>x</button>
            <MovieDetails/>
        </Modal>
        </>
    );
};

export default MovieCard;
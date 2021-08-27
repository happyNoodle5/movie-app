import React from 'react'
import { useRef } from "react";
// import { setSearchTerm } from '../App';

function SearchBar({ handleTermUpdate }) {

    // useRef stores the value across re-renders
    const movieTitleTerm = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(movieTitleTerm.current.value);
        handleTermUpdate(movieTitleTerm.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search:</label>
            <input type="text" ref={movieTitleTerm} name="newSearchTerm" />
            <br/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SearchBar
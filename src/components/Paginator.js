import React from 'react'

function Paginator({ handlePageChange, currentPage, totalPages }) {

    function showPrevious () {
        handlePageChange(-1);
    };

    function showNext () {
        handlePageChange(1);
    };

    return (
        <div>
            <p>Page {currentPage} of {totalPages}</p>
            <button onClick={showPrevious}>&lt;</button>
            <button onClick={showNext}>&gt;</button>
        </div>
    )
}

export default Paginator;
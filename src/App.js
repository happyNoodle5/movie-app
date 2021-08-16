import './App.css';
import React, { useState } from 'react'
import { MovieCard } from './components/MovieCard'
import { MovieDetails } from './components/MovieDetails'
import { MovieButton } from './components/MovieButton'
import { getMovieById, saveData, retrieveStorageData, lowerCase, getRatings, openMovieDetails } from './utils'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
// importing items that don't have `default` need to be imported with curly brackets

// in JSX, you ALWAYS need a parent, but using FRAGMENTS allows us to use <> as a parent when you don't necessarily need a parent for styles
// className takes a string
// style takes an object - start with a curly brace to declare that we will use an object and then use a second curly brace to for the object itself
function App() {
  window.onload = async () => {
    const movie = await getMovieById();
    const convertData = await lowerCase(movie);
    convertData && saveData(convertData);
  };

  // const detailsButton = openMovieDetails();

  const {title, type, poster} = retrieveStorageData("movie");
  const {rated, runtime, genre, plot, actors} = retrieveStorageData("movie");
  const rating = getRatings("movie");
  console.log(retrieveStorageData("movie"));

  // modal stuff
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Welcome = ({greeting}) => (
    <header style={{padding: "1.5rem 0"}}>
      <h1 style={{textAlign: "center", textTransform: "uppercase"}}>{greeting}</h1>
    </header>
  );

  const Wrapper = ({children, bodyBgColor}) => (
    <div style={{margin: "0 auto", padding: "2rem", backgroundColor: bodyBgColor ? bodyBgColor:"#eee", maxWidth: "60rem", display: "flex", justifyContent: "center"}}>
        {children}
    </div>
)

return (
    <div style={{backgroundColor: "slategray", height: "100vh"}}>
      <Welcome greeting="Welcome to Shmoovie" />
      <Wrapper>
        <MovieCard title={title} type={type} posterUrl={poster}>
          <MovieButton onClick={handleShow} />
        </MovieCard>
      </Wrapper>
      {/* <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <ModalHeader closeButton>This is a Modal Heading</ModalHeader>
          <ModalBody> */}
            <MovieDetails posterUrl={poster} detailsTitle={title} rating={rating} rated={rated} runtime={runtime} genre={genre} plot={plot} actors={actors} />
          {/* </ModalBody>
          <ModalFooter>
            <Button onClick={()=>this.handleClose()}>Close</Button>
          </ModalFooter>  
        </Modal> */}
    </div>
  );
}

export default App;

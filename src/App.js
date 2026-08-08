import React from "react";
import {Navbar,Nav,Container,Button} from "react-bootstrap";
import './App.css';

function App(){
  const movies=[1,2,3,4,5,6,7,8,9,10]

  return(
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>

      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top" className="px-4">
        <Container fluid>
          <Navbar.Brand href="#Home" style={{color: '#E50914', fontWeight: 'bold', fontSize: '1.8rem', letterSpacing: '1px'}}>
            NETFLIX
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="baic-navbar-nav"/>
          <Navbar.Collapse id="baic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Tvshows">TV Shows</Nav.Link>
              <Nav.Link href="#Movies">Movies</Nav.Link>
              <Nav.Link href="#Latest">Latest</Nav.Link>
              <Nav.Link href="#Mylist">My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" style={{width:'32px',borderRadius:'4px'}}/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>

      <div className="d-flex flex-column justify-content-center px-5"
        style={{
          height: '80vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url("https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9-900x506.jpg")',
        }}
      >
        <h1 className="diplay-3 fw-bold mb-3">Stranger things</h1>
        <p className="lead w-50 mb-4">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="d-flex gap-3">
        <Button variant="light" className="px-4 py-2 fw-bold text-dark">▶ Play</Button>
        <Button variant="secondary" className="px-4 py-2 fw-bold text-white" style={{ backgroundColor: 'rgba(109, 109, 110, 0.7)'}}>ⓘ More Info</Button>
        </div>
        </div>


        <Container fluid className="px-4 mt-4 pb-5">
          <h4 className="mb-3">Trending Now</h4>
          <div className="d-flex overflow-auto movie-row gap-2 mb-5" style={{scrollbarWidth:'none'}}>
            {movies.map((movie)=>
            (
              <img
              key={movie}
              src={`https://picsum.photos/seed/${movie}/200/300`}
              alt="Movie Poster"
              style={{ width: '150px', height: '225px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer' }}
              className="movie-poster"
            />
            ))}
        </div>

        <h4 className="mb-3">Netflix Originals</h4>
        <div className="d-flex overflow-auto movie-row gap-2" style={{ scrollbarWidth: 'none' }}>
          {movies.map((movie) => (
            <img
              key={`orig-${movie}`}
              src={`https://picsum.photos/seed/${movie + 10}/250/350`}
              alt="Movie Poster"
              style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer' }}
              className="movie-poster"
            />
          ))}
        </div>
        </Container>
        </div>
  )
};
export default App;
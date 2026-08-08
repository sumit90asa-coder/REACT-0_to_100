import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css'; 

function App() {
  // Dummy data for our movie rows
  const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      
      {/* 1. NETFLIX NAVBAR */}
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top" className="px-4">
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: '#E50914', fontWeight: 'bold', fontSize: '1.8rem', letterSpacing: '1px' }}>
            NETFLIX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tvshows">TV Shows</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#latest">Latest</Nav.Link>
              <Nav.Link href="#mylist">My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                  alt="Profile" 
                  style={{ width: '32px', borderRadius: '4px' }} 
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 2. HERO BANNER (Featured Movie) */}
      <div 
        className="d-flex flex-column justify-content-center px-5"
        style={{
          height: '80vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <h1 className="display-3 fw-bold mb-3">Stranger Things</h1>
        <p className="lead w-50 mb-4">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="d-flex gap-3">
          <Button variant="light" className="px-4 py-2 fw-bold text-dark">
             ▶ Play
          </Button>
          <Button variant="secondary" className="px-4 py-2 fw-bold text-white" style={{ backgroundColor: 'rgba(109, 109, 110, 0.7)'}}>
            ⓘ More Info
          </Button>
        </div>
      </div>

      {/* 3. MOVIE ROWS */}
      <Container fluid className="px-4 mt-4 pb-5">
        
        {/* Row 1: Trending Now */}
        <h4 className="mb-3">Trending Now</h4>
        <div className="d-flex overflow-auto movie-row gap-2 mb-5" style={{ scrollbarWidth: 'none' }}>
          {movies.map((movie) => (
            <img
              key={movie}
              src={`https://picsum.photos/seed/${movie}/200/300`}
              alt="Movie Poster"
              style={{ width: '150px', height: '225px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer' }}
              className="movie-poster"
            />
          ))}
        </div>

        {/* Row 2: Netflix Originals */}
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
  );
}

export default App;
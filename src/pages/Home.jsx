import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {/* Hero Banner */}
      <div 
        className="d-flex flex-column justify-content-center px-5"
        style={{
          height: '80vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url("https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9-900x506.jpg")',
        }}
      >
        <h1 className="display-3 fw-bold mb-3">Stranger Things</h1>
        <p className="lead w-50 mb-4">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="d-flex gap-3">
          <Button variant="light" className="px-4 py-2 fw-bold text-dark">▶ Play</Button>
          <Button variant="secondary" className="px-4 py-2 fw-bold text-white" style={{ backgroundColor: 'rgba(109, 109, 110, 0.7)' }}>ⓘ More Info</Button>
        </div>
      </div>

      {/* Movie Rows */}
      <Container fluid className="px-4 mt-4 pb-5">
        <h4 className="mb-3">Trending Now</h4>
        <div className="d-flex overflow-auto movie-row gap-2 mb-5" style={{ scrollbarWidth: 'none' }}>
          {movies.map((movie) => (
            <img key={movie} src={`https://picsum.photos/seed/${movie}/200/300`} alt="Poster" style={{ width: '150px', height: '225px', objectFit: 'cover', borderRadius: '4px' }} className="movie-poster" />
          ))}
        </div>

        <h4 className="mb-3">Netflix Originals</h4>
        <div className="d-flex overflow-auto movie-row gap-2" style={{ scrollbarWidth: 'none' }}>
          {movies.map((movie) => (
            <img key={`orig-${movie}`} src={`https://picsum.photos/seed/${movie + 10}/250/350`} alt="Poster" style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '4px' }} className="movie-poster" />
          ))}
        </div>
      </Container>
    </>
  );
}
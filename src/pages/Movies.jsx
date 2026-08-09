import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Movies() {
  const movies = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

  return (
    <>
      <div 
        className="d-flex flex-column justify-content-center px-5"
        style={{
          height: '70vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.2)), url("https://picsum.photos/id/1018/1200/600")',
        }}
      >
        <h1 className="display-3 fw-bold mb-3">Blockbuster Movies</h1>
        <p className="lead w-50 mb-4">
          Action, sci-fi, romance, and thrillers. Discover your next favorite film.
        </p>
        <div className="d-flex gap-3">
          <Button variant="light" className="px-4 py-2 fw-bold text-dark">▶ Play Movie</Button>
        </div>
      </div>

      <Container fluid className="px-4 mt-4 pb-5">
        <h4 className="mb-3">Top Action Movies</h4>
        <div className="d-flex overflow-auto movie-row gap-2 mb-5" style={{ scrollbarWidth: 'none' }}>
          {movies.map((m) => (
            <img key={m} src={`https://picsum.photos/seed/${m}/200/300`} alt="Movie Poster" style={{ width: '150px', height: '225px', objectFit: 'cover', borderRadius: '4px' }} className="movie-poster" />
          ))}
        </div>
      </Container>
    </>
  );
}
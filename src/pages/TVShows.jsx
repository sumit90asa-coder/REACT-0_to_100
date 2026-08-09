import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function TVShows() {
  const tvShows = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  return (
    <>
      <div 
        className="d-flex flex-column justify-content-center px-5"
        style={{
          height: '70vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.2)), url("https://picsum.photos/id/1015/1200/600")',
        }}
      >
        <h1 className="display-3 fw-bold mb-3">TV Shows</h1>
        <p className="lead w-50 mb-4">
          Explore binge-worthy drama series, hilarious comedies, and captivating documentaries.
        </p>
        <div className="d-flex gap-3">
          <Button variant="light" className="px-4 py-2 fw-bold text-dark">▶ Watch S1 E1</Button>
        </div>
      </div>

      <Container fluid className="px-4 mt-4 pb-5">
        <h4 className="mb-3">Popular TV Dramas</h4>
        <div className="d-flex overflow-auto movie-row gap-2 mb-5" style={{ scrollbarWidth: 'none' }}>
          {tvShows.map((show) => (
            <img key={show} src={`https://picsum.photos/seed/${show}/200/300`} alt="TV Show Poster" style={{ width: '150px', height: '225px', objectFit: 'cover', borderRadius: '4px' }} className="movie-poster" />
          ))}
        </div>
      </Container>
    </>
  );
}
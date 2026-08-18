import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import MovieModal from '../components/MovieModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Generate some mock data objects instead of just strings
  const trending = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Trending Movie ${i + 1}`,
    image: `https://picsum.photos/seed/${i + 1}/200/300`
  }));

  const originals = Array.from({ length: 12 }, (_, i) => ({
    id: i + 20,
    title: `Netflix Original ${i + 1}`,
    image: `https://picsum.photos/seed/${i + 20}/250/350`
  }));

  // Function to handle poster clicks
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      <HeroBanner 
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        bgImage="https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9-900x506.jpg"
      />
      
      <Container fluid className="px-4 mt-4 pb-5 text-white" style={{ marginTop: '-100px', position: 'relative', zIndex: 5 }}>
        
        {/* We pass handleMovieClick to the rows */}
        <h4 className="mb-3">Trending Now</h4>
        <div className="d-flex overflow-auto movie-row gap-2 pb-3 mb-4">
          {trending.map((movie) => (
            <img key={movie.id} src={movie.image} alt={movie.title} onClick={() => handleMovieClick(movie)} className="movie-poster" style={{ width: '150px', height: '225px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer', flexShrink: 0 }} />
          ))}
        </div>

        <h4 className="mb-3">Netflix Originals</h4>
        <div className="d-flex overflow-auto movie-row gap-2 pb-3">
          {originals.map((movie) => (
            <img key={movie.id} src={movie.image} alt={movie.title} onClick={() => handleMovieClick(movie)} className="movie-poster" style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer', flexShrink: 0 }} />
          ))}
        </div>

      </Container>

      {/* The Modal */}
      <MovieModal show={showModal} handleClose={() => setShowModal(false)} movieData={selectedMovie} />
    </>
  );
}
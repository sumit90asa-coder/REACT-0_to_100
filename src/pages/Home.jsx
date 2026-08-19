import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeroBanner from '../components/HeroBanner';
import MovieModal from '../components/MovieModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // UPDATED: Using placehold.co instead of picsum.photos
  const trending = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Trending Movie ${i + 1}`,
    // Creates a dark grey placeholder with text
    image: `https://placehold.co/200x300/222222/FFFFFF/png?text=Trending+${i + 1}`
  }));

  const originals = Array.from({ length: 12 }, (_, i) => ({
    id: i + 20,
    title: `Netflix Original ${i + 1}`,
    // Creates a dark red placeholder with text
    image: `https://placehold.co/250x350/E50914/FFFFFF/png?text=Original+${i + 1}`
  }));

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      <HeroBanner 
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        // UPDATED: Using a highly reliable Unsplash URL for the background
        bgImage="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
      />
      
      <Container fluid className="px-4 mt-4 pb-5 text-white" style={{ marginTop: '-100px', position: 'relative', zIndex: 5 }}>
        
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

      <MovieModal show={showModal} handleClose={() => setShowModal(false)} movieData={selectedMovie} />
    </>
  );
}
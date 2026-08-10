import React from 'react';
import { Container } from 'react-bootstrap';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';

export default function Movies() {
  const action = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 50}/200/300`);
  const scifi = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 60}/200/300`);

  return (
    <>
      <HeroBanner 
        title="Inception"
        description="A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
        bgImage="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2000&auto=format&fit=crop"
      />
      <Container fluid className="px-4 mt-4 pb-5">
        <MovieRow title="Action & Adventure" movies={action} />
        <MovieRow title="Sci-Fi Masterpieces" movies={scifi} />
      </Container>
    </>
  );
}
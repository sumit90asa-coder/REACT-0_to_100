import React from 'react';
import { Container } from 'react-bootstrap';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';

export default function TVShows() {
  const dramas = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 30}/200/300`);
  const comedies = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 40}/200/300`);

  return (
    <>
      <HeroBanner 
        title="Breaking Bad"
        description="A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."
        bgImage="https://images.unsplash.com/photo-1573053986275-840ffc7cc685?q=80&w=2000&auto=format&fit=crop"
      />
      <Container fluid className="px-4 mt-4 pb-5">
        <MovieRow title="Gritty Dramas" movies={dramas} />
        <MovieRow title="Sitcoms" movies={comedies} />
      </Container>
    </>
  );
}
import React from 'react';
import { Container } from 'react-bootstrap';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';

export default function Home() {
  const trending = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 1}/200/300`);
  const originals = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 20}/250/350`);

  return (
    <>
      <HeroBanner 
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        bgImage="https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9-900x506.jpg"
      />
      <Container fluid className="px-4 mt-4 pb-5">
        <MovieRow title="Trending Now" movies={trending} />
        <MovieRow title="Netflix Originals" movies={originals} isLarge={true} />
      </Container>
    </>
  );
}
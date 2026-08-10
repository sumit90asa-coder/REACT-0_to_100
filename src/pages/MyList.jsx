import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function MyList() {
  const savedItems = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/${i + 80}/200/300`);

  return (
    <Container fluid className="px-4 pt-5 mt-5 pb-5 text-white">
      <h2 className="mb-4">My Saved Titles</h2>
      <Row className="g-4">
        {savedItems.map((imgSrc, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <img 
              src={imgSrc} 
              alt="Saved Poster" 
              className="w-100 rounded movie-poster" 
              style={{ objectFit: 'cover', height: '250px', cursor: 'pointer' }} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
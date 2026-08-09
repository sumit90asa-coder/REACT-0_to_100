import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function MyList() {
  const savedItems = [101, 102, 103, 104, 105];

  return (
    <Container fluid className="px-4 pt-5 mt-5 pb-5">
      <h2 className="mb-4">My Saved Titles</h2>
      <Row className="g-3">
        {savedItems.map((id) => (
          <Col key={id} xs={6} sm={4} md={3} lg={2}>
            <img 
              src={`https://picsum.photos/seed/${id}/200/300`} 
              alt="Saved Poster" 
              className="w-100 rounded movie-poster" 
              style={{ objectFit: 'cover', height: '250px' }} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
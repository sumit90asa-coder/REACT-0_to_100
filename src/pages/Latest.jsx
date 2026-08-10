import React from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';

export default function Latest() {
  const newReleases = [
    { id: 70, title: 'The Last Horizon', date: 'New Today' },
    { id: 71, title: 'Cyber Pulse', date: 'Coming This Friday' },
    { id: 72, title: 'Shadow Realm', date: 'New Season' },
    { id: 73, title: 'Echoes of Time', date: 'Coming Next Week' },
  ];

  return (
    <Container fluid className="px-4 pt-5 mt-5 pb-5 text-white">
      <h2 className="mb-4">New & Popular</h2>
      <Row className="g-4">
        {newReleases.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={3}>
            <Card className="bg-dark text-white border-secondary h-100">
              <Card.Img variant="top" src={`https://picsum.photos/seed/${item.id}/300/200`} />
              <Card.Body>
                <Badge bg="danger" className="mb-2">{item.date}</Badge>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-secondary small">
                  Fresh arrival now available to stream in Ultra HD.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
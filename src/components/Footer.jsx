import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container className="text-secondary pt-5 pb-4 mt-5 border-top border-dark" style={{ fontSize: '0.85rem', maxWidth: '900px' }}>
      <Row className="gy-3 mb-4">
        <Col xs={6} md={3}><p className="mb-2 hover-white" style={{cursor: 'pointer'}}>Audio Description</p></Col>
        <Col xs={6} md={3}><p className="mb-2 hover-white" style={{cursor: 'pointer'}}>Help Center</p></Col>
        <Col xs={6} md={3}><p className="mb-2 hover-white" style={{cursor: 'pointer'}}>Gift Cards</p></Col>
        <Col xs={6} md={3}><p className="mb-2 hover-white" style={{cursor: 'pointer'}}>Media Center</p></Col>
        <Col xs={6} md={3}><p className="mb-2 hover-white" style={{cursor: 'pointer'}}>Investor Relations</p></Col>
        <Col xs={6} md={3}><p className="mb-2 hover-white" style={{cursor: 'pointer'}}>Jobs</p></Col>
        <Col xs={6} md={3}><p className="mb-2 hover-white" style={{cursor: 'pointer'}}>Terms of Use</p></Col>
        <Col xs={6} md={3}><p className="mb-2 hover-white" style={{cursor: 'pointer'}}>Privacy</p></Col>
      </Row>
      <p>© 2024 Netflix Clone Inc.</p>
    </Container>
  );
}
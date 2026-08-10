import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Profile() {
  return (
    <Container className="pt-5 mt-5 text-white" style={{ maxWidth: '800px' }}>
      <h1 className="display-4 fw-bold mb-4 border-bottom border-secondary pb-3">Edit Profile</h1>
      
      <Row className="mb-5">
        {/* Profile Avatar */}
        <Col xs={12} md={3} className="mb-4 text-center text-md-start">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="Profile Avatar" 
            className="img-fluid rounded"
            style={{ maxWidth: '150px' }}
          />
        </Col>

        {/* Profile Settings Form */}
        <Col xs={12} md={9}>
          <Form>
            <Form.Group className="mb-4">
              <Form.Control 
                type="text" 
                value="Guest User" 
                readOnly 
                className="bg-secondary text-white border-0 fs-5 p-2" 
              />
            </Form.Group>

            <h5 className="text-secondary mb-3">Language</h5>
            <Form.Select className="bg-dark text-white border-secondary mb-4 w-50">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
              <option>French</option>
            </Form.Select>

            <hr className="border-secondary mb-4" />

            <h5 className="text-secondary mb-3">Maturity Settings</h5>
            <div className="bg-dark p-3 border border-secondary mb-3">
              <span className="bg-secondary text-white fw-bold px-2 py-1 rounded">ALL MATURITY RATINGS</span>
            </div>
            <p className="small">Show titles of all maturity ratings for this profile.</p>
            <Button variant="outline-light" className="mb-4">Edit</Button>

            <hr className="border-secondary mb-4" />

            <h5 className="text-secondary mb-3">Autoplay Controls</h5>
            <Form.Check 
              type="checkbox" 
              label="Autoplay next episode in a series on all devices." 
              defaultChecked 
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              label="Autoplay previews while browsing on all devices." 
              defaultChecked 
              className="mb-4"
            />

          </Form>
        </Col>
      </Row>

      {/* Action Buttons */}
      <div className="d-flex gap-3 border-top border-secondary pt-4 pb-5">
        <Button variant="light" className="px-4 py-2 fw-bold text-dark rounded-0">
          Save
        </Button>
        <Button variant="outline-secondary" className="px-4 py-2 text-white rounded-0">
          Cancel
        </Button>
        <Button variant="outline-secondary" className="px-4 py-2 text-white rounded-0 ms-auto">
          Sign Out
        </Button>
      </div>
    </Container>
  );
}
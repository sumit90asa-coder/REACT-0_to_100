import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const navigate = useNavigate();
  const { user, updateProfile, logout } = useAuth(); // Pull data from global context

  // Initialize state with global user data
  const [profileName, setProfileName] = useState('');
  const [language, setLanguage] = useState('');
  const [autoplayNext, setAutoplayNext] = useState(true);
  const [autoplayPreviews, setAutoplayPreviews] = useState(true);

  // When the component loads, populate the form with the user's actual data
  useEffect(() => {
    if (user) {
      setProfileName(user.name || '');
      setLanguage(user.language || 'English');
      setAutoplayNext(user.autoplayNext !== undefined ? user.autoplayNext : true);
      setAutoplayPreviews(user.autoplayPreviews !== undefined ? user.autoplayPreviews : true);
    }
  }, [user]);

  const handleSave = (e) => {
    e.preventDefault();
    // Update global state and localStorage
    updateProfile({
      name: profileName,
      language: language,
      autoplayNext,
      autoplayPreviews
    });
    alert(`Profile updated successfully!`);
    navigate('/'); 
  };

  const handleSignOut = () => {
    logout(); // Clears global state and local storage
    navigate('/login'); 
  };

  return (
    <Container className="pt-5 mt-5 text-white" style={{ maxWidth: '800px' }}>
      <h1 className="display-4 fw-bold mb-4 border-bottom border-secondary pb-3">Edit Profile</h1>
      
      <Form onSubmit={handleSave}>
        <Row className="mb-5">
          <Col xs={12} md={3} className="mb-4 text-center text-md-start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" className="img-fluid rounded" style={{ maxWidth: '150px' }} />
          </Col>

          <Col xs={12} md={9}>
            <Form.Group className="mb-4">
              <Form.Control type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} className="bg-secondary text-white border-0 fs-5 p-2" placeholder="Name" />
            </Form.Group>

            <h5 className="text-secondary mb-3">Language</h5>
            <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-dark text-white border-secondary mb-4 w-50">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </Form.Select>

            <hr className="border-secondary mb-4" />

            <h5 className="text-secondary mb-3">Maturity Settings</h5>
            <div className="bg-dark p-3 border border-secondary mb-3"><span className="bg-secondary text-white fw-bold px-2 py-1 rounded">ALL MATURITY RATINGS</span></div>
            <Button variant="outline-light" className="mb-4">Edit</Button>

            <hr className="border-secondary mb-4" />

            <h5 className="text-secondary mb-3">Autoplay Controls</h5>
            <Form.Check type="checkbox" label="Autoplay next episode" checked={autoplayNext} onChange={(e) => setAutoplayNext(e.target.checked)} className="mb-2" />
            <Form.Check type="checkbox" label="Autoplay previews" checked={autoplayPreviews} onChange={(e) => setAutoplayPreviews(e.target.checked)} className="mb-4" />
          </Col>
        </Row>

        <div className="d-flex gap-3 border-top border-secondary pt-4 pb-5">
          <Button type="submit" variant="light" className="px-4 py-2 fw-bold text-dark rounded-0">Save</Button>
          <Button type="button" onClick={() => navigate('/')} variant="outline-secondary" className="px-4 py-2 text-white rounded-0">Cancel</Button>
          <Button type="button" onClick={handleSignOut} variant="outline-secondary" className="px-4 py-2 text-white rounded-0 ms-auto">Sign Out</Button>
        </div>
      </Form>
    </Container>
  );
}
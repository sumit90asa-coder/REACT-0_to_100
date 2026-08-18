import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  // 1. Set up React State for all form fields
  const [profileName, setProfileName] = useState("Guest User");
  const [language, setLanguage] = useState("English");
  const [autoplayNext, setAutoplayNext] = useState(true);
  const [autoplayPreviews, setAutoplayPreviews] = useState(true);

  // 2. Handle Form Submission (Save)
  const handleSave = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // In a real app, you would send this data to a database here.
    console.log("Saved Profile Data:", {
      profileName,
      language,
      autoplayNext,
      autoplayPreviews
    });

    alert(`Profile updated successfully for ${profileName}!`);
    navigate('/'); // Redirect back to Home page
  };

  // 3. Handle Cancel
  const handleCancel = () => {
    navigate('/'); // Redirect back to Home page without saving
  };

  // 4. Handle Sign Out
  const handleSignOut = () => {
    alert("You have been signed out.");
    navigate('/'); // Redirect to Home (or a login page if you had one)
  };

  return (
    <Container className="pt-5 mt-5 text-white" style={{ maxWidth: '800px' }}>
      <h1 className="display-4 fw-bold mb-4 border-bottom border-secondary pb-3">Edit Profile</h1>
      
      {/* Wrap everything in a Form component with an onSubmit handler */}
      <Form onSubmit={handleSave}>
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

          {/* Profile Settings Form Fields */}
          <Col xs={12} md={9}>
            
            {/* NAME INPUT (Now editable!) */}
            <Form.Group className="mb-4">
              <Form.Control 
                type="text" 
                value={profileName} 
                onChange={(e) => setProfileName(e.target.value)}
                className="bg-secondary text-white border-0 fs-5 p-2" 
                placeholder="Name"
              />
            </Form.Group>

            <h5 className="text-secondary mb-3">Language</h5>
            {/* LANGUAGE DROPDOWN */}
            <Form.Select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-dark text-white border-secondary mb-4 w-50"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </Form.Select>

            <hr className="border-secondary mb-4" />

            <h5 className="text-secondary mb-3">Maturity Settings</h5>
            <div className="bg-dark p-3 border border-secondary mb-3">
              <span className="bg-secondary text-white fw-bold px-2 py-1 rounded">ALL MATURITY RATINGS</span>
            </div>
            <p className="small">Show titles of all maturity ratings for this profile.</p>
            <Button 
              variant="outline-light" 
              className="mb-4"
              onClick={() => alert("Maturity settings modal would open here!")}
            >
              Edit
            </Button>

            <hr className="border-secondary mb-4" />

            <h5 className="text-secondary mb-3">Autoplay Controls</h5>
            {/* CHECKBOXES */}
            <Form.Check 
              type="checkbox" 
              label="Autoplay next episode in a series on all devices." 
              checked={autoplayNext}
              onChange={(e) => setAutoplayNext(e.target.checked)}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              label="Autoplay previews while browsing on all devices." 
              checked={autoplayPreviews}
              onChange={(e) => setAutoplayPreviews(e.target.checked)}
              className="mb-4"
            />

          </Col>
        </Row>

        {/* Action Buttons */}
        <div className="d-flex gap-3 border-top border-secondary pt-4 pb-5">
          {/* Note: The Save button type is set to "submit" to trigger the form */}
          <Button type="submit" variant="light" className="px-4 py-2 fw-bold text-dark rounded-0">
            Save
          </Button>
          <Button type="button" onClick={handleCancel} variant="outline-secondary" className="px-4 py-2 text-white rounded-0">
            Cancel
          </Button>
          <Button type="button" onClick={handleSignOut} variant="outline-secondary" className="px-4 py-2 text-white rounded-0 ms-auto">
            Sign Out
          </Button>
        </div>
      </Form>
    </Container>
  );
}
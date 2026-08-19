import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password); // Logs the user in globally
      navigate('/'); // Redirect to Home
    } else {
      alert("Please enter an email and password.");
    }
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center" 
      style={{ height: '100vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9-900x506.jpg")', backgroundSize: 'cover' }}
    >
      <Card className="bg-dark text-white p-5" style={{ width: '400px', backgroundColor: 'rgba(0,0,0,0.75) !important' }}>
        <h2 className="fw-bold mb-4">Sign In</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="Email or phone number" 
              className="bg-secondary text-white border-0 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              className="bg-secondary text-white border-0 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="danger" type="submit" className="w-100 py-3 fw-bold">
            Sign In
          </Button>
        </Form>
        <p className="text-secondary mt-4 mb-0">New to Netflix? <span className="text-white fw-bold">Sign up now.</span></p>
      </Card>
    </div>
  );
}
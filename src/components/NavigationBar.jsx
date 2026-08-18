import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      variant="dark" 
      expand="lg" 
      fixed="top" 
      className={`px-4 ${isScrolled ? 'nav-black' : 'nav-transparent'}`}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ color: '#E50914', fontWeight: 'bold', fontSize: '1.8rem', letterSpacing: '1px' }}>
          NETFLIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tv-shows">TV Shows</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/latest">Latest</Nav.Link>
            <Nav.Link as={Link} to="/my-list">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/profile">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" style={{ width: '32px', borderRadius: '4px' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Latest from "./pages/Latest";
import MyList from "./pages/MyList";
import './App.css';

function App(){
  return(
  <Router>
    <div className="bg-dark text white" style={{minHeight:'100vh'}}>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top" className="px-4">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" style={{ color: '#E50914', fontWeight: 'bold', fontSize: '1.8rem', letterSpacing: '1px' }}>
          NETFLIX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/tv-shows">Tv Shows</Nav.Link>
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
              <Nav.Link as={Link} to="/latest">Latest</Nav.Link>
              <Nav.Link as={Link} to="/my-list">My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" style={{ width: '32px', borderRadius: '4px' }}/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tv-shows" element={<TVShows/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/latest" element={<Latest/>}/>
        <Route path="/my-list" element={<MyList/>}/>
      </Routes>
      </div>
      </Router>
  )
};
export default App;
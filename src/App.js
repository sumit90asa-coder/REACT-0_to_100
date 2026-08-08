import React from "react";
import {Navbar,Nav,Container,Button} from "react-bootstrap";
import './App.css';

function App(){
  const movies=[1,2,3,4,5,6,7,8,9,10]

  return(
    <div className="Bg-dark text-white" style={{ minHeight: '100vh' }}>

      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top" className="px-4">
        <Container fluid>
          <Navbar.Brand href="#Home" style={{color: '#E50914', fontWeight: 'bold', fontSize: '1.8rem', letterSpacing: '1px'}}>
            NETFLIX
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="baic-navbar-nav"/>
          <Navbar.Collapse id="baic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Tvshows">TV Shows</Nav.Link>
              <Nav.Link href="#Movies">Movies</Nav.Link>
              <Nav.Link href="#Latest">Latest</Nav.Link>
              <Nav.Link href="#Mylist">My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" style={{width:'32px',borderRadius:'4px'}}/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>

      <div className="d-flex flex-column justify-content-center px-5"
        style={{
          height: '80vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <h1 className="diplay3 fw-bold mb-3">Stranger things</h1>
        <p className="lead w-50 mb-4">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>

      </div>





    </div>
  )
}
export default App;
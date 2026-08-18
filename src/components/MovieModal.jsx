import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';

export default function MovieModal({ show, handleClose, movieData }) {
  if (!movieData) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered data-bs-theme="dark" className="text-white">
      <div style={{ position: 'relative' }}>
        <img 
          src={movieData.image || "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"} 
          alt="Movie Backdrop" 
          className="w-100"
          style={{ height: '350px', objectFit: 'cover', borderTopLeftRadius: 'var(--bs-modal-border-radius)', borderTopRightRadius: 'var(--bs-modal-border-radius)' }}
        />
        <div style={{ position: 'absolute', bottom: '20px', left: '30px' }}>
          <h1 className="fw-bold display-5" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {movieData.title || "Featured Title"}
          </h1>
          <Button variant="light" className="px-4 fw-bold me-2">▶ Play</Button>
          <Button variant="outline-light" onClick={handleClose}>➕ My List</Button>
        </div>
      </div>
      
      <Modal.Body className="bg-dark p-4">
        <div className="d-flex gap-3 mb-3 align-items-center">
          <span className="text-success fw-bold">98% Match</span>
          <span>2024</span>
          <Badge bg="secondary">HD</Badge>
        </div>
        <p className="lead fs-6">
          {movieData.desc || "An incredible journey awaits in this critically acclaimed masterpiece. Dive into a world of mystery, action, and unyielding drama."}
        </p>
        <hr className="border-secondary" />
        <p className="small text-secondary mb-0">Cast: Famous Actor 1, Famous Actor 2, Famous Actor 3</p>
        <p className="small text-secondary">Genres: Exciting, Thriller, Drama</p>
      </Modal.Body>
    </Modal>
  );
}
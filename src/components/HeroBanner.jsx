import React from 'react';
import { Button } from 'react-bootstrap';

export default function HeroBanner({ title, description, bgImage }) {
  return (
    <div 
      className="d-flex flex-column justify-content-center px-5 text-white"
      style={{
        height: '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url("${bgImage}")`,
      }}
    >
      <h1 className="display-3 fw-bold mb-3">{title}</h1>
      <p className="lead w-50 mb-4">{description}</p>
      <div className="d-flex gap-3">
        <Button variant="light" className="px-4 py-2 fw-bold text-dark">▶ Play</Button>
        <Button variant="secondary" className="px-4 py-2 fw-bold text-white" style={{ backgroundColor: 'rgba(109, 109, 110, 0.7)' }}>
          ⓘ More Info
        </Button>
      </div>
    </div>
  );
}
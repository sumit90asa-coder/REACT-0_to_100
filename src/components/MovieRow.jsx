import React from 'react';

export default function MovieRow({ title, movies, isLarge = false }) {
  return (
    <div className="mb-5">
      <h4 className="mb-3 text-white">{title}</h4>
      <div className="d-flex overflow-auto movie-row gap-2 pb-3" style={{ scrollbarWidth: 'none' }}>
        {movies.map((movie, index) => (
          <img
            key={index}
            src={movie}
            alt="Movie Poster"
            style={{ 
              width: isLarge ? '200px' : '150px', 
              height: isLarge ? '300px' : '225px', 
              objectFit: 'cover', 
              borderRadius: '4px', 
              cursor: 'pointer',
              flexShrink: 0
            }}
            className="movie-poster"
          />
        ))}
      </div>
    </div>
  );
}
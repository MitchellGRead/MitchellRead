import { useState } from 'react';

export function WorkItem({ title, description, emoji }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '14px',
        alignItems: 'start',
      }}
    >
      <span style={{
        fontSize: '1.2rem',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.25)' : 'scale(1)',
        animation: hovered ? 'wiggle 0.4s ease-in-out' : 'none',
      }}>
        {emoji}
      </span>
      <div>
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          margin: '0 0 6px 0',
          color: '#1a1a1a',
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '1.05rem', 
          lineHeight: 1.7, 
          color: '#555', 
          margin: 0,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

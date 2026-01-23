import { useState } from 'react';

export function ContactLink({ href, label }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#3B82F6' : '#1a1a1a',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: 500,
        transition: 'all 0.25s ease',
        borderBottom: hovered ? '2px solid #3B82F6' : '2px solid transparent',
        paddingBottom: '2px',
      }}
    >
      {label}{' '}
      <span style={{
        display: 'inline-block',
        transition: 'transform 0.25s ease',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
      }}>→</span>
    </a>
  );
}

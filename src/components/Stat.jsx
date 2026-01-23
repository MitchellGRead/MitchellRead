import { useState } from 'react';

export function Stat({ label, value }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      <div style={{
        fontSize: '0.75rem',
        fontFamily: 'monospace',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: '#888',
        marginBottom: '4px',
      }}>
        {label}
      </div>
      <div style={{
        fontSize: '1rem',
        fontWeight: 600,
        color: '#1a1a1a',
      }}>
        {value}
      </div>
    </div>
  );
}

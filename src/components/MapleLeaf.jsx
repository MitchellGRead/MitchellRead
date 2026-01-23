import { useState } from 'react';

/**
 * Easter egg: Maple leaf spins and changes color
 */
export function MapleLeaf() {
  const [hovered, setHovered] = useState(false);
  const [clicks, setClicks] = useState(0);
  
  const colors = ['🍁', '🍂', '🌿', '🍀', '🌸'];
  
  return (
    <p style={{
      marginTop: '40px',
      fontSize: '0.9rem',
      color: '#888',
      fontFamily: 'monospace',
    }}>
      Victoria, BC{' '}
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setClicks(c => c + 1)}
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          animation: hovered ? 'spin 0.6s ease-in-out' : 'none',
          transition: 'transform 0.2s ease',
          transform: hovered ? 'scale(1.3)' : 'scale(1)',
        }}
      >
        {colors[clicks % colors.length]}
      </span>
    </p>
  );
}

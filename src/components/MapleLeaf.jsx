import { useState } from 'react';

/**
 * Easter egg: Icon cycles through Canada and tech emojis on click
 */
export function MapleLeaf() {
  const [hovered, setHovered] = useState(false);
  const [clicks, setClicks] = useState(0);
  
  const icons = ['🍁', '🇨🇦', '💻', '🚀', '🦫', '⚡️', '🏔️', '🔧', '🏒', '💡'];
  
  return (
    <p style={{
      marginTop: '40px',
      fontSize: '0.9rem',
      color: '#888',
      fontFamily: 'monospace',
    }}>
      Victoria, BC{' '}
      <span
        key={clicks}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setClicks(c => c + 1)}
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          fontSize: '1.1rem',
          lineHeight: 1,
          animation: 'spin 0.6s ease-in-out',
          transition: 'transform 0.2s ease',
          transform: hovered ? 'scale(1.3)' : 'scale(1)',
        }}
      >
        {icons[clicks % icons.length]}
      </span>
    </p>
  );
}

import { useState } from 'react';

/**
 * Easter egg: Rember text with subtle glow on hover
 */
export function RemberText({ children }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <strong
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        color: 'var(--text-primary)', 
        fontWeight: 600,
        cursor: 'default',
        transition: 'all 0.3s ease',
        textShadow: hovered ? '0 0 20px var(--accent-light), 0 0 40px var(--accent-light)' : 'none',
      }}
    >
      {children}
    </strong>
  );
}

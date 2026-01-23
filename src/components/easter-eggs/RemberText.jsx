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
        color: '#1a1a1a', 
        fontWeight: 600,
        cursor: 'default',
        transition: 'all 0.3s ease',
        textShadow: hovered ? '0 0 20px rgba(255, 107, 53, 0.5), 0 0 40px rgba(255, 107, 53, 0.3)' : 'none',
      }}
    >
      {children}
    </strong>
  );
}

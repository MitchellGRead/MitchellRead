import { useState } from 'react';

/**
 * Shared particle animation component for easter egg text effects.
 * Handles emoji particles that appear on hover with customizable animations.
 */
export function ParticleText({ 
  children, 
  emojis, 
  particleCount = 5,
  animationType = 'float', // 'float' | 'pop-float'
  spreadX = 40,
  topOffset = 0,
  fontSize = '1rem',
  duration = 1000,
  delayPattern = 'random' // 'random' | 'sequential'
}) {
  const [particles, setParticles] = useState([]);
  
  const handleMouseEnter = () => {
    const emojiArray = Array.isArray(emojis) ? emojis : [emojis];
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: Date.now() + i,
      emoji: emojiArray[Math.floor(Math.random() * emojiArray.length)],
      x: Math.random() * spreadX - (spreadX / 2),
      delay: delayPattern === 'random' 
        ? Math.random() * 0.3 
        : i * 0.1,
    }));
    setParticles(prev => [...prev, ...newParticles]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, duration);
  };
  
  const animationName = animationType === 'pop-float' 
    ? 'pop 0.5s ease-out forwards, float 1s ease-out 0.4s forwards'
    : 'float 0.8s ease-out forwards';
  
  return (
    <span
      onMouseEnter={handleMouseEnter}
      style={{ 
        position: 'relative',
        cursor: 'default',
      }}
    >
      {children}
      {particles.map(p => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: `calc(50% + ${p.x}px)`,
            top: `${topOffset}px`,
            fontSize: fontSize,
            pointerEvents: 'none',
            animation: animationName,
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </span>
  );
}

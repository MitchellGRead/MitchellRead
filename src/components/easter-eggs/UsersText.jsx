import { ParticleText } from './ParticleText.jsx';

/**
 * Easter egg: User icons pop up
 */
export function UsersText({ children }) {
  const emojis = ['👤', '👥', '👨‍💻', '👩‍💼', '🧑‍💻'];
  
  return (
    <ParticleText
      emojis={emojis}
      particleCount={6}
      animationType="pop-float"
      spreadX={80}
      topOffset={-5}
      fontSize="0.85rem"
      delayPattern="sequential"
    >
      {children}
    </ParticleText>
  );
}

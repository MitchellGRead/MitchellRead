import { ParticleText } from './ParticleText.jsx';

/**
 * Easter egg: Little houses appear
 */
export function HouseText({ children }) {
  return (
    <ParticleText
      emojis={['🏠']}
      particleCount={4}
      animationType="pop-float"
      spreadX={60}
      topOffset={-5}
      fontSize="0.9rem"
      delayPattern="sequential"
    >
      {children}
    </ParticleText>
  );
}

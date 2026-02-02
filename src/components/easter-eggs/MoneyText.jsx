import { ParticleText } from './ParticleText.jsx';

/**
 * Easter egg: Money flies out on hover
 */
export function MoneyText({ children, amount }) {
  const emojis = amount === 'big' 
    ? ['💰', '💵'] 
    : ['💵', '💰'];
  
  const particleCount = amount === 'big' ? 8 : 5;
  
  return (
    <strong style={{ 
      color: '#1a1a1a', 
      fontWeight: 600,
    }}>
      <ParticleText
        emojis={emojis}
        particleCount={particleCount}
        animationType="float"
        spreadX={40}
        topOffset={0}
        fontSize="1rem"
        delayPattern="random"
      >
        {children}
      </ParticleText>
    </strong>
  );
}

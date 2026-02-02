import { useEffect, useState } from 'react';
import { RemberText } from './easter-eggs/RemberText.jsx';
import { ContactLink } from './ContactLink.jsx';

const phrases = [
  "Building with AI",
  "Exploring new possibilities",
  "Shipping fast",
  "Learning in public",
  "Creating for humans",
  "Solving real problems"
];

export function Header({ mounted }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <header style={{
      marginBottom: '80px',
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px',
        backgroundColor: 'var(--accent)',
        color: 'white',
        fontSize: '11px',
        fontFamily: 'monospace',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '24px',
        borderRadius: '2px',
      }}>
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.8)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        <span style={{
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'all 0.3s ease',
          minWidth: '180px',
          display: 'inline-block',
        }}>
          {phrases[currentPhraseIndex]}
        </span>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
        {/* Photo placeholder */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: 'var(--border)',
          border: '2px solid var(--border-light)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
        }}>
          MR
        </div>
        
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            margin: '0 0 24px 0',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}>
            <span style={{
              display: 'inline-block',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            }}>Mitchell Read</span>
            <span style={{
              display: 'block',
              color: 'var(--text-secondary)',
              fontSize: '0.5em',
              fontWeight: 300,
              marginTop: '8px',
              letterSpacing: '0',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}>
              Technical Founder
            </span>
          </h1>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: 'var(--text-quaternary)',
            maxWidth: '560px',
            margin: '0 0 20px 0',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
          }}>
            Canadian-born engineer with a bias for building. I left enterprise software to pursue the kind of work that keeps me up at night—not from stress, but from excitement.
          </p>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: 'var(--text-quaternary)',
            maxWidth: '560px',
            margin: '0 0 24px 0',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          }}>
            Building <RemberText>Rember</RemberText> — a self-updating CRM that ensures 
            client-focused professionals never forget an interaction or moment with the people who matter most.
          </p>
          
          {/* Contact Links */}
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            marginTop: '24px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
          }}>
            <ContactLink href="mailto:mitchell@getrember.com" label="Email" />
            <ContactLink href="https://www.linkedin.com/in/mitchell-read-09a9b313a/" label="LinkedIn" />
            <ContactLink href="https://github.com/MitchellGRead" label="GitHub" />
          </div>
        </div>
      </div>
    </header>
  );
}

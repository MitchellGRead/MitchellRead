import { RemberText } from './easter-eggs/RemberText.jsx';

export function Header({ mounted }) {
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
        backgroundColor: '#3B82F6',
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
        Building in Public
      </div>
      
      <h1 style={{
        fontSize: 'clamp(2.5rem, 8vw, 4rem)',
        fontWeight: 400,
        lineHeight: 1.1,
        margin: '0 0 24px 0',
        letterSpacing: '-0.02em',
      }}>
        <span style={{
          display: 'inline-block',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
        }}>Mitchell Read</span>
        <span style={{
          display: 'block',
          color: '#666',
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
        fontSize: '1.25rem',
        lineHeight: 1.6,
        color: '#444',
        maxWidth: '560px',
        margin: 0,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(15px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
      }}>
        Building <RemberText>Rember</RemberText> — a self-updating CRM that ensures 
        client-focused professionals never forget an interaction or moment with the people who matter most.
      </p>
    </header>
  );
}

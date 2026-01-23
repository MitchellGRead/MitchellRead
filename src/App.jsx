import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FAFAF8',
      color: '#1a1a1a',
      fontFamily: 'Georgia, serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.018) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Accent blob */}
      <div style={{
        position: 'fixed',
        top: '-20%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        transition: 'transform 0.8s ease',
        transform: mounted ? 'scale(1)' : 'scale(0.8)',
      }} />

      <main style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '80px 24px 120px',
        position: 'relative',
      }}>
        {/* Header */}
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
            backgroundColor: '#FF6B35',
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
            YC W25 Applicant
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
            }}>Mitchell</span>
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

        {/* Rember Section */}
        <Section
          delay={0.1}
          mounted={mounted}
          isHovered={hoveredSection === 'rember'}
          onHover={() => setHoveredSection('rember')}
          onLeave={() => setHoveredSection(null)}
        >
          <SectionLabel>What I'm Building</SectionLabel>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 400,
            margin: '0 0 16px 0',
            letterSpacing: '-0.01em',
          }}>
            Rember
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', margin: '0 0 16px 0' }}>
            CRMs are where relationships go to die — buried under data entry, forgotten follow-ups, 
            and context that slips through the cracks. Rember fixes this by automatically capturing 
            and surfacing the moments that matter, so you can focus on people, not process.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', margin: '0 0 20px 0' }}>
            We're starting with <HouseText>real estate</HouseText> — an industry built entirely on relationships — 
            and recently validated our approach at the <strong>CREB Realtors Conference</strong>. 
            The vision extends to any profession where client relationships drive success.
          </p>
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
          }}>
            <Stat label="Initial Market" value="Real Estate" />
            <Stat label="Validation" value="CREB Conference" />
            <Stat label="Stage" value="Pre-seed" />
          </div>
        </Section>

        {/* Background Section */}
        <Section
          delay={0.2}
          mounted={mounted}
          isHovered={hoveredSection === 'background'}
          onHover={() => setHoveredSection('background')}
          onLeave={() => setHoveredSection(null)}
        >
          <SectionLabel>Background</SectionLabel>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 400,
            margin: '0 0 20px 0',
            letterSpacing: '-0.01em',
          }}>
            Enterprise Engineering + Public Markets
          </h2>

          <div style={{ marginBottom: '28px' }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              margin: '0 0 8px 0',
              color: '#1a1a1a',
            }}>
              Workday <span style={{ fontWeight: 400, color: '#666' }}>— 4 years</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#333', margin: 0 }}>
              Started as a co-op and grew to P3 Engineer. Led cross-functional initiatives 
              integrating backend systems with mobile clients. Built a bespoke home experience 
              that shipped to <UsersText>millions of users</UsersText>. Learned how enterprise software actually gets built.
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              margin: '0 0 8px 0',
              color: '#1a1a1a',
            }}>
              Public Markets
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#333', margin: 0 }}>
              Co-op at a fund managing <MoneyText amount="big">$3.2B globally</MoneyText> in public equities. 
              Served as portfolio manager for the UVic investment fund, directly managing <MoneyText amount="small">$2.6M</MoneyText>. 
              Learned to make decisions with incomplete information and live with the consequences.
            </p>
          </div>
        </Section>

        {/* How I Work Section */}
        <Section
          delay={0.25}
          mounted={mounted}
          isHovered={hoveredSection === 'how'}
          onHover={() => setHoveredSection('how')}
          onLeave={() => setHoveredSection(null)}
        >
          <SectionLabel>How I Work</SectionLabel>
          <div style={{
            display: 'grid',
            gap: '24px',
          }}>
            <WorkItem 
              title="Ship first, polish later" 
              description="I'd rather have something real in front of users than a perfect plan in a doc. Feedback from the world beats feedback from your head."
              emoji="🚀"
            />
            <WorkItem 
              title="Own the whole stack" 
              description="I don't hand off problems. If it needs backend work, I do backend. If it needs infrastructure, I spin it up. Boundaries slow things down."
              emoji="🔧"
            />
            <WorkItem 
              title="Stay close to the problem" 
              description="The best software comes from genuine curiosity about the people using it. I talk to users constantly — not to validate, but to understand."
              emoji="🎯"
            />
          </div>
        </Section>

        {/* Why I Build Section */}
        <Section
          delay={0.3}
          mounted={mounted}
          isHovered={hoveredSection === 'why'}
          onHover={() => setHoveredSection('why')}
          onLeave={() => setHoveredSection(null)}
        >
          <SectionLabel>Why I Build</SectionLabel>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', margin: 0 }}>
            I've seen how enterprise software gets made at scale — and how it often fails the people 
            who use it. Rember is my bet that software can be <em>genuinely</em> helpful, 
            not just powerful. That it can strengthen human relationships instead of abstracting them away.
          </p>
        </Section>

        {/* Contact */}
        <footer style={{
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: '0.4s',
        }}>
          <SectionLabel>Get in Touch</SectionLabel>
          <div style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            marginTop: '16px',
          }}>
            <ContactLink href="mailto:mitchell@rember.chat" label="Email" />
            <ContactLink href="https://www.linkedin.com/in/mitchell-read-09a9b313a/" label="LinkedIn" />
            <ContactLink href="https://github.com/MitchellGRead" label="GitHub" />
          </div>
          
          <MapleLeaf />
        </footer>
      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-60px) rotate(15deg); opacity: 0; }
        }
        
        @keyframes pop {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          75% { transform: rotate(8deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
        }
        
        ::selection {
          background: rgba(255, 107, 53, 0.2);
        }
      `}</style>
    </div>
  );
}

// Easter egg: Rember text with subtle glow on hover
function RemberText({ children }) {
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

// Easter egg: Money flies out on hover
function MoneyText({ children, amount }) {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  
  const emojis = amount === 'big' 
    ? ['💰', '💵', '💎', '📈', '🤑'] 
    : ['💵', '💰', '📊'];
  
  const handleMouseEnter = () => {
    const count = amount === 'big' ? 8 : 5;
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 40 - 20,
      delay: Math.random() * 0.3,
    }));
    setParticles(prev => [...prev, ...newParticles]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };
  
  return (
    <strong
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      style={{ 
        color: '#1a1a1a', 
        fontWeight: 600,
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
            top: '0',
            fontSize: '1rem',
            pointerEvents: 'none',
            animation: `float 0.8s ease-out forwards`,
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </strong>
  );
}

// Easter egg: Little houses appear
function HouseText({ children }) {
  const [particles, setParticles] = useState([]);
  
  const handleMouseEnter = () => {
    const newParticles = Array.from({ length: 4 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 60 - 30,
      delay: i * 0.1,
    }));
    setParticles(newParticles);
    
    setTimeout(() => setParticles([]), 1200);
  };
  
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
            top: '-5px',
            fontSize: '0.9rem',
            pointerEvents: 'none',
            animation: `pop 0.5s ease-out forwards, float 1s ease-out 0.4s forwards`,
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        >
          🏠
        </span>
      ))}
    </span>
  );
}

// Easter egg: User icons pop up
function UsersText({ children }) {
  const [particles, setParticles] = useState([]);
  
  const handleMouseEnter = () => {
    const emojis = ['👤', '👥', '👨‍💻', '👩‍💼', '🧑‍💻'];
    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 80 - 40,
      delay: i * 0.08,
    }));
    setParticles(newParticles);
    
    setTimeout(() => setParticles([]), 1200);
  };
  
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
            top: '-5px',
            fontSize: '0.85rem',
            pointerEvents: 'none',
            animation: `pop 0.4s ease-out forwards, float 0.9s ease-out 0.35s forwards`,
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

// Easter egg: Maple leaf spins and changes color
function MapleLeaf() {
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

function Section({ children, delay, mounted, isHovered, onHover, onLeave }) {
  return (
    <section
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        marginBottom: '56px',
        padding: '32px',
        marginLeft: '-32px',
        marginRight: '-32px',
        borderRadius: '8px',
        backgroundColor: isHovered ? 'rgba(255,107,53,0.03)' : 'transparent',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: '11px',
      fontFamily: 'monospace',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#FF6B35',
      marginBottom: '12px',
      fontWeight: 500,
    }}>
      {children}
    </div>
  );
}

function Stat({ label, value }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      <div style={{
        fontSize: '0.75rem',
        fontFamily: 'monospace',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: '#888',
        marginBottom: '4px',
      }}>
        {label}
      </div>
      <div style={{
        fontSize: '1rem',
        fontWeight: 600,
        color: '#1a1a1a',
      }}>
        {value}
      </div>
    </div>
  );
}

function WorkItem({ title, description, emoji }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '14px',
        alignItems: 'start',
      }}
    >
      <span style={{
        fontSize: '1.2rem',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.25)' : 'scale(1)',
        animation: hovered ? 'wiggle 0.4s ease-in-out' : 'none',
      }}>
        {emoji}
      </span>
      <div>
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          margin: '0 0 6px 0',
          color: '#1a1a1a',
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '1.05rem', 
          lineHeight: 1.7, 
          color: '#555', 
          margin: 0,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function ContactLink({ href, label }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#FF6B35' : '#1a1a1a',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: 500,
        transition: 'all 0.25s ease',
        borderBottom: hovered ? '2px solid #FF6B35' : '2px solid transparent',
        paddingBottom: '2px',
      }}
    >
      {label}{' '}
      <span style={{
        display: 'inline-block',
        transition: 'transform 0.25s ease',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
      }}>→</span>
    </a>
  );
}

import { useEffect, useState } from 'react';
import { ContactLink } from './components/ContactLink.jsx';
import { Header } from './components/Header.jsx';
import { MapleLeaf } from './components/MapleLeaf.jsx';
import { Section } from './components/Section.jsx';
import { SectionLabel } from './components/SectionLabel.jsx';
import { Stat } from './components/Stat.jsx';
import { WorkItem } from './components/WorkItem.jsx';
import { HouseText } from './components/easter-eggs/HouseText.jsx';
import { MoneyText } from './components/easter-eggs/MoneyText.jsx';
import { UsersText } from './components/easter-eggs/UsersText.jsx';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{
      width: '100%',
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
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
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
        <Header mounted={mounted} />

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
            marginBottom: '24px',
          }}>
            <ContactLink href="https://rember.tech" label="View Product" />
            <ContactLink href="https://rember.chat" label="Sign Up" />
          </div>
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
          }}>
            <Stat label="Initial Market" value="Real Estate" />
            <Stat label="Validation" value="CREB Conference" />
            <Stat label="Stage" value="Bootstrapped" />
          </div>
          
          <div style={{
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            fontSize: '0.9rem',
            color: '#666',
          }}>
            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              alignItems: 'baseline',
            }}>
              <span>
                <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Mitchell Read</span>
                <span style={{ marginLeft: '6px' }}>Co-founder, CTO</span>
              </span>
              <span>
                <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Mazen Wafai</span>
                <span style={{ marginLeft: '6px' }}>Co-founder, CEO</span>
                {' '}
                <a
                  href="https://www.linkedin.com/in/mazenwafai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#3B82F6',
                    textDecoration: 'none',
                    marginLeft: '4px',
                  }}
                >
                  LinkedIn →
                </a>
              </span>
            </div>
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
              that shipped to <UsersText>millions of users</UsersText>. Worked on one of the largest 
              and most configurable HCM/CRM platforms in the world. Experienced firsthand the pain 
              of rigid systems that fight users instead of serving them — the insight driving Rember.
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
            <ContactLink href="mailto:mitchell@getrember.com" label="Email" />
            <ContactLink href="https://www.linkedin.com/in/mitchell-read-09a9b313a/" label="LinkedIn" />
            <ContactLink href="https://github.com/MitchellGRead" label="GitHub" />
          </div>
          
          <MapleLeaf />
        </footer>
      </main>
    </div>
  );
}

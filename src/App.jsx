import { useEffect, useState } from 'react';
import { ContactLink } from './components/ContactLink.jsx';
import { GitHubRepo } from './components/GitHubRepo.jsx';
import { Header } from './components/Header.jsx';
import { MapleLeaf } from './components/MapleLeaf.jsx';
import { Section } from './components/Section.jsx';
import { SectionLabel } from './components/SectionLabel.jsx';
import { WorkItem } from './components/WorkItem.jsx';
import { MoneyText } from './components/easter-eggs/MoneyText.jsx';
import { UsersText } from './components/easter-eggs/UsersText.jsx';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [repos, setRepos] = useState([]);
  const [reposLoading, setReposLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/MitchellGRead/repos?sort=updated&per_page=6&type=owner'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch repos');
        }
        const data = await response.json();
        // Filter out forks and map to component props
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .map(repo => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
          }));
        setRepos(filteredRepos);
        setReposLoading(false);
      } catch (error) {
        console.error('Failed to fetch repos:', error);
        setReposLoading(false);
      }
    };

    if (mounted) {
      fetchRepos();
    }
  }, [mounted]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      fontFamily: 'Georgia, serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          zIndex: 1000,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
        }}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      {/* Subtle grid background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(var(--grid-line) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
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
        background: `radial-gradient(circle, var(--accent-light) 0%, transparent 70%)`,
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
            color: 'var(--text-primary)',
          }}>
            Rember
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-light)', margin: '0 0 20px 0' }}>
            CRMs are where relationships go to die — buried under data entry, forgotten follow-ups,
            and context that slips through the cracks. Rember fixes this by automatically capturing
            and surfacing the moments that matter, so you can focus on people, not process.
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
          <iframe
            src="https://rember.tech"
            title="Rember Website"
            style={{
              width: '100%',
              height: '600px',
              border: `1px solid var(--border-iframe)`,
              borderRadius: '8px',
              marginTop: '24px',
              backgroundColor: 'var(--bg-primary)',
            }}
          />
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
            color: 'var(--text-primary)',
          }}>
            Enterprise Engineering + Public Markets
          </h2>

          <div style={{ marginBottom: '28px' }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              margin: '0 0 8px 0',
              color: 'var(--text-primary)',
            }}>
              Workday <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>— 4 years</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-light)', margin: 0 }}>
              Started as a co-op and grew to P3 Engineer. Led cross-functional initiatives
              integrating backend systems with web and mobile clients. Helped build a bespoke home experience
              that shipped to <UsersText>millions of users</UsersText> and surfaced dynamically renderable content from one of the largest
              and most configurable HCM/CRM platforms in the world. Experienced firsthand the pain
              of rigid systems that fight users instead of serving them — the insight driving Rember.
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              margin: '0 0 8px 0',
              color: 'var(--text-primary)',
            }}>
              Quantitative Analyst + Portfolio Manager - Public Markets
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-light)', margin: 0 }}>
              Co-op at BCI Pension Fund managing <MoneyText amount="big">$3.2B globally</MoneyText> in public equities.
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
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-light)', margin: 0 }}>
            I have always had a passion for software and building things. Combine that with a need to be learning something new every day, and software feels like a once-in-a-lifetime opportunity.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-light)', margin: '16px 0 0 0' }}>
            With this comes a strong belief that AI—with the application of memory and ability to act—can enhance the human experience in ways not possible with traditional software. I build because I believe technology should be <em>genuinely</em> helpful, not just powerful.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-light)', margin: '16px 0 0 0' }}>
            Everything happening gives me the same giddy feeling I had as a kid staying up all night in front of the family computer. To quote my own mother: <strong>"If you never try something, how will you know what works?"</strong>
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: '16px 0 0 0', fontStyle: 'italic' }}>
            P.S. If you're the curious type, hover around—there might be a few surprises hidden in the text & icons.
          </p>
        </Section>

        {/* GitHub Repos Section */}
        <Section
          delay={0.35}
          mounted={mounted}
          isHovered={hoveredSection === 'repos'}
          onHover={() => setHoveredSection('repos')}
          onLeave={() => setHoveredSection(null)}
        >
          <SectionLabel>GitHub</SectionLabel>
          {reposLoading ? (
            <div style={{
              padding: '20px',
              textAlign: 'center',
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
            }}>
              Loading repositories...
            </div>
          ) : repos.length > 0 ? (
            <div style={{
              display: 'grid',
              gap: '16px',
            }}>
              {repos.map((repo, index) => (
                <GitHubRepo
                  key={repo.url}
                  name={repo.name}
                  description={repo.description}
                  url={repo.url}
                  language={repo.language}
                  stars={repo.stars}
                />
              ))}
            </div>
          ) : (
            <div style={{
              padding: '20px',
              textAlign: 'center',
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
            }}>
              No repositories found.
            </div>
          )}
        </Section>

        {/* Contact */}
        <footer style={{
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: `1px solid var(--border-light)`,
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

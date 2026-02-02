import { useState } from 'react';

export function GitHubRepo({ name, description, url, language, stars }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        padding: '20px',
        borderRadius: '8px',
        border: `1px solid var(--border)`,
        backgroundColor: 'var(--bg-card)',
        boxShadow: hovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '8px',
      }}>
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          margin: 0,
          color: hovered ? 'var(--accent)' : 'var(--text-primary)',
          transition: 'color 0.3s ease',
        }}>
          {name}
        </h3>
        {stars !== undefined && stars !== null && (
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            {stars}
          </span>
        )}
      </div>
      {description && (
        <p style={{
          fontSize: '0.95rem',
          lineHeight: 1.6,
          color: 'var(--text-light)',
          margin: '8px 0 0 0',
        }}>
          {description}
        </p>
      )}
      {language && (
        <div style={{
          marginTop: '12px',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            marginRight: '6px',
          }} />
          {language}
        </div>
      )}
    </a>
  );
}

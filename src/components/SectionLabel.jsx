export function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: '11px',
      fontFamily: 'monospace',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: '12px',
      fontWeight: 500,
    }}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }) {
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

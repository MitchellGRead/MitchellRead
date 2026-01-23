export function Section({ children, delay, mounted, isHovered, onHover, onLeave }) {
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
        backgroundColor: isHovered ? 'rgba(59,130,246,0.04)' : 'transparent',
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

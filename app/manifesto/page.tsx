export default function ManifestoPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '16px',
      paddingTop: '80px',
    }}>
      <h1 style={{
        fontFamily: 'Bangers, cursive',
        color: '#F4C300',
        fontSize: '80px',
        letterSpacing: '0.05em',
        margin: 0,
      }}>
        Manifesto.
      </h1>
      <p style={{
        fontFamily: 'Comic Neue, cursive',
        color: '#FFFFFF',
        fontSize: '18px',
      }}>
        Content coming soon — check back shortly.
      </p>
    </div>
  );
}

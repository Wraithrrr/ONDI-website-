export default function InlineTest() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #059669 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '800px',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#10b981'
        }}>
          ONDI
        </h1>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem'
        }}>
          Office for Nigerian Digital Innovation
        </h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Empowering Nigeria's digital future through innovation, talent development, and strategic partnerships.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={{
            backgroundColor: '#059669',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Explore Programs
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            border: '2px solid white',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

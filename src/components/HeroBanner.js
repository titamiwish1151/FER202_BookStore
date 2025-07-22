const HeroBanner = () => (
  <section style={{
    position: 'relative',
    width: '100%',
    height: '500px', // Adjusted height to match IKEA PR more closely
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: '2rem',
  }}>
    <img
      src="https://www.ikea.com/images/a-living-room-with-a-blue-sofa-and-a-rug-with-a-blue-pattern-a808801d00c3c544e3778a46b4383412.jpg?f=xxxl" // Example image
      alt="IKEA Living Room"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x500/cccccc/333333?text=IKEA+Hero+Banner"; }}
    />
    <div style={{
      position: 'relative',
      zIndex: 10,
      color: '#fff',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'rgba(0,0,0,0.4)',
      borderRadius: '0.5rem',
      maxWidth: '80%', // Limit width on smaller screens
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to IKEA Puerto Rico</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Low prices. Very low prices.</p>
      <button style={{
        backgroundColor: '#0056b3',
        color: '#fff',
        padding: '0.75rem 2rem',
        borderRadius: '9999px',
        border: 'none',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}>Shop Now</button>
    </div>
  </section>
);
export default HeroBanner;
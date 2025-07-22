const DeliveryServicesSection = () => (
  <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem', marginBottom: '2rem' }}>
    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem', textAlign: 'center' }}>Delivery and Services</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Click & Collect</h3>
        <p style={{ color: '#4b5563' }}>Pick up your order at your nearest store.</p>
      </div>
      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Parcel delivery for $8.95</h3>
        <p style={{ color: '#4b5563' }}>Small items delivered to your home.</p>
      </div>
      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Delivery service (flat rate $50)</h3>
        <p style={{ color: '#4b5563' }}>For metropolitan area.</p>
      </div>
      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Phone sales service</h3>
        <p style={{ color: '#4b5563' }}>Order by phone.</p>
      </div>
    </div>
  </section>
);
export default DeliveryServicesSection;
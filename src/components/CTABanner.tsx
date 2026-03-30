export function CTABanner() {
  return (
    <section style={{ padding: '80px 28px', background: 'var(--blue)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -40, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: 'white', marginBottom: 16, letterSpacing: -1, lineHeight: 1.1 }}>
          Get online from <span style={{ color: '#fef08a' }}>₦100,000</span> — limited slots
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', marginBottom: 36, maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.7 }}>
          Professional websites for Nigerian businesses, schools, and organisations. Message us on WhatsApp or use the form — we&apos;ll confirm your package in Naira.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/2347042259026"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'white', color: 'var(--blue)', padding: '15px 36px', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Chat on WhatsApp →
          </a>
          <a
            href="#pricing"
            style={{
              background: 'transparent',
              color: 'white',
              padding: '15px 36px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.4)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
            }}
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  )
}

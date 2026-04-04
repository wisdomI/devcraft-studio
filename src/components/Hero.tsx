import { useEffect, useState } from 'react'

const audiences = [
  { label: 'businesses', color: 'var(--blue)' },
  { label: 'startups', color: 'var(--green)' },
  { label: 'schools', color: 'var(--orange)' },
  { label: 'churches', color: 'var(--purple)' },
  { label: 'SMEs', color: '#0d9488' },
]

export function Hero() {
  const [idx, setIdx] = useState(0)
  const [vis, setVis] = useState(true)
  useEffect(() => {
    const id = setInterval(() => {
      setVis(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % audiences.length)
        setVis(true)
      }, 280)
    }, 2400)
    return () => clearInterval(id)
  }, [])
  const a = audiences[idx]

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '130px 28px 80px', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: -60,
          right: -80,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle,#eff6ff 0%,transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle,#f0fdf4 0%,transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="hero-grid" style={{ maxWidth: 1160, margin: '0 auto', width: '100%' }}>
        <div style={{ animation: 'fadeUp 0.7s ease both' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--blue-l)',
              border: '1px solid var(--blue-m)',
              borderRadius: 100,
              padding: '6px 14px',
              marginBottom: 28,
              fontSize: 13,
              color: 'var(--blue)',
              fontWeight: 600,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
            Promo: ₦200,000 website · Limited slots
          </div>
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(40px,5.5vw,68px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              color: 'var(--ink)',
              marginBottom: 24,
            }}
          >
            Get a professional website
            <br />
            for your{' '}
            <span style={{ color: a.color, transition: 'opacity 0.28s,color 0.28s', opacity: vis ? 1 : 0, display: 'inline-block' }}>{a.label}</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--ink2)', lineHeight: 1.75, maxWidth: 500, marginBottom: 14, fontWeight: 400 }}>
            Start getting customers online in <strong style={{ color: 'var(--ink)' }}>5–7 days</strong>. Full professional package from{' '}
            <strong style={{ color: 'var(--green)' }}>₦200,000</strong>{' '}
            <span style={{ color: 'var(--ink3)', textDecoration: 'line-through' }}>₦250,000</span> — priced in Nigerian Naira, no surprises.
          </p>
          <p style={{ fontSize: 15, color: 'var(--ink3)', lineHeight: 1.65, maxWidth: 500, marginBottom: 36 }}>
            Typical full handover in about two weeks. Serving businesses, startups, schools, churches, and SMEs across Nigeria.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 44 }}>
            <a
              href="#pricing"
              style={{
                background: 'var(--blue)',
                color: 'white',
                padding: '15px 32px',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(29,78,216,0.28)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(29,78,216,0.38)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(29,78,216,0.28)'
              }}
            >
              View Pricing →
            </a>
            <a
              href="#work"
              style={{
                background: 'var(--white)',
                color: 'var(--ink)',
                padding: '15px 32px',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid var(--border)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.boxShadow = 'var(--s1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              See Our Work
            </a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {(
              [
                ['✓ Domain, hosting & Google setup included', 'var(--green)'],
                ['✓ WhatsApp chat + contact form', 'var(--blue)'],
                ['✓ SEO & social integration', 'var(--orange)'],
              ] as const
            ).map(([t, c]) => (
              <span key={t} style={{ fontSize: 13, color: 'var(--ink2)', fontWeight: 500 }}>
                <span style={{ color: c, fontWeight: 700 }}>{t.split(' ')[0]}</span> {t.slice(2)}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', minHeight: 380, animation: 'fadeIn 1s ease 0.3s both' }}>
          <div style={{ position: 'absolute', top: 28, left: 28, right: -8, bottom: -8, background: 'var(--bg3)', borderRadius: 20, border: '1px solid var(--border)' }} />
          <div style={{ position: 'absolute', top: 14, left: 14, right: -4, bottom: -4, background: 'var(--bg2)', borderRadius: 20, border: '1px solid var(--border)' }} />
          {/* <div
            style={{
              position: 'relative',
              borderRadius: 20,
              border: '1px solid var(--border)',
              boxShadow: 'var(--s3)',
              overflow: 'hidden',
              background: 'var(--white)',
            }}
          >
            <img
              src="/promo-flyer-hero.png"
              alt="Responsive website shown on laptop, monitor, and phone"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div> */}

          {
            <div
            style={{
              position: 'relative',
              borderRadius: 20,
              border: '1px solid var(--border)',
              boxShadow: 'var(--s3)',
              overflow: 'hidden',
              background: 'var(--white)',
            }}
          >
            <video
              src="/promo-vid-hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          }
          <div
            style={{
              position: 'absolute',
              top: -16,
              right: -24,
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '10px 16px',
              boxShadow: 'var(--s2)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span style={{ fontSize: 20 }}>⚡</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>97 / 100</div>
              <div style={{ fontSize: 11, color: 'var(--ink3)' }}>PageSpeed Score</div>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: -28,
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '10px 16px',
              boxShadow: 'var(--s2)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span style={{ fontSize: 20 }}>📈</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)' }}>+142% conversions</div>
              <div style={{ fontSize: 11, color: 'var(--ink3)' }}>After redesign</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

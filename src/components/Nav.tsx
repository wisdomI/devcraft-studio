import { useEffect, useState } from 'react'

const logo = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M3 5l5-2 5 2v3.5c0 2.8-2.5 4.5-5 5.5-2.5-1-5-2.7-5-5.5V5z"
      stroke="white"
      strokeWidth="1.4"
      fill="none"
    />
    <path d="M5.5 8l2 2 3-3.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(250,250,248,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.35s',
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: '0 28px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, background: 'var(--blue)', borderRadius: 8, display: 'grid', placeItems: 'center' }}>
            {logo}
          </div>
          <span style={{ fontWeight: 700, fontSize: 17, color: 'var(--ink)', letterSpacing: -0.3 }}>
            DevCraft <span style={{ color: 'var(--blue)' }}>Studio</span>
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <div className="nav-links-wrap" style={{ display: 'flex', gap: 28 }}>
            {['Services', 'Pricing', 'Work', 'FAQ'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{ color: 'var(--ink2)', textDecoration: 'none', fontSize: 14.5, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--blue)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--ink2)'
                }}
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="nav-cta"
            style={{
              background: 'var(--blue)',
              color: 'white',
              padding: '10px 22px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(29,78,216,0.25)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1e40af'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(29,78,216,0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--blue)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(29,78,216,0.25)'
            }}
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

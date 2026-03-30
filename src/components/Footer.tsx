const footerLogo = (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 5l5-2 5 2v3.5c0 2.8-2.5 4.5-5 5.5-2.5-1-5-2.7-5-5.5V5z" stroke="white" strokeWidth="1.4" fill="none" />
    <path d="M5.5 8l2 2 3-3.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const columns = [
  { heading: 'Services', links: ['Personal Sites', 'Business Sites', 'Startup MVPs', 'Enterprise', 'E-commerce'] as const },
  { heading: 'Company', links: ['Our Work', 'Pricing', 'About Us', 'Blog', 'Contact'] as const },
  { heading: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'] as const },
] as const

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', padding: '52px 28px 36px', color: 'rgba(255,255,255,0.5)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, background: 'var(--blue)', borderRadius: 7, display: 'grid', placeItems: 'center' }}>{footerLogo}</div>
              <span style={{ color: 'white', fontWeight: 700, fontSize: 16 }}>DevCraft Studio</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 230 }}>Premium web development built for every budget. Fast, fair, and transparent.</p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <div style={{ color: 'rgba(255,255,255,0.28)', fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>{col.heading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                    }}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 13 }}>
          <span>© {new Date().getFullYear()} DevCraft Studio. All rights reserved.</span>
          <span>Built with ❤️ for the web</span>
        </div>
      </div>
    </footer>
  )
}

import { tiers } from '../content'
import { useInView } from '../hooks/useInView'
import { Label } from './Label'

export function Services() {
  const [ref, inView] = useInView<HTMLElement>(0.12)
  return (
    <section id="services" ref={ref} style={{ padding: '100px 28px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <Label text="WHO WE SERVE" />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 800, letterSpacing: -1, marginBottom: 14 }}>Who we build for</h2>
        <p style={{ fontSize: 17, color: 'var(--ink2)', maxWidth: 540, marginBottom: 60, lineHeight: 1.7 }}>
          Serving teams across Nigeria — from shops and startups to schools and churches — with clear packages priced in Naira.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(255px,1fr))', gap: 18 }}>
          {tiers.map((t, i) => (
            <div
              key={t.label}
              style={{
                background: t.bg,
                border: `1px solid ${t.bdr}`,
                borderRadius: 16,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.5s ${i * 80}ms,transform 0.5s ${i * 80}ms`,
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{t.icon}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: t.color, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>{t.label}</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.3 }}>{t.headline}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, marginBottom: 20 }}>{t.desc}</p>
              <ul style={{ listStyle: 'none', marginBottom: 24, flex: 1 }}>
                {t.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                      fontSize: 13.5,
                      color: 'var(--ink2)',
                      padding: '5px 0',
                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    <span style={{ color: t.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={t.href}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13.5, fontWeight: 600, color: t.color, textDecoration: 'none', transition: 'gap 0.2s' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '10px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '5px'
                }}
              >
                See pricing →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

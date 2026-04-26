import { projects } from '../content'
import { useInView } from '../hooks/useInView'
import { Label } from './Label'

export function Work() {
  const [ref, inView] = useInView<HTMLElement>(0.12)
  return (
    <section id="work" ref={ref} style={{ padding: '100px 28px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <Label text="SELECTED WORK" />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 800, letterSpacing: -1, marginBottom: 14 }}>Projects we&apos;re proud of</h2>
        <p style={{ fontSize: 17, color: 'var(--ink2)', maxWidth: 500, marginBottom: 56, lineHeight: 1.7 }}>A sample of what we&apos;ve shipped for clients across industries and budgets.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: 18 }}>
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: 'var(--s1)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.5s ${i * 70}ms`,
                cursor: 'pointer',
                display: 'block',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--s2)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--s1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ height: 130, background: p.cbg, position: 'relative', padding: 14, borderBottom: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
                  {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
                    <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'block', opacity: 0.75 }} />
                  ))}
                </div>
                <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 4, padding: '3px 10px', fontSize: 11, color: 'var(--ink3)', width: 'fit-content' }}>
                  {new URL(p.href).host.replace(/^www\./, '')}
                </div>
                <div style={{ position: 'absolute', bottom: 14, right: 18, fontFamily: 'var(--serif)', fontSize: 42, fontWeight: 800, color: p.color, opacity: 0.18 }}>{p.name[0]}</div>
              </div>
              <div style={{ padding: '18px 20px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7, gap: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>{p.name}</h3>
                  <span style={{ fontSize: 10, fontWeight: 700, color: p.color, border: `1px solid ${p.color}40`, borderRadius: 5, padding: '2px 7px', letterSpacing: 0.8, flexShrink: 0 }}>{p.type}</span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--ink3)', fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 8 }}>{p.tag}</div>
                <p style={{ fontSize: 13.5, color: 'var(--ink2)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

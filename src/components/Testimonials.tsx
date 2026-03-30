import { testimonials } from '../content'
import { useInView } from '../hooks/useInView'
import { Label } from './Label'

export function Testimonials() {
  const [ref, inView] = useInView<HTMLDivElement>(0.12)
  return (
    <section style={{ padding: '100px 28px', background: 'var(--white)' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label text="TESTIMONIALS" />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 800, letterSpacing: -1, marginBottom: 52 }}>What our clients say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 18 }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: 26,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ${i * 80}ms`,
              }}
            >
              <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} style={{ color: '#fbbf24', fontSize: 15 }}>
                    ★
                  </span>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: 'var(--ink2)', lineHeight: 1.75, marginBottom: 22, fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'var(--blue-l)',
                    border: '1px solid var(--blue-m)',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    color: 'var(--blue)',
                  }}
                >
                  {t.av}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink3)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

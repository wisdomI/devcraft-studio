import { steps } from '../content'
import { useInView } from '../hooks/useInView'
import { Label } from './Label'

export function Process() {
  const [ref, inView] = useInView<HTMLDivElement>(0.12)
  return (
    <section style={{ padding: '100px 28px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto' }}>
        <Label text="OUR PROCESS" />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 800, letterSpacing: -1, marginBottom: 56 }}>Simple. Transparent. Reliable.</h2>
        <div className="process-grid">
          <div
            className="process-line"
            style={{
              position: 'absolute',
              top: 28,
              left: '12.5%',
              right: '12.5%',
              height: 1,
              background: 'linear-gradient(90deg,var(--blue-m),var(--border),var(--border),var(--border))',
              zIndex: 0,
            }}
          />
          {steps.map((s, i) => (
            <div
              key={s.n}
              style={{
                position: 'relative',
                zIndex: 1,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.5s ${i * 100}ms`,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: i === 0 ? 'var(--blue)' : 'var(--white)',
                  border: `2px solid ${i === 0 ? 'var(--blue)' : 'var(--border)'}`,
                  display: 'grid',
                  placeItems: 'center',
                  marginBottom: 20,
                  fontSize: 22,
                  boxShadow: 'var(--s1)',
                }}
              >
                {s.icon}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink4)', letterSpacing: 1.5, marginBottom: 8 }}>STEP {s.n}</div>
              <h3 style={{ fontWeight: 700, fontSize: 16.5, color: 'var(--ink)', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

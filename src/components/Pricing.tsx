import { currencyCode, formatNaira, plans } from '../content'
import { useInView } from '../hooks/useInView'
import { Label } from './Label'

export function Pricing() {
  const [ref, inView] = useInView<HTMLElement>(0.12)
  return (
    <section id="pricing" ref={ref} style={{ padding: '100px 28px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <Label text="PRICING" />
        <div
          style={{
            background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
            borderRadius: 14,
            padding: '16px 22px',
            marginBottom: 28,
            color: 'white',
            boxShadow: '0 8px 28px rgba(220,38,38,0.25)',
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, opacity: 0.9, marginBottom: 6 }}>ACTIVE PROMO</div>
          <p style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.55, margin: 0 }}>
            Professional website package: <strong style={{ color: '#fef08a' }}>₦{formatNaira(200_000)}</strong> (regular{' '}
            <span style={{ textDecoration: 'line-through', opacity: 0.85 }}>₦{formatNaira(400_000)}</span>). Start getting customers online in{' '}
            <strong>5–7 days</strong> — <strong>Limited slots available.</strong>
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 52 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 800, letterSpacing: -1, marginBottom: 12 }}>
              Honest pricing.
              <br />
              No hidden costs.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink2)', maxWidth: 420, lineHeight: 1.7 }}>
              All prices in Nigerian Naira (₦). Fixed packages — upgrade when you&apos;re ready.
            </p>
          </div>
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 18px', fontSize: 13, color: 'var(--ink2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--ink)' }}>Payment plans available.</strong>
            <br />
            Churches, schools &amp; non-profits — ask about concessions.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(258px,1fr))', gap: 16 }}>
          {plans.map((p, i) => (
            <div
              key={p.name}
              style={{
                background: p.popular ? 'var(--blue)' : 'var(--white)',
                border: p.popular ? 'none' : '1px solid var(--border)',
                borderRadius: 18,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: p.popular ? '0 16px 48px rgba(29,78,216,0.22)' : 'var(--s1)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.5s ${i * 80}ms,transform 0.5s ${i * 80}ms`,
              }}
            >
              {p.popular ? (
                <div
                  style={{
                    position: 'absolute',
                    top: -12,
                    left: 22,
                    background: '#fbbf24',
                    color: '#78350f',
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    padding: '4px 12px',
                    borderRadius: 100,
                  }}
                >
                  {p.promoBadge ?? 'MOST POPULAR'}
                </div>
              ) : null}
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: p.popular ? 'rgba(255,255,255,0.55)' : 'var(--ink3)',
                  marginBottom: 5,
                }}
              >
                {p.tier}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 22, color: p.popular ? 'white' : 'var(--ink)', marginBottom: 5 }}>{p.name}</div>
              <div style={{ fontSize: 13, color: p.popular ? 'rgba(255,255,255,0.6)' : 'var(--ink3)', marginBottom: 20 }}>{p.ideal}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 26 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
                  {p.price != null ? (
                    <>
                      <span style={{ fontWeight: 600, fontSize: 22, color: p.popular ? 'white' : 'var(--ink)' }}>₦</span>
                      <span
                        style={{
                          fontFamily: 'var(--serif)',
                          fontSize: 50,
                          fontWeight: 800,
                          letterSpacing: -2,
                          color: p.popular ? 'white' : 'var(--ink)',
                          lineHeight: 1,
                        }}
                      >
                        {formatNaira(p.price)}
                      </span>
                      <span style={{ fontSize: 12, color: p.popular ? 'rgba(255,255,255,0.55)' : 'var(--ink3)', marginLeft: 2 }}>one-time · {currencyCode}</span>
                    </>
                  ) : (
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 800, color: p.popular ? 'white' : 'var(--ink)' }}>Custom quote</span>
                  )}
                </div>
                {p.price != null && p.compareAtPrice != null && p.compareAtPrice > p.price ? (
                  <div style={{ fontSize: 13, color: p.popular ? 'rgba(255,255,255,0.65)' : 'var(--ink3)' }}>
                    <span style={{ textDecoration: 'line-through' }}>₦{formatNaira(p.compareAtPrice)}</span>
                    <span style={{ marginLeft: 8 }}>regular price</span>
                  </div>
                ) : null}
              </div>
              <ul style={{ listStyle: 'none', flex: 1, marginBottom: 26 }}>
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 9,
                      fontSize: 14,
                      color: p.popular ? 'rgba(255,255,255,0.82)' : 'var(--ink2)',
                      padding: '6px 0',
                      borderBottom: p.popular ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--bg2)',
                    }}
                  >
                    <span style={{ color: p.popular ? '#93c5fd' : p.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '13px',
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  background: p.popular ? 'white' : p.cbg,
                  color: p.popular ? 'var(--blue)' : p.color,
                  border: p.popular ? 'none' : '1px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.87'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {p.price != null ? 'Start this project' : 'Get a custom quote'} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


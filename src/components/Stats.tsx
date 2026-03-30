import { useCounter } from '../hooks/useCounter'
import { useInView } from '../hooks/useInView'

export function Stats() {
  const [ref, inView] = useInView<HTMLElement>(0.12)
  const v1 = useCounter(50, 1400, inView)
  const v2 = useCounter(98, 1600, inView)
  const stats = [
    { val: `${v1}+`, label: 'Projects delivered', icon: '📦' },
    { val: `${v2}%`, label: 'Client satisfaction', icon: '⭐' },
    { val: '5–7', label: 'Days to go live (typical)', icon: '⚡' },
    { val: '₦200k', label: 'Promo website package from', icon: '💵' },
  ]
  return (
    <section ref={ref} style={{ padding: '72px 28px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 2, background: 'var(--border)' }}>
        {stats.map(({ val, label, icon }) => (
          <div key={label} style={{ background: 'var(--white)', padding: '36px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: 26, marginBottom: 10 }}>{icon}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: 'var(--blue)', marginBottom: 6, letterSpacing: -1 }}>{val}</div>
            <div style={{ fontSize: 13.5, color: 'var(--ink2)', fontWeight: 500 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

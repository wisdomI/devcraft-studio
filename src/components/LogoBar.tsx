const names = ['Bloom Co.', 'FounderOS', 'NorthWave', 'Crunch & Co.', 'DataLens AI', 'Meridian Lab']

export function LogoBar() {
  return (
    <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 28px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontSize: 12, color: 'var(--ink3)', fontWeight: 500, marginRight: 6 }}>Trusted by teams at</span>
        {names.map((n) => (
          <div key={n} style={{ padding: '6px 15px', background: 'white', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13, fontWeight: 600, color: 'var(--ink2)' }}>
            {n}
          </div>
        ))}
      </div>
    </div>
  )
}

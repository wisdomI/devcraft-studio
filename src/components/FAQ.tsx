import { useState } from 'react'
import { faqs } from '../content'
import { Label } from './Label'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" style={{ padding: '100px 28px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Label text="FAQ" />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 800, letterSpacing: -1, marginBottom: 44 }}>Common questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((f, i) => (
            <div
              key={f.q}
              style={{
                background: 'var(--white)',
                border: `1px solid ${open === i ? 'var(--blue-m)' : 'var(--border)'}`,
                borderRadius: 12,
                overflow: 'hidden',
                transition: 'border-color 0.2s',
                boxShadow: open === i ? 'var(--s1)' : 'none',
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '18px 22px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  color: 'var(--ink)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font)',
                  fontWeight: 600,
                  fontSize: 15,
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                {f.q}
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: open === i ? 'var(--blue)' : 'var(--bg2)',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s',
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      lineHeight: 1,
                      color: open === i ? 'white' : 'var(--ink2)',
                      transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                      display: 'block',
                      transition: 'transform 0.25s',
                    }}
                  >
                    +
                  </span>
                </div>
              </button>
              {open === i ? (
                <div style={{ padding: '0 22px 18px', color: 'var(--ink2)', fontSize: 14.5, lineHeight: 1.75, borderTop: '1px solid var(--border)', paddingTop: 14 }}>{f.a}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

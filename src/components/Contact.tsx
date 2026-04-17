import { useState, type ChangeEvent, type CSSProperties, type FormEvent } from 'react'
import { Label } from './Label'

const FORMSPREE_ID = 'xnjlddag' // Replace with your Formspree form ID

// https://formspree.io/f/xnjlddag

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', budget: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const set = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inp: CSSProperties = {
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '13px 16px',
    color: 'var(--ink)',
    fontFamily: 'var(--font)',
    fontSize: 14.5,
    outline: 'none',
    transition: 'border-color 0.2s,box-shadow 0.2s',
  }

  return (
    <section id="contact" style={{ padding: '100px 28px', background: 'var(--white)' }}>
      <div className="contact-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* ── Left column ── */}
        <div>
          <Label text="GET IN TOUCH" />
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(30px,4vw,50px)',
              fontWeight: 800,
              letterSpacing: -1,
              marginBottom: 18,
              lineHeight: 1.1,
            }}
          >
            Let&apos;s build
            <br />
            something great.
          </h2>
          <p style={{ fontSize: 16.5, color: 'var(--ink2)', lineHeight: 1.75, marginBottom: 40, maxWidth: 380 }}>
            Tell us about your business or organisation. We&apos;ll reply with next steps and a clear quote in Nigerian
            Naira.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {(
              [
                { icon: '', label: 'Email', val: 'studios.devcraft@gmail.com', href: 'mailto:studios.devcraft@gmail.com' },
                { icon: '', label: 'WhatsApp / Phone', val: '+234 705 321 6425', href: 'https://wa.me/+2347053216425' },
                { icon: '', label: 'Response time', val: 'Usually same day', href: null },
              ] as const
            ).map(({ icon, label, val, href }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: 'var(--blue-l)',
                    border: '1px solid var(--blue-m)',
                    borderRadius: 10,
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 18,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--ink3)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                    }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      style={{ fontSize: 14.5, color: 'var(--blue)', fontWeight: 600, marginTop: 2, textDecoration: 'none' }}
                    >
                      {val}
                    </a>
                  ) : (
                    <div style={{ fontSize: 14.5, color: 'var(--ink)', fontWeight: 500, marginTop: 2 }}>{val}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column ── */}
        <div>
          {status === 'success' ? (
            <div
              style={{
                background: 'var(--green-l)',
                border: '1px solid var(--green-m)',
                borderRadius: 18,
                padding: 52,
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 52, marginBottom: 18 }}>✅</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 26, marginBottom: 12 }}>
                Message received!
              </h3>
              <p style={{ color: 'var(--ink2)', fontSize: 15, lineHeight: 1.7 }}>
                We&apos;ll be in touch within 24 hours.
                <br />
                Check your inbox for a confirmation.
              </p>
            </div>
          ) : (
            <div
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: 36,
                boxShadow: 'var(--s2)',
              }}
            >
              {status === 'error' && (
                <div
                  style={{
                    background: '#fef2f2',
                    border: '1px solid #fca5a5',
                    borderRadius: 10,
                    padding: '12px 16px',
                    marginBottom: 16,
                    color: '#b91c1c',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  ⚠️ Something went wrong. Please try again or reach out via WhatsApp.
                </div>
              )}

              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="contact-form-row">
                  <input
                    name="name"
                    value={form.name}
                    onChange={set}
                    placeholder="Full name"
                    required
                    style={inp}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--blue)'
                      e.target.style.boxShadow = '0 0 0 3px var(--blue-m)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={set}
                    placeholder="Email address"
                    required
                    style={inp}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--blue)'
                      e.target.style.boxShadow = '0 0 0 3px var(--blue-m)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <select
                  name="type"
                  value={form.type}
                  onChange={set}
                  required
                  style={{ ...inp, color: form.type ? 'var(--ink)' : 'var(--ink3)' }}
                >
                  <option value="" disabled>Project type</option>
                  <option>Business / SME website</option>
                  <option>School or training centre</option>
                  <option>Church or non-profit</option>
                  <option>Startup or product launch</option>
                  <option>E‑commerce / shop</option>
                  <option>Website redesign</option>
                  <option>Custom / other</option>
                </select>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={set}
                  style={{ ...inp, color: form.budget ? 'var(--ink)' : 'var(--ink3)' }}
                >
                  <option value="" disabled>Budget range (optional, ₦)</option>
                  <option>₦100,000 — Professional (promo)</option>
                  <option>₦350,000 — Business</option>
                  <option>₦650,000 — Premium</option>
                  <option>Custom / not sure yet</option>
                </select>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={set}
                  placeholder="Tell us about your project — what you need, your timeline, and any other details."
                  rows={4}
                  style={{ ...inp, resize: 'vertical' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--blue)'
                    e.target.style.boxShadow = '0 0 0 3px var(--blue-m)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.boxShadow = 'none'
                  }}
                />

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    padding: '15px',
                    background: status === 'submitting' ? '#93c5fd' : 'var(--blue)',
                    color: 'white',
                    fontFamily: 'var(--font)',
                    fontWeight: 700,
                    fontSize: 15,
                    border: 'none',
                    borderRadius: 10,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 16px rgba(29,78,216,0.28)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'submitting') {
                      e.currentTarget.style.background = '#1e40af'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.boxShadow = '0 6px 24px rgba(29,78,216,0.38)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (status !== 'submitting') {
                      e.currentTarget.style.background = 'var(--blue)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(29,78,216,0.28)'
                    }
                  }}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
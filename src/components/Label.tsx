type Props = { text: string }

export function Label({ text }: Props) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--blue)',
        letterSpacing: 2.5,
        textTransform: 'uppercase',
        marginBottom: 14,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span style={{ width: 16, height: 2, background: 'var(--blue)', display: 'inline-block', borderRadius: 2 }} />
      {text}
    </div>
  )
}

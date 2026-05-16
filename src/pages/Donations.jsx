import { useState } from 'react'
import styles from './Donations.module.css'

const PRESETS = [10, 25, 50, 100]

const STATS = [
  { value: '$48,320', label: 'Raised so far' },
  { value: '1,204',   label: 'Donors' },
  { value: '7',       label: 'Disasters aided' },
]

export default function Donations() {
  const [amount, setAmount]   = useState(25)
  const [custom, setCustom]   = useState('')
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [card, setCard]       = useState('')
  const [expiry, setExpiry]   = useState('')
  const [cvv, setCvv]         = useState('')
  const [success, setSuccess] = useState(false)

  const displayAmount = custom || amount

  function handleSubmit(e) {
    e.preventDefault()
    setSuccess(true)
  }

  if (success) {
    return (
      <div className={styles.successWrap}>
        <div className={styles.successBox}>
          <span className={styles.successIcon}>✓</span>
          <h2 className={styles.successTitle}>Thank you, {name || 'donor'}.</h2>
          <p className={styles.successSub}>
            Your donation of <strong>${displayAmount}</strong> has been received.
            You'll get a confirmation at <strong>{email || 'your email'}</strong>.
          </p>
          <button className={styles.resetBtn} onClick={() => {
            setSuccess(false); setName(''); setEmail(''); setCard('')
            setExpiry(''); setCvv(''); setCustom(''); setAmount(25)
          }}>
            Donate again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <p className='label'>GYEC 2026</p>
        <h1 className={styles.title}>Every dollar reaches the ground.</h1>
        <p className={styles.desc}>
          Natural disasters devastate communities across Southeast Asia every year.
          Project ASAP connects donors directly with verified relief efforts —
          food, shelter, medical aid, and family reunification.
        </p>

        <div className={styles.stats}>
          {STATS.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.trustNote}>
          <span>🔒</span>
          <p>Payments are encrypted and secure. No funds are processed on this demo.</p>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <p className={styles.formLabel}>Select amount</p>
          <div className={styles.presets}>
            {PRESETS.map(p => (
              <button
                key={p}
                type='button'
                className={`${styles.preset} ${amount === p && !custom ? styles.presetActive : ''}`}
                onClick={() => { setAmount(p); setCustom('') }}
              >
                ${p}
              </button>
            ))}
          </div>
          <div className={styles.customWrap}>
            <span className={styles.customPrefix}>$</span>
            <input
              type='number'
              min='1'
              placeholder='Custom amount'
              value={custom}
              onChange={e => { setCustom(e.target.value); setAmount(null) }}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formSection}>
          <p className={styles.formLabel}>Your details</p>
          <input type='text' placeholder='Full name' value={name}
            onChange={e => setName(e.target.value)} className={styles.input} required />
          <input type='email' placeholder='Email address' value={email}
            onChange={e => setEmail(e.target.value)} className={styles.input} required />
        </div>

        <div className={styles.formSection}>
          <p className={styles.formLabel}>Payment info</p>
          <input
            type='text' placeholder='Card number' value={card} maxLength={19}
            onChange={e => setCard(e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim())}
            className={styles.input} required
          />
          <div className={styles.cardRow}>
            <input
              type='text' placeholder='MM / YY' value={expiry} maxLength={5}
              onChange={e => {
                const v = e.target.value.replace(/\D/g, '')
                setExpiry(v.length >= 3 ? v.slice(0, 2) + ' / ' + v.slice(2) : v)
              }}
              className={styles.input} required
            />
            <input
              type='text' placeholder='CVV' value={cvv} maxLength={3}
              onChange={e => setCvv(e.target.value.replace(/\D/g, ''))}
              className={styles.input} required
            />
          </div>
        </div>

        <button type='submit' className={styles.submitBtn}>
          Donate ${displayAmount || '—'}
        </button>
      </form>
    </div>
  )
}

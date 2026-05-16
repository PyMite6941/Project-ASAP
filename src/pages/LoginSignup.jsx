import { useState } from 'react'
import styles from './LoginSignup.module.css'

export default function LoginSignup() {
  const [mode, setMode]         = useState('login')
  const [name, setName]         = useState('')
  const [age, setAge]           = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm]   = useState('')
  const [success, setSuccess]   = useState(false)

  const isLogin = mode === 'login'

  function reset() {
    setName(''); setAge(''); setEmail(''); setPassword(''); setConfirm('')
  }

  function switchMode(next) {
    reset()
    setSuccess(false)
    setMode(next)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>

        <div className={styles.toggle}>
          <button
            type="button"
            className={`${styles.toggleBtn} ${isLogin ? styles.toggleActive : ''}`}
            onClick={() => switchMode('login')}
          >
            Log in
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn} ${!isLogin ? styles.toggleActive : ''}`}
            onClick={() => switchMode('signup')}
          >
            Sign up
          </button>
        </div>

        {success ? (
          <div className={styles.success}>
            <span className={styles.successIcon}>✓</span>
            <h2 className={styles.successTitle}>
              {isLogin ? 'Welcome back.' : "You're in."}
            </h2>
            <p className={styles.successSub}>
              {isLogin ? `Logged in as ${email}.` : `Account created for ${email}.`}
            </p>
            <button className={styles.resetBtn} onClick={() => { setSuccess(false); reset() }}>
              {isLogin ? 'Log in again' : 'Create another account'}
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.heading}>
              {isLogin ? 'Log in to Project ASAP' : 'Create your account'}
            </h2>

            {!isLogin && (
              <>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  className={styles.input}
                  type="number"
                  placeholder="Age"
                  value={age}
                  min="0"
                  onChange={e => setAge(e.target.value)}
                />
              </>
            )}

            <input
              className={styles.input}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />

            {!isLogin && (
              <input
                className={styles.input}
                type="password"
                placeholder="Confirm password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
              />
            )}

            <button type="submit" className={styles.submitBtn}>
              {isLogin ? 'Log in' : 'Create account'}
            </button>

            <p className={styles.switchHint}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                type="button"
                className={styles.switchLink}
                onClick={() => switchMode(isLogin ? 'signup' : 'login')}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

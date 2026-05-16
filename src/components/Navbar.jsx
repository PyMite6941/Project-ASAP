import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.wordmark}>Project ASAP</Link>

      {/* desktop links */}
      <ul className={styles.links}>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/find-people">Find People</Link></li>
        <li><Link to="/login" className={styles.loginBtn}>Sign up / Login</Link></li>
      </ul>

      {/* mobile hamburger */}
      <button
        className={styles.burger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={open ? styles.burgerLineTop : styles.burgerLine} />
        <span className={open ? styles.burgerLineMid : styles.burgerLine} />
        <span className={open ? styles.burgerLineBot : styles.burgerLine} />
      </button>

      {/* mobile drawer */}
      <ul className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <li><Link to="/donate" onClick={() => setOpen(false)}>Donate</Link></li>
        <li><Link to="/find-people" onClick={() => setOpen(false)}>Find People</Link></li>
        <li><Link to="/login" onClick={() => setOpen(false)} className={styles.loginBtn}>Sign up / Login</Link></li>
      </ul>
    </nav>
  )
}

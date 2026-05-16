import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.wordmark}>Project ASAP</Link>
      <ul className={styles.links}>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/find-people">Find People</Link></li>
        <li><Link to="/login" className={styles.loginBtn}>Sign up / Login</Link></li>
      </ul>
    </nav>
  )
}

import styles from './Section.module.css'

export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className={`${styles.wrapper} section`}>
      <hr />
      <div className={styles.header}>
        {label && <p className="label">{label}</p>}
        {title && <h2 className={styles.title}>{title}</h2>}
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </section>
  )
}

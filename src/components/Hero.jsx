import styles from './Hero.module.css';

export default function Hero() {
	return (
		<section className={`${styles.hero} section`}>
			<p className='label'>Est. 2026</p>
			<h1 className={styles.headline}>
				Project ASAP
				<br />
				<em>goes here.</em>
			</h1>
			<p className={styles.sub}>
				A short description of what this is and why it matters. One or two
				sentences max — keep it sharp.
			</p>
			<div className={styles.actions}>
				<button className={styles.btnPrimary}>Get started</button>
				<button className={styles.btnGhost}>Learn more</button>
			</div>
		</section>
	);
}

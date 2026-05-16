import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<hr />
			<div className={styles.inner}>
				<span className={styles.copy}>
					© {new Date().getFullYear()} Project ASAP. All rights reserved.
				</span>
				<span className={styles.built}>Built with React + Vite</span>
			</div>
		</footer>
	);
}

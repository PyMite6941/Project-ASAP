import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
	return (
		<section className={`${styles.hero} section`}>
			<p className='label'>Est. 2026</p>
			<h1 className={styles.headline}>
				<span className={styles.heroName}>Project ASAP</span>
				<br />
				<em>Immediate Project Recovery For All</em>
			</h1>
			<p className={styles.sub}>
				Many natural disasters happen across the globe, especially in Southeast
				Asia. This project works to alleviate the suffering from these events
				for everyone affected.
			</p>
			<div className={styles.actions}>
				<button
					className={styles.btnPrimary}
					onClick={() => (window.location.href = 'tel:+1234567890')}>
					Call our First Responders
				</button>
				<button className={styles.btnGhost}>Learn more</button>
			</div>
		</section>
	);
}

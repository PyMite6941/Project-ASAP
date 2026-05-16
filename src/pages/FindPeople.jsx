import { useState } from 'react';
import Section from '../components/Section';
import styles from './FindPeople.module.css';

export default function FindPeople() {
	const [missingPeople, setMissingPeople] = useState([
		{
			name: 'Jane Doe',
			address: '123 Main St, Anytown, USA',
			photo: '',
			age: 30,
			lastSeen: '2024-06-01',
		},
		{
			name: 'John Smith',
			address: '456 Oak Ave, Somewhere, USA',
			photo: '',
			age: 25,
			lastSeen: '2024-05-15',
		},
		{
			name: 'Alice Johnson',
			address: '789 Pine Rd, Elsewhere, USA',
			photo: '',
			age: 35,
			lastSeen: '2024-06-10',
		},
	]);
	return (
		<Section
			id='find-people'
			label='Find People'
			title='Find Missing People'>
			<div className={styles.grid}>
				{missingPeople.map((person, index) => (
					<div
						key={index}
						className={styles.card}>
						<h2>{person.name}</h2>
						<p>
							<strong>Last Known Location:</strong> {person.address}
						</p>
						{person.photo ? (
							<img
								src={person.photo}
								alt={`${person.name}'s photo`}
								className={styles.photo}
							/>
						) : (
							<div
								className={styles.photoPlaceholder}
								aria-label='No photo available'>
								<svg
									viewBox='0 0 80 80'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<circle
										cx='40'
										cy='28'
										r='16'
										fill='currentColor'
										opacity='0.5'
									/>
									<path
										d='M8 72c0-17.673 14.327-32 32-32s32 14.327 32 32'
										fill='currentColor'
										opacity='0.35'
									/>
								</svg>
							</div>
						)}
						<p>
							<strong>Age:</strong> {person.age}
						</p>
						<p>
							<strong>Last Seen:</strong> {person.lastSeen}
						</p>
					</div>
				))}
			</div>
			<br></br>
			<p>
				If you have any information about these individuals, please contact us
				immediately. Your help can make a difference in reuniting families and
				saving lives.
				<br></br>
				To report a missing person or provide information, please call our
				hotline at <strong>+1 (234) 567-8901</strong> or email us at
				<strong>missing@findpeople.com</strong>. We are available 24/7 to assist
				you.
				<br></br>
				Together, we can help bring hope and reunite families during these
				difficult times. Thank you for your support.
			</p>
		</Section>
	);
}

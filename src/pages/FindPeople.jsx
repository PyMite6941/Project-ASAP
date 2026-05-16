import { useState } from 'react';
import styles from './FindPeople.module.css';

export default function FindPeople() {
	const [missingPeople, setMissingPeople] = useState([
		{
			name: 'Jane Doe',
			address: '123 Main St, Anytown, USA',
			age: 30,
			lastSeen: '2024-06-01',
		},
		{
			name: 'John Smith',
			address: '456 Oak Ave, Somewhere, USA',
			age: 25,
			lastSeen: '2024-05-15',
		},
		{
			name: 'Alice Johnson',
			address: '789 Pine Rd, Elsewhere, USA',
			age: 35,
			lastSeen: '2024-06-10',
		},
	]);
	return (
		<section className='find-people'>
			<h1>Find Missing People</h1>
			<div className={styles.grid}>
				{missingPeople.map((person, index) => (
					<div
						key={index}
						className={styles.card}>
						<h2>{person.name}</h2>
						<p>
							<strong>Last Known Location:</strong> {person.address}
						</p>
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
			</p>
			<br></br>
			<p>
				To report a missing person or provide information, please call our
				hotline at <strong>+1 (234) 567-8901</strong> or email us at{' '}
				<strong>missing@findpeople.com</strong>. We are available 24/7 to assist
				you.
			</p>
			<br></br>
			<p>
				Together, we can help bring hope and reunite families during these
				difficult times. Thank you for your support.
			</p>
		</section>
	);
}

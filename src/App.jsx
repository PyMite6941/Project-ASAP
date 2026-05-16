import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import LoginSignup from './pages/LoginSignup';
import Donations from './pages/Donations';
import FindPeople from './pages/FindPeople';
import Contacts from './pages/Contacts';

function Home() {
	return (
		<>
			<Hero />

			<main>
				<Section
					id='about'
					label='About'
					title='What this is about.'>
					<p>
						This project is not about making money off of natural disasters, but
						empowerment and recovery for everyone affected. We work to provide
						resources and support to those in need, and to connect natural
						disaster survivors with first responders and volunteers who can help
						them.
					</p>
				</Section>

				<Section
					id='work'
					label='Work'
					title="Things we've made.">
					<p>
						Drop a card grid, image gallery, or feature list here. The Section
						component gives you a label, heading, and body slot.
					</p>
				</Section>

				<Section
					id='contact'
					label='Contact'
					title="Let's talk.">
					<p>
						Have questions about our relief efforts, want to volunteer, or need
						help connecting with resources? Reach out — we respond within 24
						hours.
					</p>
					<p style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', opacity: 0.7 }}>
						info@projectasap.org
					</p>
					<a
						href='mailto:info@projectasap.org?subject=Project%20ASAP%20Inquiry'
						className='btn'
						style={{ marginTop: '1.25rem' }}
					>
						Send us an email
					</a>
				</Section>
			</main>
		</>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/login'
					element={<LoginSignup />}
				/>
				<Route
					path='/donate'
					element={<Donations />}
				/>
				<Route
					path='/find-people'
					element={<FindPeople />}
				/>
				<Route
					path='/contacts'
					element={<Contacts />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

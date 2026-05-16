import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import LoginSignup from './pages/LoginSignup';
import Donations from './pages/Donations';
import FindPeople from './pages/FindPeople';

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
					<p>Email us by pressing this button.</p>
					<a
						href='mailto:info@projectasap.org'
						style={{
							display: 'inline-block',
							marginTop: '1rem',
							padding: '0.75rem 1.8rem',
							background: 'var(--hero-color)',
							color: 'var(--on-accent)',
							fontFamily: 'var(--font-mono)',
							fontSize: '0.72rem',
							letterSpacing: '0.1em',
							textTransform: 'uppercase',
							borderRadius: '2px',
							textDecoration: 'none',
						}}
					>
						Email us
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
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

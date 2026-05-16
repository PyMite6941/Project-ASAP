import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import LoginSignup from './pages/LoginSignup';
import Donations from './pages/Donations';

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
						Replace this with your actual content. This section pattern is
						reusable — pass any JSX as children. Add cards, grids, images, or
						whatever the feature needs. The layout stays full-width and
						consistent.
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
					<p>A form, email link, or social links live here.</p>
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

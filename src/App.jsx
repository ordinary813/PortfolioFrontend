import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import SlideIn from './components/SlideIn';
import TokenGate from './components/TokenGate';

const App = () => {
	const [isUnlocked, setIsUnlocked] = useState(false);

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const token = searchParams.get('token');

		if (token) {
			fetch(`${API_BASE_URL}/api/validate-token`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ token }),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.valid) {
						setIsUnlocked(true);
						window.history.replaceState({}, '', window.location.pathname);
					}
				})
				.catch((error) => {
					console.error('Error validating token from URL:', error);
				});
		}
	}, []);

	useEffect(() => {
		if (isUnlocked) {
			const timer = setTimeout(() => {
				setIsUnlocked(false);
			}, 15 * 60 * 1000); // Lock after 15 minutes
			return () => clearTimeout(timer);
		}
	}, [isUnlocked]);

	return isUnlocked ? (
		<div className="min-h-screen w-full bg-gray-50">
			<Navbar />
			<SlideIn>
				<Hero />
			</SlideIn>
			<SlideIn direction="up">
				<Projects />
			</SlideIn>
			<SlideIn direction="up">
				<About />
			</SlideIn>
			<SlideIn direction="up">
				<TechStack />
			</SlideIn>
			<SlideIn direction="up">
				<Contact />
			</SlideIn>
		</div>
	) : (
		<TokenGate onUnlock={() => setIsUnlocked(true)} />
	);
};

export default App;
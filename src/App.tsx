import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Faq from './pages/FAQ';
import News from './pages/News';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Home from './pages/Home';
import Main from './layouts/Main';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Main />}>
					<Route index element={<Home />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='/faq' element={<Faq />} />
					<Route path='/news' element={<News />} />
					<Route path='/pricing' element={<Pricing />} />
					<Route path='/services' element={<Services />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

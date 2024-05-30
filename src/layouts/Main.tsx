import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
	return (
		<div className='container mx-auto'>
			<header className='mb-5'>
				<Navbar />
			</header>
			<main className='mx-5'>
				<Outlet />
			</main>
		</div>
	);
};

export default Main;

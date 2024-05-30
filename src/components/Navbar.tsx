import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="flex flex-row px-5 py-10 bg-slate-100">
			<div>
				<Link to="/">
					<p className="text-3xl font-bold">v360x</p>
				</Link>
			</div>
			<div className="flex-grow"></div>
			<div>
				<ul className="flex flex-row space-x-6 text-sm font-bold">
					<li>
						<Link to="/services">Services</Link>
					</li>
					<li>
						<Link to="/pricing">Pricing</Link>
					</li>
					<li>
						<Link to="/news">News</Link>
					</li>
					<li>
						<Link to="/about-us">About us</Link>
					</li>
					<li>
						<Link to="/faq">FAQ</Link>
					</li>
					<li>
						<Link to="/contact-us">Contact Us</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul className="flex flex-row ml-5 space-x-2 text-lg">
					<li>
						<Link to="/">
							<div className="rounded-full text-center" style={{ border: '1px solid black', width: '32px', height: '32px' }}>
								<FontAwesomeIcon icon={faInstagram} />
							</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<div className="rounded-full text-center" style={{ border: '1px solid black', width: '32px', height: '32px' }}>
								<FontAwesomeIcon icon={faFacebookF} />
							</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<div className="rounded-full text-center" style={{ border: '1px solid black', width: '32px', height: '32px' }}>
								<FontAwesomeIcon icon={faLinkedinIn} />
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

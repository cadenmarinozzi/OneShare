import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCog } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="header">
			<FontAwesomeIcon size="lg" icon={faCreditCard} />
			<Link to="/">
				<h1>OneShare</h1>
			</Link>
			<FontAwesomeIcon size="lg" icon={faCog} />
		</div>
	);
}

export default Header;

import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<>
		<nav className="desktopNav">
			<ul className="linksList">
				<li><NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Home</NavLink></li>
				<li><NavLink to="/programs" className={({ isActive }) => isActive ? "selected" : ""}>Programs</NavLink></li>
				<li><NavLink to="/schedule" className={({ isActive }) => isActive ? "selected" : ""}>Schedule</NavLink></li>
				<li><NavLink to="/contact" className={({ isActive }) => isActive ? "selected" : ""}>Contact</NavLink></li>
			</ul>
		</nav>
		<nav className="mobileNav">
			<ul className='linksList'>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>H</NavLink></li>
				<li><NavLink to="/programs" className={({ isActive }) => isActive ? "selected" : ""}>P</NavLink></li>
				<li><NavLink to="/schedule" className={({ isActive }) => isActive ? "selected" : ""}>S</NavLink></li>
				<li><NavLink to="/contact" className={({ isActive }) => isActive ? "selected" : ""}>C</NavLink></li>
			</ul>
		</nav>
		</>
	);
};

export default NavBar;

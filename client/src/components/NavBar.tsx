import { NavLink } from "react-router-dom";
import { House, Calendar, BookOpenText, Phone } from "lucide-react"

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
        <li><NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}><House size={30}/></NavLink></li>
				<li><NavLink to="/programs" className={({ isActive }) => isActive ? "selected" : ""}><BookOpenText size={30}/></NavLink></li>
				<li><NavLink to="/schedule" className={({ isActive }) => isActive ? "selected" : ""}><Calendar size={30}/></NavLink></li>
				<li><NavLink to="/contact" className={({ isActive }) => isActive ? "selected" : ""}><Phone size={30}/></NavLink></li>
			</ul>
		</nav>
		</>
	);
};

export default NavBar;

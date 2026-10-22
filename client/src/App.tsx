import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";

const App = () => {
	const location = useLocation();
	console.log("Current route:", location.pathname);
	return (
		<>
			<NavBar />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/programs" element={<Programs />} />
				<Route path="/schedule" element={<Schedule />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

			<Footer />
		</>
		
	);
}

export default App
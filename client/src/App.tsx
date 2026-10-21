import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<NavBar />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/programs" element={<Programs />} />
			</Routes>

			<Footer />
		</>
		
	);
}

export default App
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import "./index.css";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);
	return loading ? (
		<Loading />
	) : (
		<Routes>
			<Route path="/home" element={<Home />} />
		</Routes>
	);
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
	return (
		<div style={{ width: "95vw", height: "90vh" }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

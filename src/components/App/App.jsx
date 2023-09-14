import "./App.css";
import { Main, NotFound, Movies, SavedMovies, Profile, Login, Register } from "./index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='*'
					element={<NotFound />}
				/>
				<Route
					path='/'
					element={<Main />}
				/>
				<Route
					path='/movies'
					element={<Movies />}
				/>
				<Route
					path='/saved-movies'
					element={<SavedMovies />}
				/>
				<Route
					path='/profile'
					element={<Profile />}
				/>
				<Route
					path='/sign-in'
					element={<Login />}
				/>
				<Route
					path='/sign-up'
					element={<Register />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;

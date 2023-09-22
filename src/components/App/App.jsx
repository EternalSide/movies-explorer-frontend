import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, NotFound, Movies, SavedMovies, Profile, Login, Register } from "./index.js";

import CurrentUserContext from "contexts/CurrentUserContext";

import useApi from "hooks/useApi";
import { getAllMovies } from "utils/api/MoviesApi";

import Preloader from "components/Movies/components/Preloader/Preloader";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";
import AuthRoute from "components/AuthRoute/AuthRoute";

const App = () => {
	const token = localStorage.getItem("token");
	const api = useApi(token);

	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// Единное хранилище фильмов
	const [allMovies, setAllMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);

	// Фильмы на рендер /saved-movies
	const [savedMoviesSearch, setSavedMoviesSearch] = useState(null);

	// Фильмы на рендер /movies
	const movies = JSON.parse(localStorage.getItem("searchResults"));
	const shortMovies = JSON.parse(localStorage.getItem("searchResultsShort"));
	const checked = Boolean(localStorage.getItem("checked"));
	const [searchMovies, setSearchMovies] = useState((checked ? shortMovies : movies) || []);

	useEffect(() => {
		if (token) {
			const getInitialData = async () => {
				try {
					const user = await api.getUserInfo(token);

					if (user) {
						setCurrentUser({
							...user,
						});

						const savedMoviesData = await api.getSavedMovies();

						setSavedMovies(savedMoviesData.reverse());
					}
				} catch (error) {
					console.log("С токеном что-то не так,", error);
				} finally {
					setIsLoading(false);
				}
			};
			getInitialData();
		}
		if (!token) {
			setIsLoading(false);
		}
	}, [token, api]);

	const deleteMovie = async (e, movieId) => {
		try {
			e.stopPropagation();

			const deletedMovie = await api.deleteMovie(movieId);

			if (deletedMovie) {
				const updatedSavedMovies = [...savedMovies.filter((item) => item.movieId !== movieId)];
				setSavedMovies(updatedSavedMovies);
				setSavedMoviesSearch([...savedMoviesSearch.filter((item) => item.movieId !== movieId)]);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const saveMovie = async (e, data) => {
		try {
			e.stopPropagation();
			const imageLink = `https://api.nomoreparties.co/${data.image.url}`;

			const savedMovie = await api.saveMovie({
				country: data.country,
				director: data.director,
				duration: data.duration,
				year: data.year,
				description: data.description,
				image: imageLink,
				thumbnail: imageLink,
				trailerLink: data.trailerLink,
				movieId: data.id,
				nameRU: data.nameRU,
				nameEN: data.nameEN,
			});

			const updatedArray = [savedMovie, ...savedMovies];
			setSavedMovies(updatedArray);
			setSavedMoviesSearch(null);
		} catch (error) {
			console.log(error);
		}
	};

	if (isLoading) {
		return (
			<section className='app__loading'>
				<Preloader />
			</section>
		);
	}

	return (
		<CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
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
						element={
							<ProtectedRoute>
								<Movies
									allMovies={allMovies}
									setAllMovies={setAllMovies}
									savedMovies={savedMovies}
									searchMovies={searchMovies}
									setSearchMovies={setSearchMovies}
									saveMovie={saveMovie}
									deleteMovie={deleteMovie}
								/>
							</ProtectedRoute>
						}
					/>
					<Route
						path='/saved-movies'
						element={
							<ProtectedRoute>
								<SavedMovies
									savedMovies={savedMovies}
									savedMoviesSearch={savedMoviesSearch}
									setSavedMoviesSearch={setSavedMoviesSearch}
									deleteMovie={deleteMovie}
								/>
							</ProtectedRoute>
						}
					/>

					<Route
						path='/profile'
						element={
							<ProtectedRoute>
								<Profile changeUserInfo={api.changeUserInfo} />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/sign-in'
						element={
							<AuthRoute>
								<Login
									getUserInfo={api.getUserInfo}
									loginUser={api.loginUser}
								/>
							</AuthRoute>
						}
					/>
					<Route
						path='/sign-up'
						element={
							<AuthRoute>
								<Register
									registerUser={api.registerUser}
									loginUser={api.loginUser}
								/>
							</AuthRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</CurrentUserContext.Provider>
	);
};

export default App;

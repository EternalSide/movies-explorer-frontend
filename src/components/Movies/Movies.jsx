import "./Movies.css";
import { Header, Footer } from "components/Main";

import MoviesCardList from "./components/MoviesCardList/MoviesCardList";
import SearchForm from "./components/SearchForm/SearchForm";
import { useState } from "react";

const Movies = ({ allMovies, setAllMovies, searchMovies, setSearchMovies, saveMovie, savedMovies, deleteMovie }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [serverError, setServerError] = useState(null);

	return (
		<>
			<Header />
			<main className='movies__container'>
				<SearchForm
					allMovies={allMovies}
					setAllMovies={setAllMovies}
					searchMovies={searchMovies}
					setSearchMovies={setSearchMovies}
					setIsLoading={setIsLoading}
					setServerError={setServerError}
				/>
				<MoviesCardList
					data={searchMovies}
					savedMovies={savedMovies}
					isLoading={isLoading}
					serverError={serverError}
					deleteMovie={deleteMovie}
					saveMovie={saveMovie}
				/>
			</main>
			<Footer />
		</>
	);
};
export default Movies;

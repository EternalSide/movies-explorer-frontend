import "./SavedMovies.css";
import Header from "components/Header/Header";
import { Footer } from "components/Main";
import SavedMoviesForm from "./components/SavedMoviesForm/SavedMoviesForm";
import SavedMoviesList from "./components/SavedMoviesList/SavedMoviesList";

const SavedMovies = ({ savedMovies, deleteMovie, savedMoviesSearch, setSavedMoviesSearch }) => {
	return (
		<>
			<Header />
			<main className='savedmovies__container'>
				<SavedMoviesForm
					searchData={savedMovies}
					setSavedMoviesSearch={setSavedMoviesSearch}
				/>
				<SavedMoviesList
					savedMovies={savedMovies}
					searchResults={savedMoviesSearch}
					deleteMovie={deleteMovie}
				/>
			</main>
			<Footer />
		</>
	);
};
export default SavedMovies;

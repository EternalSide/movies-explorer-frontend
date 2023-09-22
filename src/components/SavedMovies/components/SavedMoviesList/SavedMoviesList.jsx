import MoviesCard from "components/Movies/components/MoviesCard/MoviesCard";
import "./SavedMoviesList.css";

const SavedMoviesList = ({ savedMovies, searchResults, deleteMovie }) => {
	const zeroResults = savedMovies?.length === 0 || searchResults?.length === 0;

	const isUserSearched = searchResults !== null;

	if (zeroResults)
		return (
			<section className='savedMoviesList'>
				<div className='savedMoviesList__center'>
					<p>Ничего не найдено.</p>
				</div>
			</section>
		);

	return (
		<section className='savedMoviesList'>
			<div className={`savedMoviesList__container`}>
				{isUserSearched ? (
					<>
						{searchResults?.map((movie) => {
							return (
								<MoviesCard
									key={movie.nameEN || movie.nameRU}
									data={movie}
									isMovieSaved={true}
									isSavedPage={true}
									deleteMovie={deleteMovie}
								/>
							);
						})}
					</>
				) : (
					<>
						{savedMovies?.map((movie) => {
							return (
								<MoviesCard
									key={movie.nameEN}
									data={movie}
									isMovieSaved={true}
									isSavedPage={true}
									deleteMovie={deleteMovie}
								/>
							);
						})}
					</>
				)}
			</div>
		</section>
	);
};
export default SavedMoviesList;

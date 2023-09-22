import "./MoviesCard.css";
import { convertDuration } from "utils/convertDuration";

const MoviesCard = ({ data, isSavedPage, isMovieSaved, deleteMovie, saveMovie }) => {
	const convertedTime = convertDuration(data.duration);

	return (
		<div
			className='movie'
			onClick={() => window.open(data.trailerLink)}
		>
			<div className='movie__info'>
				<h3 className='movie__title'>{data.nameRU}</h3>
				<p className='movie__time'>{convertedTime}</p>
			</div>
			<img
				className='movie__poster'
				src={isSavedPage ? data.image : `https://api.nomoreparties.co/${data?.image.url}`}
				alt={data.nameRU || data.nameEN}
			/>
			{isSavedPage ? (
				<button
					onClick={(e) => deleteMovie(e, data.movieId)}
					type='button'
					className='movie__button'
				>
					✖
				</button>
			) : (
				<>
					{isMovieSaved ? (
						<button
							onClick={(e) => deleteMovie(e, data.id)}
							type='button'
							className='movie__button movie__button_saved'
						>
							✓
						</button>
					) : (
						<button
							onClick={(e) => saveMovie(e, data)}
							type='button'
							className='movie__button'
						>
							Сохранить
						</button>
					)}
				</>
			)}
		</div>
	);
};
export default MoviesCard;

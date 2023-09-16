import "./MoviesCard.css";

const MoviesCard = ({ title, image, isMovieSaved, isSavedPage }) => {
	return (
		<div className='movie'>
			<div className='movie__info'>
				<h3 className='movie__title'>{title}</h3>
				<p className='movie__time'>0ч 42м</p>
			</div>
			<img
				className='movie__poster'
				src={image}
				alt={title}
			/>
			{isSavedPage ? (
				<button
					type='button'
					className='movie__button'
				>
					✖
				</button>
			) : (
				<>
					{isMovieSaved ? (
						<button
							type='button'
							className='movie__button movie__button_saved'
						>
							✓
						</button>
					) : (
						<button
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

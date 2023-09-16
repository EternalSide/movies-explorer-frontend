import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
const MoviesCardList = ({ data, isSavedPage }) => {
	return (
		<section className='moviesCardList'>
			<div className='moviesCardList__container'>
				{data?.map((movie) => (
					<MoviesCard
						key={movie.id}
						title={movie.title}
						image={movie.image}
						isMovieSaved={movie.saved}
						isSavedPage={isSavedPage}
					/>
				))}
			</div>
			<button className='moviesCardList__button'>Еще</button>
		</section>
	);
};
export default MoviesCardList;

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

import useResize from "hooks/useResize";
import useLoad from "hooks/useLoad";
import useCards from "hooks/useCards";
import { useEffect, useState } from "react";

const MoviesCardList = ({ data, deleteMovie, saveMovie, savedMovies, isLoading, serverError }) => {
	// Ошибки, не найдено, Загрузка
	const isFirstSearch = !localStorage.getItem("searchResults");
	const zeroResults = data?.length === 0 && !isFirstSearch && !isLoading && !serverError;
	const beforeSearch = zeroResults || isLoading || serverError;

	// Отрисовка в зависимости от ширины
	const { allWidth, mediumWidth, mobileWidth, windowWidth } = useResize();

	const [dataLengthToShowButton, setDataLengthToShowButton] = useState(0);

	useEffect(() => {
		if (mobileWidth) return setDataLengthToShowButton(5);
		if (mediumWidth) return setDataLengthToShowButton(8);
		if (allWidth) return setDataLengthToShowButton(12);
	}, [data]);

	//Сколько фильмов подгружать при нажатии на кнопку
	const { numCardsToLoad } = useLoad({ mobileWidth, mediumWidth, allWidth, windowWidth });

	// Обновление массива с фильмами
	const { loadMoreCards, cards, arrayIndex } = useCards({ data, allWidth, mediumWidth, mobileWidth, numCardsToLoad });
	const cardsEnded = arrayIndex < data?.length;

	if (beforeSearch)
		return (
			<section className='moviesCardList'>
				<div className='moviesCardList__center'>
					{isLoading && <Preloader />}
					{zeroResults && <p>Ничего не найдено.</p>}
					{serverError && <p className='moviesCardList__error'>{serverError}</p>}
				</div>
			</section>
		);

	return (
		<section className='moviesCardList'>
			<div className={`moviesCardList__container`}>
				{dataLengthToShowButton ? (
					<>
						{cards?.map((movie) => {
							const isMovieSaved = savedMovies?.some((item) => item.movieId === movie.id);
							return (
								<MoviesCard
									key={movie.id}
									data={movie}
									isMovieSaved={isMovieSaved}
									isSavedPage={false}
									deleteMovie={deleteMovie}
									saveMovie={saveMovie}
								/>
							);
						})}
					</>
				) : (
					<>
						{data?.map((movie) => {
							const isMovieSaved = savedMovies?.some((item) => item.movieId === movie.id);
							return (
								<MoviesCard
									key={movie.id}
									data={movie}
									isMovieSaved={isMovieSaved}
									isSavedPage={false}
									deleteMovie={deleteMovie}
									saveMovie={saveMovie}
								/>
							);
						})}
					</>
				)}
			</div>
			{!isLoading && dataLengthToShowButton && cardsEnded && (
				<button
					onClick={loadMoreCards}
					className='moviesCardList__button'
				>
					Еще
				</button>
			)}
		</section>
	);
};
export default MoviesCardList;

import MoviesCardList from "components/Movies/components/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import Header from "components/Header/Header";
import SearchForm from "components/Movies/components/SearchForm/SearchForm";
import { faker } from "@faker-js/faker";
import { Footer } from "components/Main";

const SavedMovies = () => {
	const fakeMovies = Array.from({ length: 8 }, (_, index) => ({
		id: index + 1,
		title: faker.music.songName(),
		image: faker.image.avatar(),
	}));
	return (
		<>
			<Header />
			<main className='savedmovies__container'>
				<SearchForm />
				<MoviesCardList
					data={fakeMovies}
					isMovieSaved={true}
					isSavedPage={true}
				/>
			</main>
			<Footer />
		</>
	);
};
export default SavedMovies;

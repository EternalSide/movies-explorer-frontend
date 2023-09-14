import Header from "components/Header/Header";
import "./Movies.css";
import MoviesCardList from "./components/MoviesCardList/MoviesCardList";
import SearchForm from "./components/SearchForm/SearchForm";
import { faker } from "@faker-js/faker";
import { Footer } from "components/Main";

const Movies = () => {
	const fakeMovies = Array.from({ length: 12 }, (_, index) => ({
		id: index + 1,
		title: faker.music.songName(),
		image: faker.image.url(),
		saved: index % 2 === 1 ? true : false,
	}));
	return (
		<>
			<Header />
			<main className='movies__container'>
				<SearchForm />
				<MoviesCardList data={fakeMovies} />
			</main>
			<Footer />
		</>
	);
};
export default Movies;

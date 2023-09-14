import { AboutProject, Promo, Techs, AboutMe, Portfolio, Header, Footer } from "./index";
const Main = () => {
	return (
		<>
			<Header />
			<Promo />
			<main>
				<AboutProject />
				<Techs />
				<AboutMe />
				<Portfolio />
			</main>
			<Footer />
		</>
	);
};
export default Main;

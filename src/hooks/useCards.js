import { useEffect, useState } from "react";

const useCards = ({ data, mobileWidth, numCardsToLoad }) => {
	const [cards, setCards] = useState([]);
	const [arrayIndex, setArrayIndex] = useState(mobileWidth ? 5 : 12);

	useEffect(() => {
		setCards(mobileWidth ? data?.slice(0, 5) : data?.slice(0, 12));
	}, [data, mobileWidth]);

	const loadMoreCards = () => {
		const newMovies = data?.slice(arrayIndex, arrayIndex + numCardsToLoad);
		const updatedArray = [...cards, ...newMovies];
		setCards(updatedArray);
		setArrayIndex((prev) => prev + numCardsToLoad);
	};

	return { loadMoreCards, cards, arrayIndex };
};
export default useCards;

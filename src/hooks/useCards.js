import { useEffect, useState } from "react";

const useCards = ({ data, mobileWidth, mediumWidth, allWidth, numCardsToLoad }) => {
	const [cards, setCards] = useState([]);

	const [arrayIndex, setArrayIndex] = useState(0);

	useEffect(() => {
		if (mobileWidth) setArrayIndex(5);
		if (mediumWidth) setArrayIndex(8);
		if (allWidth) setArrayIndex(12);
	}, [data]);

	useEffect(() => {
		if (mobileWidth) setCards(data?.slice(0, 5));
		if (mediumWidth) setCards(data?.slice(0, 8));
		if (allWidth) setCards(data?.slice(0, 12));
	}, [data]);

	const loadMoreCards = () => {
		const newMovies = data?.slice(arrayIndex, arrayIndex + numCardsToLoad);
		const updatedArray = [...cards, ...newMovies];
		setCards(updatedArray);
		setArrayIndex((prev) => prev + numCardsToLoad);
	};

	return { loadMoreCards, cards, arrayIndex };
};
export default useCards;

import { useCallback, useEffect, useState } from "react";

const useLoad = ({ mobileWidth, mediumWidth, allWidth, windowWidth }) => {
	const [numCardsToLoad, setNumCardsToLoad] = useState(0);
	const updateCardCounts = useCallback(() => {
		if (allWidth) {
			setNumCardsToLoad(3);
		} else if (mediumWidth) {
			setNumCardsToLoad(2);
		} else if (mobileWidth) {
			setNumCardsToLoad(2);
		}
	}, [allWidth, mediumWidth, mobileWidth, setNumCardsToLoad]);

	useEffect(() => {
		updateCardCounts();
	}, [windowWidth, updateCardCounts]);

	return { numCardsToLoad };
};
export default useLoad;

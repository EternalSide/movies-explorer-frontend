import { useCallback, useEffect, useState } from "react";

const useLoad = ({ windowWidth, mobileWidth }) => {
	const [numCardsToLoad, setNumCardsToLoad] = useState(0);
	const updateCardCounts = useCallback(() => {
		if (windowWidth >= 1280) {
			setNumCardsToLoad(3);
		} else if (windowWidth >= 768) {
			setNumCardsToLoad(2);
		} else if (mobileWidth) {
			setNumCardsToLoad(5);
		}
	}, [windowWidth, setNumCardsToLoad, mobileWidth]);

	useEffect(() => {
		updateCardCounts();
	}, [windowWidth, updateCardCounts]);

	return { numCardsToLoad };
};
export default useLoad;

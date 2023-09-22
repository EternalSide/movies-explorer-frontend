import { useEffect, useState } from "react";

const useResize = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const mobileWidth = windowWidth >= 320 && windowWidth < 672;
	const mediumWidth = windowWidth >= 672;
	const allWidth = windowWidth >= 1280;

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { mobileWidth, mediumWidth, allWidth, windowWidth };
};
export default useResize;

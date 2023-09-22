import { useEffect, useState } from "react";

const useResize = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const mobileWidth = windowWidth >= 320 && windowWidth <= 480;

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { windowWidth, mobileWidth };
};
export default useResize;

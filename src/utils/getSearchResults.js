import { getAllMovies } from "./api/MoviesApi";
const SERVER_ERROR_MESSAGE =
	"Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

const handleSearch = (data, value) => {
	return data.filter((item) => {
		const matchedResults = item.nameRU.toLowerCase().includes(value) || item.nameEN.toLowerCase().includes(value);
		if (matchedResults) return item;
		return null;
	});
};

const handleSearchChecked = (data, setResults) => {
	const checkedResults = data.filter((item) => {
		if (item.duration <= 40) return item;
		return null;
	});
	setResults(checkedResults);
	localStorage.setItem("searchResultsShort", JSON.stringify(checkedResults));
	return checkedResults;
};

export const getSearchResults = ({ values, searchData, setResults, isChecked }) => {
	const value = values.value.toLowerCase().trim();
	localStorage.setItem("lastSearchValue", value);

	const results = handleSearch(searchData, value);

	if (isChecked) return handleSearchChecked(results, setResults);

	setResults(results);
	localStorage.setItem("searchResults", JSON.stringify(results));
};

export const getSearchResultsFirst = async ({
	values,
	setResults,
	setSearchData,
	isChecked,
	setIsLoading,
	setServerError,
	setIsFirstSearch,
}) => {
	try {
		setIsLoading(true);
		setServerError(null);

		const value = values.value.toLowerCase().trim();
		const allMoviesData = await getAllMovies();

		setSearchData(allMoviesData);

		const results = handleSearch(allMoviesData, value);

		localStorage.setItem("lastSearchValue", value);

		if (isChecked) return handleSearchChecked(results, setResults);

		setResults(results);
		localStorage.setItem("searchResults", JSON.stringify(results));

		setIsFirstSearch(false);
	} catch (error) {
		setServerError(SERVER_ERROR_MESSAGE);
	} finally {
		setIsLoading(false);
	}
};

export const getSearchResultsSaved = ({ values, searchData, setResults, isChecked }) => {
	const value = values.value.toLowerCase().trim();

	const results = searchData.filter((item) => {
		const matchedResults = item.nameRU.toLowerCase().includes(value) || item.nameEN.toLowerCase().includes(value);
		if (matchedResults) return item;
		return null;
	});

	if (isChecked) {
		const checkedResults = results.filter((item) => {
			if (item.duration <= 40) return item;
			return null;
		});
		setResults(checkedResults);
		localStorage.setItem("savedResults", JSON.stringify(checkedResults));
	} else {
		setResults(results);
		localStorage.setItem("savedResults", JSON.stringify(results));
	}
};

// Checkbox
const handleCheckedResults = (data, isChecked) => {
	return data.filter((item) => {
		if (isChecked) {
			if (item.duration <= 40) return item;
		} else {
			return item;
		}
	});
};

export const getSearchResultsChecked = ({ isChecked, setResults }) => {
	const searchData = JSON.parse(localStorage.getItem("searchResults"));
	if (!searchData) return null;

	const results = handleCheckedResults(searchData, isChecked);
	setResults(results);

	localStorage.setItem("searchResultsShort", JSON.stringify(results));
};

export const getSearchResultsCheckedsSaved = ({ searchData, savedMoviesSearch, isChecked, setResults }) => {
	const results = handleCheckedResults(searchData, isChecked);
	setResults(results);
};

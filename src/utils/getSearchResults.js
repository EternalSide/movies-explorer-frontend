export const getSearchResults = async ({ values, searchData, setResults, isChecked, setIsLoading, setServerError }) => {
	try {
		setIsLoading(true);
		setServerError(null);

		const value = values.value.toLowerCase().trim();
		// Все найденные фильмы не учитывая чекбокса
		const results = searchData.filter((item) => {
			const matchedResults = item.nameRU.toLowerCase().includes(value) || item.nameEN.toLowerCase().includes(value);
			if (matchedResults) return item;
			return null;
		});

		localStorage.setItem("lastSearchValue", value);

		if (isChecked) {
			const checkedResults = results.filter((item) => {
				if (item.duration <= 40) return item;
				return null;
			});
			setResults(checkedResults);
			localStorage.setItem("searchResultsShort", JSON.stringify(checkedResults));
		} else {
			setResults(results);
		}

		localStorage.setItem("searchResults", JSON.stringify(results));
	} catch (error) {
		setServerError(
			"Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
		);
	} finally {
		setIsLoading(false);
	}
};

export const getSearchResultsChecked = async ({ isChecked, setResults }) => {
	try {
		// Единное хранилище  которое фильтруется
		const searchData = JSON.parse(localStorage.getItem("searchResults"));

		if (!searchData) return null;

		const results = searchData.filter((item) => {
			if (isChecked) {
				if (item.duration <= 40) return item;
			} else {
				return item;
			}
		});

		setResults(results);

		localStorage.setItem("searchResultsShort", JSON.stringify(results));
	} catch (error) {
		console.log(error);
	}
};

export const getSearchResultsCheckedsSaved = async ({ searchData, isChecked, setResults }) => {
	try {
		const results = searchData.filter((item) => {
			if (isChecked) {
				if (item.duration <= 40) return item;
			} else {
				return item;
			}
		});

		setResults(results);
	} catch (error) {
		console.log(error);
	}
};
export const getSearchResultsSaved = async ({ values, searchData, setResults, isChecked }) => {
	try {
		const value = values.value.toLowerCase().trim();
		// Все найденные фильмы не учитывая чекбокса
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
		} else {
			setResults(results);
		}
	} catch (error) {
		console.log(error);
	}
};

export const clearUserData = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("searchResults");
	localStorage.removeItem("searchResultsShort");
	localStorage.removeItem("lastSearchValue");
	localStorage.removeItem("checked");
	localStorage.removeItem("checkedOnSaved");
};

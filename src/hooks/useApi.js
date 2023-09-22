import Api from "utils/api/MainApi";

const { useMemo } = require("react");

const useApi = (token) => {
	const api = useMemo(() => {
		return new Api({
			baseUrl: "https://api.eternal.nomoredomainsicu.ru",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`,
			},
		});
	}, [token]);

	return api;
};

export default useApi;

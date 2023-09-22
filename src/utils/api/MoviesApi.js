const baseUrl = "https://api.nomoreparties.co";

const headers = { "Content-Type": "application/json" };

const checkRes = (res) => {
	if (!res.ok) {
		return Promise.reject(`Error: ${res.status}`);
	}
	return res.json();
};

export const getAllMovies = async () => {
	const res = await fetch(`${baseUrl}/beatfilm-movies`, {
		headers: headers,
	});

	return checkRes(res);
};

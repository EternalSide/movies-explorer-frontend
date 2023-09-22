export default class Api {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl;
		this.headers = headers;
	}

	_checkRes(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Error: ${res.status}`);
	}

	registerUser = async (data) => {
		const res = await fetch(`${this._baseUrl}/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				email: data.email,
				password: data.password,
			}),
		});

		return this._checkRes(res);
	};

	loginUser = async ({ email, password }) => {
		const res = await fetch(`${this._baseUrl}/signin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});

		return this._checkRes(res);
	};

	getUserInfo = async (token) => {
		const res = await fetch(`${this._baseUrl}/users/me`, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`,
			},
		});

		return this._checkRes(res);
	};

	getSavedMovies = async () => {
		const res = await fetch(`${this._baseUrl}/movies`, {
			headers: this.headers,
		});

		return this._checkRes(res);
	};

	changeUserInfo = async ({ name, email }) => {
		const res = await fetch(`${this._baseUrl}/users/me`, {
			method: "PATCH",
			headers: this.headers,
			body: JSON.stringify({
				name,
				email,
			}),
		});
		return this._checkRes(res);
	};

	deleteMovie = async (movieId) => {
		const res = await fetch(`${this._baseUrl}/movies/${movieId}`, {
			method: "DELETE",
			headers: this.headers,
		});

		return this._checkRes(res);
	};

	saveMovie = async ({
		country,
		director,
		duration,
		year,
		description,
		image,
		trailerLink,
		thumbnail,
		movieId,
		nameRU,
		nameEN,
	}) => {
		const res = await fetch(`${this._baseUrl}/movies`, {
			method: "POST",
			headers: this.headers,
			body: JSON.stringify({
				country,
				director,
				duration,
				year,
				description,
				image,
				trailerLink,
				thumbnail,
				movieId,
				nameRU,
				nameEN,
			}),
		});

		return this._checkRes(res);
	};
}

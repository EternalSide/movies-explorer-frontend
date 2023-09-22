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
		try {
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
		} catch (error) {
			console.error("Произошла ошибка при отправке запроса:", error);
		}
	};

	loginUser = async ({ email, password }) => {
		try {
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
		} catch (error) {
			console.error("Произошла ошибка при отправке запроса:", error);
		}
	};

	getUserInfo = async () => {
		try {
			const res = await fetch(`${this._baseUrl}/users/me`, {
				headers: this.headers,
			});

			return this._checkRes(res);
		} catch (error) {
			console.error("Произошла ошибка при отправке запроса:", error);
		}
	};

	getSavedMovies = async () => {
		try {
			const res = await fetch(`${this._baseUrl}/movies`, {
				headers: this.headers,
			});

			return this._checkRes(res);
		} catch (error) {
			console.error("Произошла ошибка при отправке запроса:", error);
		}
	};

	deleteMovie = async (movieId) => {
		try {
			const res = await fetch(`${this._baseUrl}/movies/${movieId}`, {
				method: "DELETE",
				headers: this.headers,
			});

			return this._checkRes(res);
		} catch (error) {
			console.error("Произошла ошибка при отправке запроса:", error);
		}
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
		try {
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
		} catch (error) {
			console.error("Произошла ошибка при отправке запроса:", error);
		}
	};

	changeUserInfo = async ({ name, email }) => {
		try {
			const res = await fetch(`${this._baseUrl}/users/me`, {
				method: "PATCH",
				headers: this.headers,
				body: JSON.stringify({
					name,
					email,
				}),
			});
			return this._checkRes(res);
		} catch (error) {
			console.error("Произошла ошибка при отправке запроса:", error);
		}
	};
}

import Logo from "images/logo.svg";
import "./Login.css";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import CurrentUserContext from "contexts/CurrentUserContext";

import { emailPattern } from "utils/regex";
import {
	EMAIL_MESSAGE,
	MAXLENGTH_PASSWORD_MESSAGE,
	MINLENGTH_PASSWORD_MESSAGE,
	REQUIRED_MESSAGE,
	SERVER_MESSAGE,
} from "utils/errorsText";

const Login = ({ loginUser, getUserInfo }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isDirty, isValid },
	} = useForm({
		mode: "onTouched",
	});

	const navigate = useNavigate();
	const { setCurrentUser } = useContext(CurrentUserContext);

	const [serverError, setServerError] = useState("");
	const [dataError, setDataError] = useState("");

	const onSubmit = async (values) => {
		try {
			setServerError("");
			setDataError("");

			const { email, password } = values;

			const { token } = await loginUser({ email, password });

			const user = await getUserInfo(token);

			if (user) {
				setCurrentUser({ ...user });
				localStorage.setItem("token", token);
				navigate("/movies");
			}
		} catch (error) {
			console.log(error);
			if (error === "Error: 401") return setDataError("Данные не совпадают.");
			setServerError(SERVER_MESSAGE);
		}
	};

	return (
		<section className='login'>
			<div className='login__container'>
				<Link to='/'>
					<img
						className='login__logo'
						src={Logo}
						alt='Лого сайта'
					/>
				</Link>
				<h1 className='login__title'>Рады видеть!</h1>
				<form
					className='login__form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='login__block'>
						<label
							className='login__label'
							htmlFor='email'
						>
							E-mail
						</label>
						<input
							disabled={isSubmitting}
							{...register("email", { required: true, pattern: emailPattern })}
							className='login__input'
							type='email'
							id='email'
							placeholder='Введите Email'
						/>
						{errors.email && <p className='login__error-message'>{EMAIL_MESSAGE}</p>}
					</div>
					<div className='login__block login__block_last'>
						<label
							className='login__label'
							htmlFor='password'
						>
							Пароль
						</label>
						<input
							disabled={isSubmitting}
							{...register("password", { required: true, minLength: 4, maxLength: 30 })}
							className='login__input'
							type='password'
							id='password'
							placeholder='Введите пароль'
						/>
						{errors.password && (
							<p className='login__error-message'>
								{errors.password.type === "required" && REQUIRED_MESSAGE}
								{errors.password.type === "minLength" && MINLENGTH_PASSWORD_MESSAGE}
								{errors.password.type === "maxLength" && MAXLENGTH_PASSWORD_MESSAGE}
							</p>
						)}
					</div>
					<div className='login__bottom'>
						<p className='login__error-message-server'>
							{serverError}
							{dataError}
						</p>
						<button
							disabled={!isDirty || !isValid || isSubmitting}
							className='login__button'
							type='submit'
						>
							Войти
						</button>
					</div>
				</form>
				<p className='login__question'>
					Ещё не зарегистрированы?{" "}
					<Link
						to='/sign-up'
						className='login__question-link'
					>
						Регистрация
					</Link>
				</p>
			</div>
		</section>
	);
};
export default Login;

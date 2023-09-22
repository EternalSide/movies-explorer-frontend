import { Link, useNavigate } from "react-router-dom";
import Logo from "images/logo.svg";
import "./Register.css";

import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import CurrentUserContext from "contexts/CurrentUserContext";

import { emailPattern } from "utils/regex";
import {
	EMAIL_MESSAGE,
	MAXLENGTH_MAME_MESSAGE,
	MAXLENGTH_PASSWORD_MESSAGE,
	MINLENGTH_NAME_MESSAGE,
	MINLENGTH_PASSWORD_MESSAGE,
	REQUIRED_MESSAGE,
	SERVER_MESSAGE,
} from "utils/errorsText";

const Register = ({ registerUser, loginUser }) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isDirty, isValid },
	} = useForm({
		mode: "onTouched",
	});

	const { setCurrentUser } = useContext(CurrentUserContext);
	const [serverError, setServerError] = useState("");
	const [duplicateError, setDuplicateError] = useState("");

	const onSubmit = async (values) => {
		try {
			setServerError("");
			setDuplicateError("");
			const { email, password } = values;

			const user = await registerUser(values);

			if (user) {
				const { token } = await loginUser({ email, password });
				setCurrentUser({ ...user });
				localStorage.setItem("token", token);
				navigate("/movies");
			}
		} catch (error) {
			console.log(error);
			if (error === "Error: 409") return setDuplicateError("Пользователь уже зарегистрирован.");
			setServerError(SERVER_MESSAGE);
		}
	};

	return (
		<section className='register'>
			<div className='register__container'>
				<Link to='/'>
					<img
						className='register__logo'
						src={Logo}
						alt='Лого сайта'
					/>
				</Link>
				<h1 className='register__title'>Добро пожаловать!</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='register__form'
				>
					<div className='register__block'>
						<label
							className='register__label'
							htmlFor='name'
						>
							Имя
						</label>
						<input
							disabled={isSubmitting}
							{...register("name", { required: true, minLength: 4, maxLength: 30 })}
							className={`register__input`}
							id='name'
							type='text'
							placeholder='Введите Имя'
						/>
						{errors.name && (
							<p className='register__error-message'>
								{errors.name.type === "required" && REQUIRED_MESSAGE}
								{errors.name.type === "minLength" && MINLENGTH_NAME_MESSAGE}
								{errors.name.type === "maxLength" && MAXLENGTH_MAME_MESSAGE}
							</p>
						)}
					</div>
					<div className='register__block'>
						<label
							className='register__label'
							htmlFor='email'
						>
							E-mail
						</label>
						<input
							disabled={isSubmitting}
							{...register("email", { required: true, pattern: emailPattern })}
							className='register__input'
							id='email'
							type='email'
							placeholder='Введите Email'
						/>
						{errors.email && (
							<p className='register__error-message'>
								{errors.email.type === "required" && REQUIRED_MESSAGE}
								{errors.email.type === "pattern" && EMAIL_MESSAGE}
							</p>
						)}
					</div>
					<div className='register__block register__block_last'>
						<label
							className='register__label'
							htmlFor='password'
						>
							Пароль
						</label>
						<input
							disabled={isSubmitting}
							{...register("password", { required: true, minLength: 4, maxLength: 30 })}
							placeholder='Ваш Пароль'
							className={`register__input ${errors.password && "register__input_error"}`}
							type='password'
							id='password'
						/>
						{errors.password && (
							<p className='register__error-message'>
								{errors.password.type === "required" && REQUIRED_MESSAGE}
								{errors.password.type === "minLength" && MINLENGTH_PASSWORD_MESSAGE}
								{errors.password.type === "maxLength" && MAXLENGTH_PASSWORD_MESSAGE}
							</p>
						)}
					</div>
					<div className='register__bottom'>
						<p className='register__error-message-server'>
							{serverError}
							{duplicateError}
						</p>
						<button
							disabled={!isDirty || !isValid || isSubmitting}
							type='submit'
							className='register__button'
						>
							Зарегистрироваться
						</button>
					</div>
				</form>
				<p className='register__question'>
					Уже зарегистрированы?{" "}
					<Link
						to='/sign-in'
						className='register__question-link'
					>
						Войти
					</Link>
				</p>
			</div>
		</section>
	);
};
export default Register;

import { Link } from "react-router-dom";
import Logo from "images/logo.svg";
import "./Login.css";
const Login = () => {
	return (
		<section class='login'>
			<div class='login__container'>
				<Link to='/'>
					<img
						class='login__logo'
						src={Logo}
						alt='Лого сайта'
					/>
				</Link>
				<h1 class='login__title'>Рады видеть!</h1>
				<form
					class='login__form'
					action='#'
				>
					<div class='login__block'>
						<label
							class='login__label'
							htmlFor='email'
						>
							E-mail
						</label>
						<input
							required
							placeholder='Введите Email'
							class='login__input'
							type='email'
							id='email'
						/>
					</div>
					<div class='login__block login__block_last'>
						<label
							class='login__label'
							htmlFor='password'
						>
							Пароль
						</label>
						<input
							required
							minLength={4}
							maxLength={30}
							placeholder='Введите пароль'
							class='login__input'
							type='password'
							id='password'
						/>
					</div>
					<button
						class='login__button'
						type='submit'
					>
						Войти
					</button>
				</form>
				<p class='login__question'>
					Ещё не зарегистрированы?{" "}
					<Link
						to='/sign-up'
						class='login__question-link'
					>
						Регистрация
					</Link>
				</p>
			</div>
		</section>
	);
};
export default Login;

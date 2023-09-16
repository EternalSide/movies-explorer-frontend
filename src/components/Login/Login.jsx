import { Link } from "react-router-dom";
import Logo from "images/logo.svg";
import "./Login.css";
const Login = () => {
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
					action='#'
				>
					<div className='login__block'>
						<label
							className='login__label'
							htmlFor='email'
						>
							E-mail
						</label>
						<input
							required
							placeholder='Введите Email'
							className='login__input'
							type='email'
							id='email'
						/>
					</div>
					<div className='login__block login__block_last'>
						<label
							className='login__label'
							htmlFor='password'
						>
							Пароль
						</label>
						<input
							required
							minLength={4}
							maxLength={30}
							placeholder='Введите пароль'
							className='login__input'
							type='password'
							id='password'
						/>
					</div>
					<button
						className='login__button'
						type='submit'
					>
						Войти
					</button>
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

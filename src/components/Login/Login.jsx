import { Link } from "react-router-dom";
import Logo from "images/logo.svg";
import "./Login.css";
const Login = () => {
	return (
		<div className='login'>
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
							className='login__input'
							type='text'
							id='email'
						/>
					</div>
					<div className='login__block'>
						<label
							className='login__label'
							htmlFor='password'
						>
							Пароль
						</label>
						<input
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
						className='login__question_link'
					>
						Регистрация
					</Link>
				</p>
			</div>
		</div>
	);
};
export default Login;

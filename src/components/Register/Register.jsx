import { Link } from "react-router-dom";
import Logo from "images/logo.svg";
import "./Register.css";
const Register = () => {
	return (
		<div className='register'>
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
					action='#'
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
							className='register__input'
							id='name'
							type='text'
						/>
					</div>
					<div className='register__block'>
						<label
							className='register__label'
							htmlFor='email'
							type='text'
						>
							E-mail
						</label>
						<input
							className='register__input'
							id='email'
						/>
					</div>
					<div className='register__block'>
						<label
							className='register__label'
							htmlFor='password'
						>
							Пароль
						</label>
						<input
							className='register__input'
							type='password'
							id='password'
						/>
					</div>
					<button
						type='submit'
						className='register__button'
					>
						Зарегистрироваться
					</button>
				</form>
				<p className='register__question'>
					Уже зарегистрированы?{" "}
					<Link
						to='/sign-in'
						className='register__question_link'
					>
						Войти
					</Link>
				</p>
			</div>
		</div>
	);
};
export default Register;

import { Link } from "react-router-dom";
import Logo from "images/logo.svg";
import "./Register.css";
const Register = () => {
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
							minLength={4}
							maxLength={30}
							required
							placeholder='Введите Имя'
							className='register__input'
							id='name'
							type='text'
						/>
					</div>
					<div className='register__block'>
						<label
							className='register__label'
							htmlFor='email'
						>
							E-mail
						</label>
						<input
							required
							placeholder='Введите Email'
							className='register__input'
							id='email'
							type='email'
						/>
					</div>
					<div className='register__block register__block_last'>
						<label
							className='register__label'
							htmlFor='password'
						>
							Пароль
						</label>
						<input
							required
							placeholder='Ваш Пароль'
							className='register__input'
							type='password'
							id='password'
							minLength={4}
							maxLength={30}
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

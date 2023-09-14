import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "images/logo.svg";
import UserIcon from "images/usericon.svg";
import MenuIcon from "images/menu.svg";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";

const Header = () => {
	const { pathname } = useLocation();
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const isLandingPage = pathname === "/";
	const auth = true;

	return (
		<>
			<Navigation
				isMobileMenuOpen={isMobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>
			<header className={`header ${isLandingPage && "header_landing"}`}>
				<div className='header__container'>
					<Link to='/'>
						<img
							className='header__logo'
							src={Logo}
							alt='Лого сайта'
						/>
					</Link>
					{auth ? (
						<div className='header__user-panel'>
							<button
								onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
								className='header__menu-button'
							>
								<img
									src={MenuIcon}
									alt='Иконка Меню'
									className='header__menu-icon'
								/>
							</button>
							<div className='header__user-links'>
								<Link
									className={`header__user-link ${pathname === "/movies" && "header__user-link_active"} `}
									to='/movies'
								>
									Фильмы
								</Link>
								<Link
									className={`header__user-link ${pathname === "/saved-movies" && "header__user-link_active"}`}
									to='/saved-movies'
								>
									Сохранённые фильмы
								</Link>
							</div>

							<Link
								className='header__user-link header__account-link'
								to='/profile'
							>
								Аккаунт
								<button className={`header__account-button ${isLandingPage && "header__account-button_landing"}`}>
									<img
										src={UserIcon}
										alt='Аккаунт'
									/>
								</button>
							</Link>
						</div>
					) : (
						<div className='header__auth'>
							<Link
								className='header__registration-link'
								to='/sign-up'
							>
								Регистрация
							</Link>
							<Link
								to='/sign-in'
								className='header__login-link'
							>
								Войти
							</Link>
						</div>
					)}
				</div>
			</header>
		</>
	);
};
export default Header;

import UserIcon from "images/usericon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
const Navigation = ({ isMobileMenuOpen, setMobileMenuOpen }) => {
	const navigate = useNavigate();
	const routes = [
		{
			label: "Главная",
			href: "/",
		},
		{
			label: "Фильмы",
			href: "/movies",
		},
		{
			label: "Сохраненные фильмы",
			href: "/saved-movies",
		},
	];
	const { pathname } = useLocation();

	return (
		<div className={`mobilemenu ${!isMobileMenuOpen && "mobilemenu_hidden"}`}>
			<div className={`mobilemenu__container ${isMobileMenuOpen && "mobilemenu__container_open"}`}>
				<button
					type='button'
					onClick={() => setMobileMenuOpen(false)}
					className='mobilemenu__close-button'
				/>
				<nav>
					<ul className='mobilemenu__list'>
						{routes.map((route) => {
							const isActive = route.href === pathname;
							return (
								<Link
									className='mobilemenu__list-link'
									key={route.href}
									to={route.href}
								>
									<li className={`mobilemenu__list-item ${isActive && "mobilemenu__list-item_active"}`}>
										{route.label}
									</li>
								</Link>
							);
						})}
					</ul>
				</nav>
				<div>
					<button
						onClick={() => {
							setMobileMenuOpen(false);
							navigate("/profile");
						}}
						className={`mobilemenu__button`}
					>
						Аккаунт
						<div className='mobilemenu__button-icon'>
							<img
								className='mobilemenu__button-image'
								src={UserIcon}
								alt='Аккаунт'
							/>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};
export default Navigation;

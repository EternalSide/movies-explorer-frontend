import Header from "components/Header/Header";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
const Profile = () => {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<section className='profile'>
				<div className='profile__container'>
					<h1 className='profile__name'>Привет, Виталий!</h1>
					<div className='profile__info'>
						<div className='profile__block profile__block_name'>
							<p className='profile__block-title'>Имя</p>
							<p className='profile__block-subtitle'>Виталий</p>
						</div>
						<div className='profile__block'>
							<p className='profile__block-title'>E-mail</p>
							<p className='profile__block-subtitle'>pochta@yandex.ru</p>
						</div>
					</div>

					<div class='profile__buttons'>
						<button
							type='button'
							className='profile__button profile__button_edit'
						>
							Редактировать
						</button>
						<button
							onClick={() => navigate("/")}
							type='button'
							className='profile__button profile__button_logout'
						>
							Выйти из аккаунта
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
export default Profile;

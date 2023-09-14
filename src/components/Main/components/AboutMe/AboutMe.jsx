import BlockTitle from "../BlockTitle/BlockTitle";
import "./AboutMe.css";
import myPicture from "images/avatar.jpg";
const AboutMe = () => {
	return (
		<section className='aboutme'>
			<BlockTitle title='Студент' />
			<div className='aboutme__container'>
				<div className='aboutme__info'>
					<h3 className='aboutme__name'>Виталий</h3>
					<p className='aboutme__hobby'>Фронтенд-разработчик, 30 лет</p>
					<p className='aboutme__bio'>
						Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
						музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После
						того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
					</p>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/EternalSide'
						className='aboutme__link'
					>
						Github
					</a>
				</div>
				<div className='aboutme__image-container'>
					<img
						className='aboutme__image'
						src={myPicture}
						alt='Мое фото'
					/>
				</div>
			</div>
		</section>
	);
};
export default AboutMe;

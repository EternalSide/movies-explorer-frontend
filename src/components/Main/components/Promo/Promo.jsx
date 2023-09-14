import promoImage from "images/promoImage.png";
import "./Promo.css";
const Promo = () => {
	return (
		<section className='promo'>
			<div className='promo__container'>
				<div className='promo__info'>
					<h1 className='promo__title'>
						Учебный проект студента факультета
						<br /> Веб-разработки.
					</h1>
					<p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
					<a
						href='#about'
						className='promo__button'
						type='button'
					>
						Узнать больше
					</a>
				</div>
				<img
					className='promo__logo'
					src={promoImage}
					alt='Изображении в секции'
				/>
			</div>
		</section>
	);
};
export default Promo;

import "./Footer.css";
const Footer = () => {
	return (
		<footer className='footer'>
			<p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
			<div className='footer__border' />
			<div className='footer__bottom'>
				<p className='footer__date'>© 2020</p>
				<nav>
					<ul className='footer__list'>
						<li className='footer__list-item'>
							<a
								className='footer__list__link'
								href='https://practicum.yandex.ru/'
								target='_blank'
								rel='noreferrer'
							>
								Яндекс.Практикум
							</a>
						</li>
						<li className='footer__list-item'>
							<a
								className='footer__list__link'
								href='https://github.com/'
								target='_blank'
								rel='noreferrer'
							>
								Github
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};
export default Footer;

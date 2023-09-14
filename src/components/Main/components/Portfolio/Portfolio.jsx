import "./Portfolio.css";
const Portfolio = () => {
	const links = [
		{
			label: "Статичный сайт",
			href: "https://github.com/EternalSide/how-to-learn",
		},
		{
			label: "Адаптивный сайт",
			href: "https://github.com/EternalSide/russian-travel",
		},
		{
			label: "Одностраничное приложение",
			href: "https://github.com/EternalSide/mesto",
		},
	];
	return (
		<section className='port'>
			<h3 className='port__title'>Портфолио</h3>
			<nav className='port__nav'>
				<ul className='port__list'>
					{links.map((link) => {
						const lastLink = link.label === "Одностраничное приложение";
						return (
							<li key={link.href}>
								<a
									href={link.href}
									key={link.href}
									to={link.href}
									target='_blank'
									rel='noreferrer'
									className={`port__link ${lastLink && "port__link_last"}`}
								>
									<h3 className='port__link-title'>{link.label}</h3>
									<p className='port__arrow'>↗</p>
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</section>
	);
};
export default Portfolio;

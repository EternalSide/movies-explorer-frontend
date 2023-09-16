import BlockTitle from "../BlockTitle/BlockTitle";
import "./Techs.css";
const Techs = () => {
	const items = [
		{
			label: "HTML",
		},
		{
			label: "CSS",
		},
		{
			label: "JS",
		},
		{
			label: "React",
		},
		{
			label: "Git",
		},
		{
			label: "Express.js",
		},
		{
			label: "mongoDB",
		},
	];
	return (
		<section className='techs'>
			<div className='techs__container'>
				<BlockTitle title='Технологии' />
				<div className='techs__info'>
					<div className='techs__heading'>
						<h3 className='techs__title'>7 технологий</h3>
						<p className='techs__subtitle'>
							На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
						</p>
					</div>

					<ul className='techs__list'>
						{items.map((item) => (
							<li
								key={item.label}
								className='techs__list-item'
							>
								{item.label}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
export default Techs;

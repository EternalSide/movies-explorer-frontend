import BlockTitle from "../BlockTitle/BlockTitle";
import "./AboutProject.css";
const AboutProject = () => {
	const items = [
		{
			title: "Дипломный проект включал 5 этапов",
			info: "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
		},
		{
			title: "На выполнение диплома ушло 5 недель",
			info: "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
		},
	];
	return (
		<section
			id='about'
			className='about'
		>
			<div className='about__container'>
				<BlockTitle title='О проекте' />
				<div className='about__info'>
					{items.map((item) => (
						<div
							key={item.title}
							className='about__info-block'
						>
							<h3 className='about__info-block-title'>{item.title}</h3>
							<p className='about__info-block-subtitle'>{item.info}</p>
						</div>
					))}
				</div>

				<div className='about__progress'>
					<div>
						<div className='about__progress-green'>
							<p>1 неделя</p>
						</div>
						<p className='about__subtitle'>Back-end</p>
					</div>
					<div className='about__progress-gray-container'>
						<div className='about__progress-gray'>
							<p>4 недели</p>
						</div>
						<p className='about__subtitle'>Front-end</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutProject;

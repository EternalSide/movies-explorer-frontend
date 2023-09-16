import "./BlockTitle.css";
const BlockTitle = ({ title }) => {
	const techSection = title === "Технологии";

	return (
		<div className='blocktitle'>
			<h3 className={`blocktitle__title ${techSection && "blocktitle__title_tech"}`}>{title}</h3>
		</div>
	);
};
export default BlockTitle;

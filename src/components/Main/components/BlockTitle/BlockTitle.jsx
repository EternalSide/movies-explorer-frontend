import "./BlockTitle.css";
const BlockTitle = ({ title }) => {
	return (
		<div className='blocktitle__heading'>
			<h3 className='blocktitle__title'>{title}</h3>
		</div>
	);
};
export default BlockTitle;

import { useNavigate } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
	const navigate = useNavigate();
	return (
		<section className='notfound'>
			<h1 className='notfound__title'>404</h1>
			<p className='notfound__subtitle'>Страница не найдена</p>
			<button
				type='button'
				onClick={() => navigate(-1)}
				className='notfound__button'
			>
				Назад
			</button>
		</section>
	);
};
export default NotFound;

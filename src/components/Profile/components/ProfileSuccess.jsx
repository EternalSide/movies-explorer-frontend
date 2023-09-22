import "./ProfileSuccess.css";
import successPicture from "images/successPicture.svg";

const ProfileSuccess = ({ isPopupOpen, setIsPopupOpen }) => {
	console.log(isPopupOpen);
	return (
		<div className={isPopupOpen ? "popup popup_opened" : "popup"}>
			<div className='popup-info'>
				<button
					className='popup__close'
					type='button'
					onClick={() => setIsPopupOpen(false)}
				></button>
				<img
					src={successPicture}
					alt='Картинка со статусом запроса'
				/>
				<h2>Информация обновлена!</h2>
			</div>
		</div>
	);
};
export default ProfileSuccess;

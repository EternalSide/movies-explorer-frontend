import "./Profile.css";
import Header from "components/Header/Header";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CurrentUserContext from "contexts/CurrentUserContext";

import { clearUserData } from "utils/clearUserData";
import { emailPattern } from "utils/regex";

const Profile = ({ changeUserInfo }) => {
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
	const [editProfile, setEditProfile] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { isSubmitting, isDirty, isValid },
	} = useForm({
		mode: "onChange",
		defaultValues: { name: currentUser?.name, email: currentUser?.email },
	});

	useEffect(() => {
		if (currentUser) {
			setValue("email", currentUser?.email);
			setValue("name", currentUser?.name);
		}
	}, [currentUser, setValue]);

	const formSubmit = async (values) => {
		try {
			const updatedInfo = await changeUserInfo({ name: values.name, email: values.email });

			if (updatedInfo) {
				setCurrentUser({ ...updatedInfo });
				setEditProfile(false);
				reset();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const signOut = () => {
		clearUserData();
		setCurrentUser(null);
		navigate("/");
	};

	const onEditOpen = (e) => {
		e.preventDefault();
		setEditProfile(false);
	};
	return (
		<>
			<Header />
			<section className='profile'>
				<div className='profile__container'>
					<h1 className='profile__name'>Привет, {currentUser?.name}!</h1>
					<form onSubmit={handleSubmit(formSubmit)}>
						<div className='profile__info'>
							<div className='profile__block profile__block_name'>
								<p className='profile__block-title'>Имя</p>
								{editProfile ? (
									<input
										className='profile__input'
										disabled={isSubmitting}
										minLength={4}
										maxLength={30}
										{...register("name", { required: true, minLength: 4, maxLength: 30 })}
									/>
								) : (
									<p className='profile__block-subtitle'>{currentUser?.name}</p>
								)}
							</div>
							<div className='profile__block'>
								<p className='profile__block-title'>E-mail</p>
								{editProfile ? (
									<input
										minLength={4}
										maxLength={30}
										className='profile__input'
										disabled={isSubmitting}
										{...register("email", { required: true, pattern: emailPattern })}
									/>
								) : (
									<p className='profile__block-subtitle'>{currentUser?.email}</p>
								)}
							</div>
							{editProfile && (
								<button
									type='button'
									onClick={onEditOpen}
									className='profile__cancel'
								>
									Отменить
								</button>
							)}
						</div>

						<div className='profile__buttons'>
							{editProfile ? (
								<>
									<button
										disabled={isSubmitting || !isValid || !isDirty}
										className='profile__button-save-edit'
										type='submit'
									>
										Сохранить
									</button>
								</>
							) : (
								<>
									<button
										onClick={(e) => {
											e.preventDefault();
											setEditProfile(true);
										}}
										type='button'
										className='profile__button profile__button_edit'
									>
										Редактировать
									</button>
									<button
										onClick={signOut}
										type='button'
										className='profile__button profile__button_logout'
									>
										Выйти из аккаунта
									</button>
								</>
							)}
						</div>
					</form>
				</div>
			</section>
		</>
	);
};
export default Profile;

import "./SavedMoviesForm.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { getSearchResultsCheckedsSaved, getSearchResultsSaved } from "utils/getSearchResults";

const SavedMoviesForm = ({ searchData, setSavedMoviesSearch }) => {
	const [isChecked, setIsChecked] = useState(Boolean(localStorage.getItem("checkedOnSaved")) || false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		mode: "onSubmit",
	});

	const checkHandler = () => {
		setIsChecked(!isChecked);
		getSearchResultsCheckedsSaved({
			isChecked: !isChecked,
			searchData: searchData,
			setResults: setSavedMoviesSearch,
		});
	};

	const onSearchSubmit = (values) => {
		getSearchResultsSaved({
			isChecked: isChecked,
			searchData: searchData,
			setResults: setSavedMoviesSearch,
			values: values,
		});
	};

	return (
		<section className='savedform'>
			<form onSubmit={handleSubmit(onSearchSubmit)}>
				<div className='savedform__container'>
					<input
						disabled={isSubmitting}
						{...register("value", { required: true, minLength: 1 })}
						type='text'
						className='savedform__input'
						placeholder='Фильм'
					/>
					<button
						disabled={isSubmitting}
						className='savedform__button'
					>
						Поиск
					</button>
				</div>
				<p className='savedform__error'>{errors.value && "Нужно ввести ключевое слово"}</p>

				<div className='savedform__checker-container'>
					<label
						htmlFor='checkbox'
						className='savedform__checkbox'
					>
						<input
							checked={isChecked}
							onChange={checkHandler}
							className='savedform__checkbox-input'
							id='checkbox'
							type='checkbox'
						/>
						<span className='savedform__checkbox-slider' />
					</label>
					<p className='savedform__checkbox-title'>Короткометражки</p>
				</div>
			</form>
		</section>
	);
};
export default SavedMoviesForm;

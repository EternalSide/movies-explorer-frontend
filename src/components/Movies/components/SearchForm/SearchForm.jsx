import "./SearchForm.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { getSearchResults, getSearchResultsChecked } from "utils/getSearchResults";

const SearchForm = ({ searchMovies, allMovies, setSearchMovies, setIsLoading, setServerError }) => {
	const [isChecked, setIsChecked] = useState(Boolean(localStorage.getItem("checked")) || false);
	const lastSearchValue = localStorage.getItem("lastSearchValue");

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		mode: "onSubmit",
		defaultValues: {
			value: lastSearchValue,
		},
	});

	const checkHandler = () => {
		localStorage.getItem("checked") ? localStorage.removeItem("checked") : localStorage.setItem("checked", true);
		setIsChecked(!isChecked);

		if (searchMovies?.length >= 1) {
			getSearchResultsChecked({
				isChecked: !isChecked,
				setResults: setSearchMovies,
			});
		}
	};

	const onSearchSubmit = (values) => {
		getSearchResults({
			isChecked: isChecked,
			moviesPage: true,
			searchData: allMovies,
			setIsLoading: setIsLoading,
			setServerError: setServerError,
			setResults: setSearchMovies,
			values: values,
		});
	};

	return (
		<section className='searchform'>
			<form onSubmit={handleSubmit(onSearchSubmit)}>
				<div className='searchform__container'>
					<input
						disabled={isSubmitting}
						{...register("value", { required: true, minLength: 1 })}
						type='text'
						className='searchform__input'
						placeholder='Фильм'
					/>
					<button
						disabled={isSubmitting}
						className='searchform__button'
					>
						Поиск
					</button>
				</div>
				<p className='searchform__error'>{errors.value && "Нужно ввести ключевое слово"}</p>

				<div className='searchform__checker-container'>
					<label
						htmlFor='checkbox'
						className='searchform__checkbox'
					>
						<input
							checked={isChecked}
							onChange={checkHandler}
							className='searchform__checkbox-input'
							id='checkbox'
							type='checkbox'
						/>
						<span className='searchform__checkbox-slider' />
					</label>
					<p className='searchform__checkbox-title'>Короткометражки</p>
				</div>
			</form>
		</section>
	);
};
export default SearchForm;

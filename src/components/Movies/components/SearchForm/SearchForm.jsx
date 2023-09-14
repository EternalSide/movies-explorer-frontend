import "./SearchForm.css";
const SearchForm = () => {
	return (
		<>
			<form className='searchform'>
				<input
					type='text'
					className='searchform__input'
					placeholder='Фильм'
				/>
				<button className='searchform__button'>Поиск</button>
			</form>
			<div className='searchform__checker-container'>
				<label
					htmlFor='checkbox'
					className='searchform__checkbox'
				>
					<input
						className='searchform__checkbox-input'
						id='checkbox'
						type='checkbox'
					/>
					<span className='searchform__checkbox-slider'></span>
				</label>
				<p className='searchform__checkbox-title'>Короткометражки</p>
			</div>
		</>
	);
};
export default SearchForm;

import "./SearchForm.css";
const SearchForm = () => {
	return (
		<section className='searchform'>
			<form>
				<div className='searchform__container'>
					<input
						type='text'
						className='searchform__input'
						placeholder='Фильм'
					/>
					<button className='searchform__button'>Поиск</button>
				</div>
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
						<span className='searchform__checkbox-slider' />
					</label>
					<p className='searchform__checkbox-title'>Короткометражки</p>
				</div>
			</form>
		</section>
	);
};
export default SearchForm;

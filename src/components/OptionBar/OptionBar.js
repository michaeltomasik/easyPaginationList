import React, { PropTypes } from 'react'
import './OptionBar.scss'

export const OptionBar = (
  {
    handleChangeSearch,
    handleChangeRating,
    handleOnClickReset,
    handleOnClickSearch,
    query,
    rating
  }) => (

  <div className='option-bar'>
    <div className='search-input'>
      <input
        type='text'
        placeholder='Search suppliers'
        onChange={handleChangeSearch}
        value={query} />
    </div>
    <div className='rating'>
      <select
        onChange={handleChangeRating}
        value={Number(rating)}>
        <option value={0} hidden>Select pound rating</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
    <div className='reset-button'>
      <div onClick={handleOnClickReset} className='button'> Reset </div>
    </div>
    <div className='search-button'>
      <div onClick={handleOnClickSearch} className='button'> Search </div>
    </div>
  </div>
)

OptionBar.propTypes = {
  handleChangeSearch: PropTypes.func.isRequired,
  handleChangeRating: PropTypes.func.isRequired,
  handleOnClickReset: PropTypes.func.isRequired,
  handleOnClickSearch: PropTypes.func.isRequired,
  query: PropTypes.string,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default OptionBar

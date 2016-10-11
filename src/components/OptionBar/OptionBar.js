import React from 'react'
import classes from './OptionBar.scss'

export const OptionBar = React.createClass({
  render: function() {
    const { handleChangeSearch, handleChangeRating, handleOnClickReset, handleOnClickSearch, query, rating } = this.props

    return (
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
            value={rating}>
            <option value={0} hidden>Select pound rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div  className='reset-button'>
          <div onClick={handleOnClickReset} className='button'> Reset </div>
        </div>
        <div className='search-button'>
          <div onClick={handleOnClickSearch} className='button'> Search </div>
        </div>
      </div>
    )
  }
})

export default OptionBar

import React, { PropTypes } from 'react'
import { Pagination } from 'react-bootstrap'
import classes from './PaginationAdvanced.scss'

export const PaginationAdvanced = (
  {
    handlePageChanged,
    active,
    max
  }) => (

  <Pagination
    prev
    next
    boundaryLinks
    ellipsis
    items={max}
    maxButtons={5}
    activePage={active}
    onSelect={handlePageChanged}
    bsClass={classes.pagintion} />
)

PaginationAdvanced.propTypes = {
  handlePageChanged: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  max: PropTypes.number
}

export default PaginationAdvanced

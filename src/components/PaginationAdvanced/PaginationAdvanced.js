import React, { PropTypes } from 'react'
import { Pagination } from 'react-bootstrap'

import ArrowLeft from 'react-icons/lib/fa/chevron-left'
import ArrowRight from 'react-icons/lib/fa/chevron-right'

import classes from './PaginationAdvanced.scss'

export const PaginationAdvanced = (
  {
    handlePageChanged,
    active,
    max
  }) => (

  <Pagination
    prev={<ArrowLeft size={10} />}
    next={<ArrowRight size={10} />}
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

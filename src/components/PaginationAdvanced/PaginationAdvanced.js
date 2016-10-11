import React from 'react'
import { Pagination } from 'react-bootstrap'
import classes from './PaginationAdvanced.scss'

export const PaginationAdvanced = React.createClass({
    getInitialState: function () {
        return {
            total:        11,
            current:      7,
            visiblePages: 4
        };
    },

    handlePageChanged: function ( newPage ) {
      console.log(newPage)
        this.setState({ current : newPage });
    },

    render: function() {
      const { handlePageChanged, active, items, max } = this.props;
      console.log(items,'items');
      return (
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
      );
    }
});

export default PaginationAdvanced

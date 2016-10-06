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
        return (
           <Pagination
          prev
          next
          boundaryLinks
          items={20}
          maxButtons={5}
          activePage={1}
          onSelect={this.handlePageChanged} />);
    }
});

export default PaginationAdvanced

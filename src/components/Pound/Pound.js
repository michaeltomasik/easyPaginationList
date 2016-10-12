import React, { Component, PropTypes } from 'react'
import './Pound.scss'

export default class Pound extends Component {
  render () {
    let nameMap = {
      isDisabled: 'is-disabled',
      isActive: 'is-active',
      willBeActive: 'will-be-active'
    }
    let className = Object.keys(nameMap)
          .filter((prop) => this.props[prop])
          .map((prop) => nameMap[prop])
          .join(' ')
    return (
      <div className={className}>
        <span>£</span>
      </div>
    )
  }
}

Pound.defaultProps = {
  willBeActive: false,
  isActive: false,
  isDisabled: false
}

Pound.propTypes = {
  isActive: PropTypes.bool,
  willBeActive: PropTypes.bool,
  isDisabled: PropTypes.bool
}

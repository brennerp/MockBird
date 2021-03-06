import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dialog } from '@blueprintjs/core'

export default class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    render: PropTypes.func,
    title: PropTypes.string.isRequired,
    children: PropTypes.object,
    width: PropTypes.string,
  }

  render() {
    return (
      <Dialog
        isOpen={this.props.isOpen}
        onClose={() => this.props.closeModal()}
        title={this.props.title}
        style={this.props.width ? { width: this.props.width } : {}}
      >
        {this.props.render ? this.props.render() : this.props.children}
      </Dialog>
    )
  }
}

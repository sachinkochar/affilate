import React, { Component } from 'react'

export default class GradButton extends Component {
  render() {
    return (
        <button type="button" className={this.props.class}>{this.props.text}</button>
    )
  }
}

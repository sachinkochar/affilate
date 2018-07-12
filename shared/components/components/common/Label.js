import React, { Component } from 'react'

export default class Label extends Component {
  render() {
    return (
      <label htmlFor={this.props.for} className={this.props.class}>{this.props.text}</label>
    )
  }
}

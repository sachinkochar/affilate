import React, { Component } from 'react'

export default class Paragraph extends Component {
  render() {
    return (
        <p className={this.props.class}>{this.props.text}</p>
    )
  }
}

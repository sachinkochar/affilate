import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    return (
        <textarea className={this.props.class} id={this.props.id} rows={this.props.rows}></textarea>
    )
  }
}

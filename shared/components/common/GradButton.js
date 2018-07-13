import React, { Component } from 'react'

export default class GradButton extends Component {
  render() {
    const {disabled, text} = this.props;
    return (
        <button onClick={this.props.click} type="button" className={this.props.class}>{text}</button>
    )
  }
}

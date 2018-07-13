import React, { Component } from 'react'

export default class InputText extends Component {
  render() {
    return (
      <div>
            <input type={this.props.type} id={this.props.id} className={this.props.class} />
      </div>
    )
  }
}

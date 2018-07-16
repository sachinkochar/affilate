import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    return (
      <img src={this.props.src} width={this.props.width} className={this.props.class} alt={this.props.alt} id={this.props.id}/>
    )
  }
}

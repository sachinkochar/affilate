import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    return (
      <img src={this.props.src} className={this.props.class} alt={this.props.alt} id={this.props.id}/>
    )
  }
}

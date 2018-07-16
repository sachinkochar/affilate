import React, { Component } from 'react'

export default class Select extends Component {
  render() {
    console.log("opt", this.props.opt);
    return (
      <select className={this.props.selectClass}>
          {this.props.opt.map((data) => {
            return  (<option className={data.class} value={data.value} disabled={data.disabled} selected={data.selected}>{data.text}</option>)
          })}
      </select>
    )
  }
}

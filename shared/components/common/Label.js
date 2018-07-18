import React, { Component } from 'react'

export default class Label extends Component {
  render() {
    let err = false;
    if(this.props.err){
      console.log("err", this.props)
      err = true;
    }
    return (
      <label
        htmlFor={this.props.for}
        className={this.props.class}
      >
        {this.props.text}
        {err
          ?(
            <span className="err">{` (${this.props.err.msg})`}</span>
          )
          :null
        }
      </label>
    )
  }
}

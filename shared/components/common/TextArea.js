import React, { Component } from 'react'

export default class TextArea extends Component {
  constructor(props){
    super(props);
    this.state={
      [this.props.name]: ""
    }
  }
  render() {
    const {id, type, name} = this.props;
    return (
        <textarea
          className={this.props.class}
          id={id}
          rows={this.props.rows}
          name={name}
          onChange={({target}) => {this.setState({ [name]: target.value }); this.props._setValue(target.value)}}
          value={this.state[name]}
        ></textarea>
    )
  }
}

import React, { Component } from 'react'

export default class InputText extends Component {
  constructor(props){
    super(props);
    this.state={
      [this.props.name]: ""
    }
  }
  render() {
    const {id, type, name} = this.props;
    return (
      <div>
            <input
              type={type}
              id={id}
              className={this.props.class}
              name={name}
              onChange={({target}) => {this.setState({ [name]: target.value }); this.props._setValue(target.value)}}
              value={this.state[name]}
            />
      </div>
    )
  }
}

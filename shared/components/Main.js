import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

export default class Main extends Component {
  render() {
    console.log("this+++", this.props)
    return (
      <div>
        <Header {...this.props} />
        {this.props.children}
        <Footer {...this.props} />
      </div>
    );
  }
}

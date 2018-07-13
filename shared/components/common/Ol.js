import React, { Component } from 'react'

export default class Ol extends Component {
  render() {
      const {olClass, ol} = this.props;
    return (
        <ol className={olClass}>
            {
                ol.map((data, i) => {
                    return(
                        <li data-target="#multi-item-example" key={i} data-slide-to={i} className={data.class}></li>
                    )
                })
            }
        </ol>
    )
  }
}

import React, { Component } from 'react'
import Image from './Image';
import Paragraph from './Paragraph';

export default class PriceCard extends Component {

  render() {
    let cardCount=[1,2]
    return(
        <div className={this.props.class}>
            {cardCount.map((data, i) => {
                return(
                    <div className={i%2==0 ? "col-md-5 offset-md-1" : "col-md-5"} key={i}>
                        <div className="card rounded">
                            <div className="row">
                                <div className="col-md-4">
                                    <Image class="card-img-top" src="../assets/images/price-card-image.png" alt="Card image cap"/>
                                </div>
                                <div className="col-md-8 my-auto">
                                    <div className="card-body mb-0 pl-0 pl-0">
                                        <Paragraph class="card-text font-weight-bold base-text" text="Xyx.com - 88 % Credibility"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
  }
}

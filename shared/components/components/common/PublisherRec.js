import React, { Component } from 'react'
import Image from './Image';
import Paragraph from './Paragraph';

export default class PublisherRec extends Component {
  render() {
    let cardCount=[1,2]
    return (
        <div>
            {
                cardCount.map((data, i) => {
                    return(
                        <div className={i%2==0 ? "col-md-5 offset-md-1" : "col-md-5"}>
                            <div className="card rounded">
                                <div className="row">
                                    <div className="col-md-4">
                                        <Image class="card-img-top" src="../assets/images/price-card-image.png" alt="Card image cap" />
                                    </div>
                                    <div className="col-md-8 my-auto">
                                        <div className="card-body mb-0 pl-0">
                                            <Paragraph class="card-text font-weight-bold base-text mb-2" text="Xyx.com - 88 % Credibility"/>
                                            <Paragraph class="card-text-small" text="Avg Sales -98 $"/>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <a className="btn-accept page-link" mdbWavesEffect>Accept</a>
                                                </div>
                                                <div className="col-md-5">
                                                    <a className="btn-reject page-link" mdbWavesEffect>Reject</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
  }
}

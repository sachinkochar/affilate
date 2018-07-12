import React, { Component } from 'react'
import PriceCard from './common/PriceCard';
import Ol from './common/Ol';
import PublisherRec from './common/PublisherRec';

export default class PriceComp extends Component {
  render() {
    let ol = [
        {class: "active"},
        {class: ""},
        {class: ""},
    ]
    return (
        <main>
            <div className="container ">
                <section className="mt-5 wow fadeIn pt-5">
                    <h2 className="text-center pt-5 base-text">Price Recommendation</h2>
                    <h5 className="text-center grey-text mb-4">Similar Businesses</h5>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                                <Ol olClass="carousel-indicators" ol={ol} />
                                <div className="carousel-inner mb-4 pt-4" role="listbox">
                                    <div className="carousel-item">
                                        <div className="row">
                                            <PriceCard />
                                        </div>
                                        <div className="row mt-4">
                                            <PriceCard />
                                        </div>

                                        <div className="row mt-4">
                                            <PriceCard />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <PriceCard />
                                        </div>
                                        <div className="row mt-4">
                                            <PriceCard />
                                        </div>
                                        <div className="row mt-4">
                                        <PriceCard />
                                        </div>
                                    </div>
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <PriceCard />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>
                <br/>
                <section className="mt-5 wow fadeIn pt-5 mb-5">
                    <h2 className="text-center pt-5 base-text">Recommended Publishers</h2>
                    <h5 className="text-center grey-text mb-4">Similar Businesses</h5>
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                                <Ol olClass="carousel-indicators" ol={ol} />
                                <div className="carousel-inner mb-4 pt-4" role="listbox">
                                    <div className="carousel-item">
                                        <div className="row">
                                            <PublisherRec />
                                        </div>
                                        <div className="row mt-4">
                                            <PublisherRec />
                                        </div>
                                        <div className="row mt-4">
                                            <PublisherRec />
                                        </div>
                                    </div>
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <PublisherRec />
                                        </div>
                                        <div className="row mt-4">
                                            <PublisherRec />
                                        </div>
                                        <div className="row mt-4">
                                            <PublisherRec />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center py-4 mt-3">
                    <button onclick="location.href='search.html'" className="btn blue-gradient btn-rounded px-5" type="submit">Next</button>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </main>
    )
  }
}

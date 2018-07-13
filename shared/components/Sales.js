import React, { Component } from 'react'
import Image from './common/Image';
import Paragraph from './common/Paragraph';

export default class Sales extends Component {
  render() {
    return (
        <main>
            <div className="container ">
                <section className="mt-5 wow fadeIn pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center base-text py-4 mb-0">Sales</h2>
                            <h5 className="text-center base-text mb-5">Blog , Website , E - Commerce Store</h5>
                            <div className="container card">
                                <div className="row graph-background mb-5">
                                    <div className="col-md-12 text-center mt-5">
                                        <h5 className="white-text">Accunt Value</h5>
                                        <h3 className="white-text">$4,543.32</h3>
                                    </div>
                                    <div className="col-md-12 text-center mt-3">
                                        <div className="row">
                                            <div className="col-md-1 offset-md-4 text-center mt-3">
                                                <Image src="../assets/images/Icon/previous.png" alt=""/>
                                            </div>
                                            <div className="col-md-2 text-center">
                                                <Paragraph class="white-text mb-1" text="Market Gain/Loss"/>
                                                <h6 className="white-text">+$20.17(1.02%)</h6>
                                            </div>
                                            <div className="col-md-1 text-center mt-3">
                                                <Image src="../assets/images/Icon/next.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 offset-md-2 form-inline py-0 px-0 pb-3 pt-3">
                                        <canvas id="line-chart" width="800" height="200"></canvas>
                                    </div>
                                    <div className="col-md-12 pb-3 text-center">
                                        <h6 className="white-text">MARKET CLOSED</h6>
                                    </div>
                                    <div className="col-md-6 offset-md-3 pb-5 text-center">
                                        <section>
                                            <ul className="nav nav-tabs nav-justified graph-tabs">
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#panel1" role="tab" aria-selected="false">1D</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#panel2" role="tab" aria-selected="false">1M</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#panel2" role="tab" aria-selected="false">3M</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#panel2" role="tab" aria-selected="false">6M</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#panel2" role="tab" aria-selected="false">1Y</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active show" data-toggle="tab" href="#panel3" role="tab" aria-selected="true">ALL</a>
                                                </li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                                <div className="row mx-5">
                                    <div className="col-md-10 mt-2 pl-0">
                                        <h5 className="font-weight-bold"><strong>Your Agressive Portfolio Breakdown</strong>
                                        </h5>
                                    </div>
                                    <div className="col-md-2 pr-0">
                                        <select className="form-control">
                                            <option className="grey-text" value="" disabled selected>% Percentage</option>
                                            <option value="1">Value</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mx-5 mt-3 mb-5">
                                    <div className="col-md-2 card rounded ml-4 stat-panel">
                                        <div className="row card-body text-center my-0 pb-0">
                                            <Paragraph class="h6text-center mt-0 mb-0" text="Large Company<br/>Stocks"/>
                                            <Paragraph class="h4 mx-auto mt-0 mb-3 color-primary" text="28.45%"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2 card rounded ml-4 stat-panel">
                                        <div className="row card-body text-center my-0 pb-0">
                                            <Paragraph class="h6text-center mt-0 mb-0" text="Large Company<br/>Stocks"/>
                                            <Paragraph class="h4 mx-auto mt-0 mb-3 color-primary" text="28.45%"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2 card rounded ml-4 stat-panel">
                                        <div className="row card-body text-center my-0 pb-0">
                                            <Paragraph class="h6text-center mt-0 mb-0" text="Large Company<br/>Stocks"/>
                                            <Paragraph class="h4 mx-auto mt-0 mb-3 color-primary" text="28.45%"/>
                                        </div>
                                    </div> <div className="col-md-2 card rounded ml-4 stat-panel">
                                        <div className="row card-body text-center my-0 pb-0">
                                            <Paragraph class="h6text-center mt-0 mb-0" text="Large Company<br/>Stocks"/>
                                            <Paragraph class="h4 mx-auto mt-0 mb-3 color-primary" text="28.45%"/>
                                        </div>
                                    </div> <div className="col-md-2 card rounded ml-4 stat-panel">
                                        <div className="row card-body text-center my-0 pb-0">
                                            <Paragraph class="h6text-center mt-0 mb-0" text="Large Company<br/>Stocks"/>
                                            <Paragraph class="h4 mx-auto mt-0 mb-3 color-primary" text="28.45%"/>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="text-center base-text mb-5 mt-5">Large Company Stock</h5>
                                <div className="card rounded mb-5 mx-5">
                                    <div className="row card-body mx-5 mb-4">
                                        <div className="col-md-6 align-middle border-right pr-5 pt-5">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td className="align-middle">
                                                            <Paragraph class="mt-2" text="Opnening Price"/>
                                                        </td>
                                                        <td className="align-middle">
                                                            <h6 className="font-weight-bold">$200.64</h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle">
                                                            <Paragraph class="mt-2" text="Previous Closing Price"/>
                                                        </td>
                                                        <td className="align-middle">
                                                            <h6 className="font-weight-bold">$200.64</h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle">
                                                            <Paragraph class="mt-2" text="52 Week Range"/>
                                                        </td>
                                                        <td className="align-middle">
                                                            <h6 className="font-weight-bold">$200.64</h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle">
                                                            <Paragraph class="mt-2" text="Volume"/>
                                                        </td>
                                                        <td className="align-middle">
                                                            <h6 className="font-weight-bold">$200.64</h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle">
                                                            <Paragraph class="mt-2" text="Year-To-Date Return"/>
                                                        </td>
                                                        <td className="align-middle">
                                                            <h6 className="font-weight-bold">$200.64</h6>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-6 align-middle">
                                            <div className="row">
                                                <div className="col-md-12 text-center mt-5">
                                                    <h5 className="base-text">Accunt Value</h5>
                                                    <h3 className="color-primary">$4,543.32</h3>
                                                </div>
                                                <div className="col-md-12 text-center mt-3">
                                                    <div className="row">
                                                        <div className="col-md-3 text-center mt-3">
                                                            <Image src="../assets/images/Icon/previous-dark.png" alt=""/>
                                                        </div>
                                                        <div className="col-md-6 text-center">
                                                            <Paragraph class="base-text mb-1" text="Market Gain/Loss"/>
                                                            <h6 className="color-primary">+$20.17(1.02%)</h6>
                                                        </div>
                                                        <div className="col-md-3 text-center mt-3">
                                                            <Image src="../assets/images/Icon/next-dark.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 offset-md-2 form-inline py-0 px-0 pb-3 pt-3">
                                                    <canvas id="line-chart-white" width="800" height="200"></canvas>
                                                </div>
                                                <div className="col-md-12 pb-3 text-center">
                                                    <h6 className="grey-text">MARKET CLOSED</h6>
                                                </div>
                                                <div className="col-md-12 pb-5 text-center">
                                                    <section>
                                                        <ul className="nav nav-tabs nav-justified graph-tabs-white">
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="tab" href="#panel1" role="tab" aria-selected="false">1D</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="tab" href="#panel2" role="tab" aria-selected="false">1M</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="tab" href="#panel2" role="tab" aria-selected="false">3M</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="tab" href="#panel2" role="tab" aria-selected="false">6M</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="tab" href="#panel2" role="tab" aria-selected="false">1Y</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link active show" data-toggle="tab" href="#panel3" role="tab" aria-selected="true">ALL</a>
                                                            </li>
                                                        </ul>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5 wow fadeIn pt-5">

                    <div className="row">

                        <div className="col-md-12">

                            <h2 className="text-center base-text py-4 mb-0">What websites have your products</h2>
                            <h5 className="text-center base-text mb-5">Blog , Website , E - Commerce Store</h5>

                            <div className="card rounded mb-4">
                                <div className="row card-body mx-5 mb-4">
                                    <div className="col-md-5 offset-md-1 align-middle">
                                        <h5 className="mt-3 mb-3">www.xyz.com </h5>
                                        <p>Credibility - 97 % <br/> User Trust - 89 % <br/> Brand value - Good </p>
                                        <p className="color-primary">Expected Profit - 72 $</p>
                                    </div>
                                    <div className="col-md-5 offset-md-1 align-middle">
                                        <h5 className="mt-3 mb-3">Blog Sub.- Insurance </h5>
                                        <p>Price - 8 $ / Sale<br/> Request for 8 $ / Sale</p>
                                        <p className="color-primary">Expected Sales - 99 $ / Month</p>
                                        <a className="btn-request page-link" mdbWavesEffect>Request</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card rounded mb-4">
                                <div className="row card-body mx-5 mb-4">
                                    <div className="col-md-5 offset-md-1 align-middle">
                                        <h5 className="mt-3 mb-3">www.xyz.com </h5>
                                        <p>Credibility - 97 % <br/> User Trust - 89 % <br/> Brand value - Good </p>
                                        <p className="color-primary">Expected Profit - 72 $</p>
                                    </div>
                                    <div className="col-md-5 offset-md-1 align-middle">
                                        <h5 className="mt-3 mb-3">Blog Sub.- Insurance </h5>
                                        <p>Price - 8 $ / Sale<br/> Request for 8 $ / Sale</p>
                                        <p className="color-primary">Expected Sales - 99 $ / Month</p>
                                        <a className="btn-request page-link" mdbWavesEffect>Request</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card rounded mb-4">
                                <div className="row card-body mx-5 mb-4">
                                    <div className="col-md-5 offset-md-1 align-middle">
                                        <h5 className="mt-3 mb-3">www.xyz.com </h5>
                                        <p>Credibility - 97 % <br/> User Trust - 89 % <br/> Brand value - Good </p>
                                        <p className="color-primary">Expected Profit - 72 $</p>
                                    </div>
                                    <div className="col-md-5 offset-md-1 align-middle">
                                        <h5 className="mt-3 mb-3">Blog Sub.- Insurance </h5>
                                        <p>Price - 8 $ / Sale<br/> Request for 8 $ / Sale</p>
                                        <p className="color-primary">Expected Sales - 99 $ / Month</p>
                                        <a className="btn-request page-link" mdbWavesEffect>Request</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card rounded mb-4">
                                <div className="row card-body mx-5 mb-4">
                                    <div className="col-md-5 offset-md-1 align-middle">
                                        <h5 className="mt-3 mb-3">www.xyz.com </h5>
                                        <p>Credibility - 97 % <br/> User Trust - 89 % <br/> Brand value - Good </p>
                                        <p className="color-primary">Expected Profit - 72 $</p>
                                    </div>
                                    <div className="col-md-5 offset-md-1 align-middle">
                                        <h5 className="mt-3 mb-3">Blog Sub.- Insurance </h5>
                                        <p>Price - 8 $ / Sale<br/> Request for 8 $ / Sale</p>
                                        <p className="color-primary">Expected Sales - 99 $ / Month</p>
                                        <a className="btn-request page-link" mdbWavesEffect>Request</a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mt-2">
                                    <h5 className="font-weight-bold">Showing <strong>0-5 out of 24</strong></h5>
                                </div>
                                <div className="col-md-8">
                                    <nav className="float-right">
                                        <ul className="pagination pagination-circle pg-blue mb-0">

                                            <li className="page-item disabled"><a className="btn-previous page-link" mdbWavesEffect>Previous</a></li>

                                            <li className="page-item disabled">
                                                <a className="page-link" mdbWavesEffect aria-label="Previous">
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>

                                            <li className="page-item active"><a className="pagination-items page-link" mdbWavesEffect>1</a></li>
                                            <li className="page-item"><a className="pagination-items page-link" mdbWavesEffect>2</a></li>
                                            <li className="page-item"><a className="pagination-items page-link" mdbWavesEffect>3</a></li>
                                            <li className="page-item"><a className="pagination-items page-link" mdbWavesEffect>4</a></li>
                                            <li className="page-item"><a className="pagination-items page-link" mdbWavesEffect>5</a></li>

                                            <li className="page-item">
                                                <a className="page-link" mdbWavesEffect aria-label="Next">
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>

                                            <li className="page-item"><a className="btn-next page-link">Next</a></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>


                        </div>
                    </div>

                </section>
                <br/>
                <br/>
                <br/>
                <br/>

                </div>
        </main>
    )
  }
}
